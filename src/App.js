import React, { Component } from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {

  constructor() {
    super()
    this.state = {
      films: [],
      searchfield: ''
    }

  }

  componentDidMount(){
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(users => this.setState({ films: users.results }));
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render(){

    const { films, searchfield } = this.state;
    const filteredFilms = films.filter(episode => {
      return episode.title.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (this.state.films.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className = 'f1 white'>Star Wars API</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList films={ filteredFilms }/>
        </div>
      )
    }

  }

}

export default App;
