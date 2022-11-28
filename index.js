const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv').config();
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
//(process.env.MONGODB_URL)
mongoose.connect("mongodb+srv://bangdanh105:Bang1052001@cluster0.y0pizui.mongodb.net/?retryWrites=true&w=majority", () =>{
    console.log('done Connection database<<<<<<<<<<');
})
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors())
app.use(morgan("common"));
app.use("/v1/authors", authorRoute)
app.use("/v1/books", bookRoute)

app.listen(8000, () => {
    console.log("server is running........");
})