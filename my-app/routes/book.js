const express = require ("express");
const bookRouter = express.Router();
const { ObjectId } = require('mongodb');
const connect = require('./../database/db')
const BookController = require("../controllers/BookController"); 
const auth = require("../middleware/auth")


bookRouter
.use(auth)
.route("/")
.get(BookController.index)
.post(BookController.store);

bookRouter
.route("/:id")
.get(BookController.show)
.patch(BookController.update)
.delete();




module.exports = bookRouter;
 