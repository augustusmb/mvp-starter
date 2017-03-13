import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
import GenreButtonsTable from './components/GenreButtonsTable.jsx';
import MovieSubmitForm from './components/MovieSubmitForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayMovies: []
    }
  }

  onGenreButtonClick (genre) {
    var filteredMovies = this.state.allMovies.filter(function(item) {return item.genre === genre});
    console.log(filteredMovies);
    console.log(genre);
    this.setState({
      displayMovies: filteredMovies,
    });
  }

  onMovieSubmit (title) {
    var context = this;
    console.log('You Submitted!');
    $.ajax({
      url: '/movies',
      method: 'POST',
      headers: {
      'content-type': 'application/json'
      // 'Access-Control-Allow-Headers': 'Content-Type',
      // 'Access-Control-Allow-Origin': '*'
      },
      data: {
        title: title
      },
      success: (data) => {
        console.log('Successful Post Req', data);
      },
      error: (err) => {
        console.log('ERROR: ', err);
      }
    });
  }

  componentDidMount() {
    var context = this;
    $.ajax({
      url: '/movies',
      method: 'GET',
      headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
      },
      success: (data) => {
        console.log('SUCCESS: ', data);
        context.setState({
          allMovies: data,
          displayMovies: data
        })
      },
      error: (err) => {
        console.log('ERR: ', err);
      }
    });
  }

  render () {
    return (<div>
      <MovieSubmitForm onMovieSubmit={this.onMovieSubmit.bind(this)}/>
      <h1 className="question">What are you in the mood for?</h1>
      <GenreButtonsTable onGenreButtonClick={this.onGenreButtonClick.bind(this)}/>
      <h1 id="suggested">Your Movies</h1>
      <MovieList movies={this.state.displayMovies}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



// {
//   title: 'Wedding Crashers',
//   imageUrl: 'https://tinyurl.com/gnvx5s8',
//   year: 2005,
//   genre: 'comedy',
//   rating: 'R'
// }, {
//   title: 'Shaun of the Dead',
//   imageUrl: 'https://tinyurl.com/hkxzqyt',
//   year: 2004,
//   genre: 'comedy',
//   rating: 'R'
// }, {
//   title: 'Anchorman: The Legend Of Ron Burgundy',
//   imageUrl: 'https://tinyurl.com/hhgdenb',
//   year: 2004,
//   genre: 'comedy',
//   rating: 'PG-13'
// }, {
//   title: 'Mean Girls',
//   imageUrl: 'https://tinyurl.com/zxso9xx',
//   year: 2004,
//   genre: 'comedy',
//   rating: 'PG-13'
// }, {
//   title: 'Wedding Crashers',
//   imageUrl: 'https://tinyurl.com/grsfggp',
//   year: 2008,
//   genre: 'comedy',
//   rating: 'R'
// }