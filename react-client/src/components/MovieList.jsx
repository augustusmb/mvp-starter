import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <div>
    <h4> Movie List  </h4>
    There are { props.movies.length } movies.
    <ul>
      { props.movies.map(movie => <MovieListItem movie={movie}/>)}
    </ul>
  </div>
)

export default MovieList;