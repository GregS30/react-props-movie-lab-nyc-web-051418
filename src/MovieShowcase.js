import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import uuid from 'uuid'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie) =>
      <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genre={movie.genres}  poster={movie.poster} key={uuid()} />
    );
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
