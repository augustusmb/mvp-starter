import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
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
          movies: data
        })
      },
      error: (err) => {
        console.log('ERR: ', err);
      }
    });
  }

  render () {
    return (<div>
      <h1 className="question">What are you in the mood for?</h1>
      <button type="button">Comedy</button>
      <button type="button">Action</button>
      <button type="button">Sci-Fi</button>
      <button type="button">Drama</button>
      <button type="button">Fantasy</button>

      <h1 id="suggested">Your Movies</h1>
      <MovieList movies={this.state.movies}/>
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