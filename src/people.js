import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      people: [],
    }

  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(users => this.setState({ people: users.results }));
  }
