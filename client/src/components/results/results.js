import React from "react"
import Container from '../container/container'
import Row from '../row/row'
import Column from '../column/column'

const Results = ({ searchResults, handleView, handleSave }) => {

  return (
    searchResults.map(book =>
      (<Container className="container results-container" key={book.id}>
        <Row className="title-row">
          <Column className="col-md-6">
            <p className="title-text">{book.volumeInfo.title}</p>
            <p className="authors-text">{book.volumeInfo.authors}</p>
          </Column>
          <Column className="col-md-6 btn-container">
          <button
              onClick={() => { handleSave(book.id) }} className="save-btn">Save</button>
            <button onClick={handleView} className="view-btn"> <a href={book.volumeInfo.infoLink } target="_blank">View</a>
            </button>

          </Column>
        </Row>
        <Row className="contents-row">
          <Column className="col-md-4">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          </Column>

          <Column className="col-md-8">
            <p className="description-text">
              {book.volumeInfo.description}

            </p>
          </Column>
        </Row>
      </Container>
      )


    )

  )

}



export default Results