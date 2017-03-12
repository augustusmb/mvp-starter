import React from 'react';

const MovieSubmitForm = (props) => (
  <table>
    <tbody>
    <th>Add a movie to our database</th>
    <tr>Image: <input id="image"></input></tr>
    <tr>Title: <input id="title"></input></tr>
    <tr>Year: <input id="year"></input></tr>
    <tr>Genre: <input id="genre"></input></tr>
    <tr>Rating: <input id="rating"></input></tr>
    <button id="add-movie">Add Movie</button>
    </tbody>
  </table>

)

//
//

export default MovieSubmitForm;