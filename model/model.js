const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    year: {
        type:Number,
        required:true
    },
    book: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }],
})
const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publishedDate: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
    },
    //_id
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
})

let Book = mongoose.model("Book", BookSchema)
let Author = mongoose.model("Author", AuthorSchema)
module.exports = {
    Book,
    Author
}