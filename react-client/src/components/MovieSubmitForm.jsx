import React from 'react';
import $ from 'jquery';


const MovieSubmitForm = (props) => (
  <table>
    <tbody>
        <tr><th>Add a movie:</th></tr>

        <tr><td>Title: </td><td><input type="text" id="title"></input></td></tr>

        <button id="add-movie" onClick={() => {props.onMovieSubmit(document.getElementById('title'))}}>Add Movie</button>
    </tbody>
  </table>
)


export default MovieSubmitForm;