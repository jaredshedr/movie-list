// in this file we should handle get and post methods from our client side
// get will return all of the data
// post will add a movie to the data list

// app.get()

// app.post()

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const fs = require('fs');


var port = 8080;
var ip = '127.0.0.1';

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // what does this do? // from fitz to ask
app.use(morgan('dev'));

// axios request in app would be /movies

const fileName = './database/text.txt'

app.get('/', (req, res) => {
  let movies = []
  var data = fs.readFileSync(fileName, 'utf8');
  if (data) {
    movies = (JSON.parse(data));
  }
  res.status(200).send(movies);
});

app.post('/', (req, res) => {

  let movies = []
  var data = fs.readFileSync(fileName, 'utf8');
  if (data) {
    movies = (JSON.parse(data));
  }

  async function getNewMovie () {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6abd4ea30614383e5ea98f7e0f4db692&query=${newMovie}`)
    const json = await response.json()
    movies.push(json)
  }

  rewriteFile(movies)
});

let rewriteFile = function (movies) {
  fs.writeFile(fileName, JSON.stringify(movies), err2 => {
    if (err2) {
      console.log(err2);
      return;
    }
  });
};



// app.options('');
// app.get("*");

app.listen(port, ip, () => {
  console.log('Listening on http://' + ip + ':' + port);
});
