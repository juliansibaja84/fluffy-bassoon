const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongojs = require('mongojs');
const { check, validationResult } = require('express-validator/check');

const app = express();
const db = mongojs('booksapp', ['books']);

// Custom middleware
// const logger = (req, res, next) => {
//   console.log('logging...');
//   next();
// };
// app.use(logger);

const GREETS = 'hello';
let books = [
  {
    name: 'The kybalion',
    isbn: '0000000001',
  },
  {
    name: '100 years of solitude',
    isbn: '0000000002',
  },
  {
    name: 'Liber null',
    isbn: '0000000003',
  },
];

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Global vars
app.use((req,res,next) => {
  res.locals.ERRORS = null;
  next();
});


app.get('/', (req, res) => {
  // send for text and json for objects
  db.books.find(function (err, docs) {
    // docs is an array of all the documents in mycollection
    res.render('index',{
      title : 'customers',
      books: docs
    });
  });
  
  
});



app.post('/books/add',[check('isbn').isLength({min:3})],(req,res) => {
  const ERRORS = validationResult(req);
  if (!ERRORS.isEmpty()) {
    db.books.find(function (err, docs) {
      // docs is an array of all the documents in mycollection
      res.render('index',{
        title : 'customers',
        books: docs,
        ERRORS
      });
    });
  } else {
    const NEW_BOOK = {
      isbn: req.body.isbn,
      name: req.body.name
    };
    console.log(NEW_BOOK);
    db.books.insert(NEW_BOOK, (err,result) => {
      if (err) console.log(err);
      res.redirect('/');
    });

  }
});

app.delete('/books/delete/:id',(req,res) => {
  db.books.remove({_id: mongojs.ObjectId(req.params.id)}, (err) => {
    if(err){
      console.log(err);
    }
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server Started on port 3000...');
})
