const {Author, Book} = require('../model/model.js')
const authorController = {
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body)
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getAllAuthor: async (req, res) => {
        try {
            // lấy ra tất cả thông tin trong database
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // GetAll Author Asny Req,Res
    getAuthor: async (req, res) => {
        try {
            //params.id là dấu /:id bên route
            const author = await Author.findById(req.params.id).populate("book");
            return res.status(200).json(author)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateAuthor: async (req, res) => {
        try {
            const updateAuthor = await Author.findById(req.params.id)
            await updateAuthor.updateOne({$set: req.body})
            res.status(200).json("updateAuthor by id Success!!!")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteAuthor: async (req, res) => {
        try {
            await Book.updateMany(
                {author: req.params.id},
                // chỉ sử dụng được push khi dữ liệu là array
                {author: null}
            )
            await Author.findByIdAndDelete(req.params.id)
            return res.status(200).json("Delete Success")
        } catch (err) {
            res.status(500).json(err)
        }
    }
};
module.exports = authorController;