const {Book,Author} = require("../model/model")

const bookController= {
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body)
            const saveBook = await newBook.save();
            if(req.body.author){
                const author = Author.findById(req.body.author); // find by id
                // update one update a author
                // use push because  author is array
                await author.updateOne({$push:{book: saveBook._id}})
            }
            res.status(200).json(saveBook)
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
    },
    listBook :async (req, res) => {
        try {
            const showbook =  await Book.find();
            return res.status(200).json(showbook)
        }
        catch (err){
            return res.status(500).json({message: err.message})
        }

    },
    GetAnBook :async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author")
            return res.status(200).json(book)
        }catch(err){
            return res.status(500).json(err)
        }
    },
    updateBook :async (req, res) => {
        try{
            const updateBook = await Book.findById(req.params.id)
            await updateBook.updateOne({$set: req.body})
            res.status(200).json("update Success!!!")
        }catch(err){
            return res.status(500).json(err)
        }
    },
    deleteBook :async (req, res) => {
        try{
            await Author.updateMany(
                {book : req.params.id},
                {$pull: { book : req.params.id}},
            );
            await Book.findByIdAndDelete(req.params.id)
            return res.status(200).json("Delete Success!!!")
        }catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports = bookController;