import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Column from "../components/column/column"
import Header from "../components/header/header"
import SearchInput from "../components/search-input/search-input"
import Results from "../components/results/results"
import API from "../util/API"
import axios from "axios"


const Search = () => {

    const [searchBook, setSearchBook] = useState("javascript")
    const [searchResults, setSearchResults] = useState([])



    const history = useHistory()

    useEffect(() => {
        fetchBookData()
    }, [])

    const fetchBookData = e => {
        
        axios(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=${process.env.REACT_APP_GOOGLE_BOOK_API}`)
            .then(response => {
                setSearchResults(response.data.items)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setSearchBook(value)

    }

    const handleSubmit = e => {
        e.preventDefault()
        fetchBookData()
    }



    const handleSave = id => {

        const findBook = searchResults.find(book => {
            return book.id === id
        })

        const bookData = {

            title: findBook.volumeInfo.title,
            authors: findBook.volumeInfo.authors,
            description: findBook.volumeInfo.description,
            image: findBook.volumeInfo.imageLinks.thumbnail,
            link: findBook.volumeInfo.infoLink,

        }
        API.saveBook(bookData)
            .then(response => {
               history.push("/saved")
            }

            )
            .catch(err => console.log(err))

    }



    return (
        <Container>
            <Row>
                <Column className="col-md-12 header">
                    <Header />
                </Column>
            </Row>
            <Row>
                <SearchInput handleInputChange={handleInputChange}
                    searchBook={searchBook}
                    handleSubmit={handleSubmit} />

            </Row>
            <Row>
                <Results
                    searchResults={searchResults}
                    handleSave={handleSave}
                />
            </Row>

        </Container>
    )
}

export default Search