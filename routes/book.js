const bookController = require("../controller/bookController");
const authorsController = require("../controller/authorController");
const authorController = require("../controller/authorController");

const router = require("express").Router();

router.post('/', bookController.addBook);
router.get('/',bookController.listBook);
router.get('/:id',bookController.GetAnBook);
//Update Book
router.put("/:id",bookController.updateBook);
// delete book
router.delete("/:id",bookController.deleteBook)
module.exports = router;


