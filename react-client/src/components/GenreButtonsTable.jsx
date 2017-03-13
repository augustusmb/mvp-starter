import React from 'react';


const GenreButtonsTable = (props) => (

  <table>
    <tbody>
      <tr>
        <td className="viewall-button" onClick={() => {props.returnAllMovies()}}><button type="button">View All</button></td>
        <td className="comedy-button" onClick={() => {props.onGenreButtonClick('Comedy')}}><button type="button">Comedy</button></td>
        <td className="action-button" onClick={() => {props.onGenreButtonClick('Action')}}><button type="button">Action</button></td>
        <td className="sci-fi-button" onClick={() => {props.onGenreButtonClick('Sci-Fi')}}><button type="button">Sci-Fi</button></td>
        <td className="drama-button" onClick={() => {props.onGenreButtonClick('Drama')}}><button type="button">Drama</button></td>
        <td className="fantasy-button" onClick={() => {props.onGenreButtonClick('Fantasy')}}><button type="button">Fantasy</button></td>
        <td className="classics-button" onClick={() => {props.onGenreButtonClick('Classics')}}><button type="button">Classics</button></td>

      </tr>
    </tbody>
  </table>

)

export default GenreButtonsTable;