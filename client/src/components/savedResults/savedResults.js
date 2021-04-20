import React from "react"
import Container from '../container/container'
import Row from '../row/row'
import Column from '../column/column'



const SavedResults = ({ savedBooks, handleDelete }) => {

  return (
    savedBooks.map(book =>

      (<Container className="container results-container" key={book.id}>
        <Row className="title-row">
          <Column className="col-md-6">
            <h3 className="title-text">{book.title}</h3>
            <h3 className="authors-text">{book.authors}</h3>
          </Column>
          <Column className="col-md-6 btn-container">
            <button onClick={() => { handleDelete(book._id) }} className="delete-btn">Delete</button>
            <button className="view-btn"> <a href={book.link} target="_blank">View</a>
            </button>
          </Column>
        </Row>
        <Row className="contents-row">
          <Column className="col-md-4">
            <img src={book.image} alt={book.title} />
          </Column>

          <Column className="col-md-8">
            <h3 className="description-text">
              {book.description}
            </h3>
          </Column>
        </Row>
      </Container>
      )

    )

  )

}



export default SavedResults