const authorController = require('../controller/authorController')

//ADD Author
const router= require("express").Router();

router.post('/',authorController.addAuthor);

router.get('/',authorController.getAllAuthor);
module.exports= router