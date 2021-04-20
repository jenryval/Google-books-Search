import React , {useState, useEffect }from "react"
import Container from "../components/container/container"
import Row from "../components/row/row"
import Column from "../components/column/column"
import Header from "../components/header/header"
import API from "../util/API"
import SavedResults from "../components/savedResults/savedResults"

const Saved = () =>{

    const [savedBooks, setSavedBooks] = useState([])

    const getSavedBooks = ()=>{
       API.getBooks()
       .then(storedBook => {
           setSavedBooks(storedBook.data)
       })

    }

    useEffect(()=>{
        getSavedBooks()
    }, [])
    
    
  

   const handleDelete = id => {
       
    const findBook = savedBooks.find(book=>{
      return book._id === id
    })
    console.log(findBook)

    API.deleteBook(findBook, id)
    .then(response => 
             {console.log(response)
             getSavedBooks()})
    .catch(err => console.log(err))

   }


    return (
        <Container>
          <Row>
              <Column className="col-md-12 header">
                  <Header/>
              </Column>
          </Row>
          <Row>
              <SavedResults
               savedBooks={savedBooks}
               handleDelete = {handleDelete}
              />
          </Row>
 
        </Container>
     )

}

export default Saved