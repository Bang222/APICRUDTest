const bookController = require("../controller/bookController");

const router = require("express").Router();

router.post('/', bookController.addBook);

module.exports = router;


