import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(data => {
      return <MovieCard
        key={movieData.indexOf(data) + 1}
        title={data.title}
        IMDBRating={data.IMDBRating}
        genres={data.genres}
        poster={data.poster} />
    })
  }

  render() {
    // console.log(this.generateMovieCards())
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}

      </div>
    )
  }
}
