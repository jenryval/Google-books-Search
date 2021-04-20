const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: "Please enter a title",
    },

    authors: [
        String
    ],

    description: {
        type:String,

    },

    image: {
        type: String,
    },

    link: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now()
    },

})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book