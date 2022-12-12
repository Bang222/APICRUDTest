const authorController = require('../controller/authorController')

//ADD Author
const router= require("express").Router();

router.post('/',authorController.addAuthor);

router.get('/',authorController.getAllAuthor);
router.get('/:id',authorController.getAuthor);
router.put('/:id',authorController.updateAuthor);
router.delete('/:id',authorController.deleteAuthor);
module.exports= router