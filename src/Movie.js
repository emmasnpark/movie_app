// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }
//
//   render() {
//     return (
//       <div>
//        <MoviePoster poster={this.props.poster}/>
//        <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

function Movie({Title, Year, Poster}) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
       <MoviePoster Poster={Poster} alt={Title}/>
      </div>

      <div className="Movie_Columns">
        <h3>{Title}</h3>
        <p className="Movie_Year">Released {Year}</p>
      </div>
    </div>
  )
}
Movie.propTypes ={
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
  Poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

function MoviePoster({Poster,alt}) {
  return (
    <img src={Poster} alt={alt} className="Movie_Poster"/>
  )
}

export default Movie
