import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <table>
      <tr>
        {props.movies.map(movie => <MovieListItem movie={movie}/>)}
      </tr>
  </table>
)

export default MovieList;