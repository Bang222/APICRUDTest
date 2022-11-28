const {Author, Book} = require('../model/model.js')
const authorController = {
    addAuthor: async (req, res) => {
       try {
           const newAuthor = new Author(req.body)
           const saveAuthor= await newAuthor.save();
           res.status(200).json(saveAuthor);
       }
        catch(err) {
           res.status(500).json(err)
        }
    },
    getAllAuthor:async (req, res) => {
        try{
            // lấy ra tất cả thông tin trong database
            const authors = await Author.find();
            res.status(200).json(authors);
        }
        catch (err){
        res.status(500).json(err)
        }
    }
   // GetAll Author Asny Req,Res
};
module.exports= authorController;