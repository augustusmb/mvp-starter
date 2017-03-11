import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [1,2,3,4,5]
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          movies: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Suggested Movie List</h1>
      <MovieList movies={this.state.movies}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));