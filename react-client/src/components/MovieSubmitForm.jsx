import React from 'react';
import $ from 'jquery';


const MovieSubmitForm = (props) => (
  <table>
    <tr><th>Add a movie:</th></tr>

    <tr><td>Title: </td><td><input type="text" id="title"></input></td></tr>

    <button id="add-movie" onClick={() => {props.onMovieSubmit(document.getElementById('title'))}}>Add Movie</button>
  </table>
)


export default MovieSubmitForm;