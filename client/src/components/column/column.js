import React from "react"

const Column = ({className, ...props}) =>(
    <div className={`col ${className}`} {...props}/>
)

export default Column 