import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <table>
    <tbody>
      { props.movies.map(movie => <MovieListItem movie={movie}/>)}
    </tbody>
  </table>
)

export default MovieList;