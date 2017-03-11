import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <div>
    <h4> Movie List  </h4>
    There are { props.movies.length } items.
    { props.movies.map(movie => <MovieListItem movie={movie}/>)}
  </div>
)

export default MovieList;