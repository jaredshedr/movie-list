import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import Unwatched from './Unwatched.jsx';
import Watched from './Watched.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      watched: [],
      searched: [],
      search: '',
      addMovie: '',
      renderWatch: false,
      renderUnwatch: true,
      currentMovie:[]
    };

    this.searchExisting = this.searchExisting.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.isWatched = this.isWatched.bind(this);
    this.unwatched = this.unwatched.bind(this);
    this.watched = this.watched.bind(this);
  }

  query (movieName) {
    // fetch(`https://api.themoviedb.org/3/search/movie?api_key=6abd4ea30614383e5ea98f7e0f4db692&query=${movieName}`)
    //   .then(response => response.json())
    //   .then(data => this.setState({currentMovie: data.results}))
  }

  async addMovie (event) {

    var savedState = this.state.movies;

    // this.query(this.state.addMovie);
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6abd4ea30614383e5ea98f7e0f4db692&query=${this.state.addMovie}`)
    const json = await response.json()
    this.setState({currentMovie: json.results})

    var newMovie = {title: this.state.currentMovie[0].title, watched:false, titleClick:false, movieInfo:{year: this.state.currentMovie[0].release_date, description:this.state.currentMovie[0].overview}};

    savedState.push(newMovie);

    this.setState({
      movies: savedState
    })

  }

  handleAddMovie (event) {
    // console.log(event.target.value)
    // this.setState({
    //   addMovie: event.target.value
    // })
  }

  searchExisting (event) {

    let currentMovies = this.state.movies;
    let currentSearch = this.state.search;
    var matchingContainer = [];

    currentMovies.forEach(function (item) {
      if (item.title.toLowerCase().match([currentSearch.toLowerCase()])) {
        matchingContainer.push(item);
      }
    })

    if (matchingContainer.length === 0 || this.state.search === '') {
      if (this.state.searched.length === 0) {
        this.setState({
          movies: this.state.movies
        })
      } else {
        this.setState({
          movies: this.state.searched
        })
      }
      window.alert('No Results Found')
    } else {
      this.setState({
        movies: matchingContainer,
        searched: currentMovies
      })
    }
  }

  handleChange (event) {
    // console.log(event.target.value)
    this.setState({
      search: event.target.value,
      addMovie: event.target.value
    })
  }

  isWatched (event, movie) {

    let unwatchedMovies = [...this.state.movies];
    var watchedMovies = [];

    for (var i = 0; i < unwatchedMovies.length; i++) {
      var item = unwatchedMovies[i];
      if (item.title === movie.title) {
        item.watched = true;
        watchedMovies.push(item);
        unwatchedMovies.splice(i, 1);
      }
    }

    this.setState({
      movies: unwatchedMovies,
      watched: this.state.watched.concat(watchedMovies)
    })

  }

  unwatched (event) {
    // click event that when triggered sets a variable to true on state and false for watched
    // when rendering movies in movie list entry we will check which variable is true and render those
    this.setState({
      renderUnwatch: true,
      renderWatch: false
    })
  }

  watched (event) {
    // click event that when triggered sets a variable to true on state and false for watched
    // when rendering movies in movie list entry we will check which variable is true and render those
    this.setState({
      renderUnwatch: false,
      renderWatch: true
    })
  }

  titleClick (event, movie) {

    let unwatchedMovies = this.state.movies;

    for (var i = 0; i < unwatchedMovies.length; i++) {
      var item = unwatchedMovies[i];
      if (item.title === movie.title) {
        if (!movie.titleClick) {
          item.titleClick = true;
        } else {
          item.titleClick = false;
        }
      }
    }

    this.setState({
      movies:unwatchedMovies
    })
  }

  render () {

    return (
    <div>
      <h1 className='title'>Movie List</h1>
      <div>
        <AddMovie handleAddMovie={this.handleAddMovie} addMovie={this.addMovie}/>
      </div>
      <div>
        <SearchBar handleChange={this.handleChange} search={this.searchExisting}/>
      </div>
      <div className='flexer'>
        <Watched watched={this.watched}/>
        <Unwatched unwatched={this.unwatched}/>
      </div>
      <MovieList movies = {this.state.renderUnwatch ? this.state.movies : this.state.watched} isWatched={this.isWatched} titleClick = {this.titleClick.bind(this)}/>
    </div>
    )
  }
}

export default App;