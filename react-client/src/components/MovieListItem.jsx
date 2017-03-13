import React from 'react';

const MovieListItem = (props) => (
  <tr>
    <td className="movie-poster"> <img src={props.movie.image} height="120" width="80"/></td>
    <td>
      <div className="movie-title">{props.movie.title}</div>
      <div className="movie-year">{props.movie.year}</div>
      <div className="movie-genre">{props.movie.genre}</div>
      <div className="movie-rating">{props.movie.rating}</div>
    </td>

  </tr>
)

export default MovieListItem;