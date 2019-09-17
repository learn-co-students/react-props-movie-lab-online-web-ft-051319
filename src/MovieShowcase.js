import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((obj,index)=> <MovieCard key={index} title={obj.title} IMDBRating={obj.IMDBRating} genres={obj.genres} poster={obj.poster} />
    )
  }
  // generateMovieCards = () => {
	// 	return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
	// };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
