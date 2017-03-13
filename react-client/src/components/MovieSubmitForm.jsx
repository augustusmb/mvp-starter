import React from 'react';
import $ from 'jquery';


const MovieSubmitForm = (props) => (
  <table>
    <tbody>
        <tr><th>Add a movie:</th></tr>

        <tr><td>Title: </td><td><input type="textbox" id="addedmovie"></input></td></tr>

        <tr><td><button id="add-movie" onClick={() => {props.onMovieSubmit($('#addedmovie').val())}}>Add Movie</button></td></tr>
    </tbody>
  </table>
)


export default MovieSubmitForm;