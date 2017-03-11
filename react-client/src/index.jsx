import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
// import exampleVideoData from './data/exampleVideoData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{
  title: 'Wedding Crashers',
  imageUrl: 'https://tinyurl.com/gnvx5s8',
  year: 2005,
  rating: 'R'
}, {
  title: 'Shaun of the Dead',
  imageUrl: 'hhttps://tinyurl.com/hkxzqyt',
  year: 2004,
  rating: 'R'
}, {
  title: 'Anchorman: The Legend Of Ron Burgundy',
  imageUrl: 'https://tinyurl.com/gnvx5s8',
  year: 2004,
  rating: 'PG-13'
}, {
  title: 'Mean Girls',
  imageUrl: 'https://tinyurl.com/zxso9xx',
  year: 2004,
  rating: 'PG-13'
}, {
  title: 'Wedding Crashers',
  imageUrl: 'https://tinyurl.com/grsfggp',
  year: 2008,
  rating: 'R'
}
]
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         movies: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>Suggested Movie List</h1>
      <MovieList movies={this.state.movies}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));