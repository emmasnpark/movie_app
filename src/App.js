import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

   _getMovies = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('http://www.omdbapi.com/?apikey=2f6435d9&s=with&y>2000')
    .then(response => response.json())
    .then(json => json.Search)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
        return <Movie Title={movie.Title} Poster={movie.Poster} Year={movie.Year} key={movie.imdbID}/>
      })
      return movies
  }


  render() {
    const { movies } = this.state
    return (
      <div className={movies ? "App" : "App--loading"} >
        {movies ? this._renderMovies() : " Loading" }
      </div>
    );
  }
}

export default App;
