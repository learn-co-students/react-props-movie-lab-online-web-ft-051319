import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return (movieData.map((mCard) => <MovieCard title={mCard.title} IMDBRating={mCard.IMDBRating} genres={mCard.genres}  poster={mCard.poster} />));
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
