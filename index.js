const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yfcjm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const booksCollection = client.db("DB_NAME").collection("books");

  app.get('/books', (req, res) => {
    booksCollection.find()
    .toArray((err, items) => {
        res.send(items)
      })
  })

  app.post('/addBook', (req, res) => {
    const newBook = req.body;
    console.log('adding new book: ', newBook)
    booksCollection.insertOne(newBook)
    .then(result => {
        console.log('inserted count', result.insertedCount);
        res.send(result.insertedCount > 0)
    })
  })

  app.delete('deleteBook/:id', (req, res) => {
    const id = ObjectID(req.params.id);
    console.log('delete this', id);
    booksCollection.findOneAndDelete({_id: id})
    .then(documents => res.send(!!documents.value))
  })


  console.log("Database connected");
});




app.get("/", (req,res) => {
    res.send("Hello from the server side port 5000");
});

app.get("/hello", (req,res) => {
  res.send("Hello there");
});


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server has started");
})