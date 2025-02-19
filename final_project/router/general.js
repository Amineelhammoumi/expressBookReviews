const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {


  return res.status(200).send(books)
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {


  let book = [];
 

   book.push(books[req.params.isbn])
 
 

 return res.status(200).send(book)
  

 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {

 let book = [];

 for(let i = 1 ; i < Object.keys(books).length; i++ )
 {
  if(req.params.author == books[i].author)
   book.push(books[i])
 }
 

 return res.status(200).send(book)


});


// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  let book = [];

  for(let i = 1 ; i < Object.keys(books).length; i++ )
  {
   if(req.params.title == books[i].title)
    book.push(books[i])
  }
  
 
  return res.status(200).send(book)
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {

  let book = [];

  book.push(books[req.params.isbn].reviews)

  return res.status(200).send(book)

});

module.exports.general = public_users;
