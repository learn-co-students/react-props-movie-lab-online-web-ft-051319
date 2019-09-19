import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // return movieData.map(movie => <MovieCard title={movie.title} IMDBrating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
