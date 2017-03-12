import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <table>
    <tbody>
      <tr>
        {props.movies.map(movie => <MovieListItem movie={movie}/>)}
      </tr>
    </tbody>
  </table>
)

export default MovieList;