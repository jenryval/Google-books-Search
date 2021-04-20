  import React from "react"
import Column from "../column/column"


const Header = props =>(
    <>
         <Column className="col-md-12 header"{...props}>
            <h1 className="title">Google Books Search </h1>
              <p className="title">Search for and Save Books of Interest </p>  
             </Column>
    </>
)

export default Header