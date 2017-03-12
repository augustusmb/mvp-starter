import React from 'react';

const MovieListItem = (props) => (
  <div>
    <tr>
      <td className="movie-poster"> <img src={props.movie.image} height="120" width="80"/></td>
      <td className="movie-title">{props.movie.title}</td>
      <td className="movie-year">{props.movie.year}</td>
      <td className="movie-genre">{props.movie.genre}</td>
      <td className="movie-rating">{props.movie.rating}</td>

    </tr>
  </div>
)

export default MovieListItem;