import React, { Component } from 'react';
import {Match } from 'react-router';
import Home from './Home';
import Navbar from './Navbar';
import ReviewList from './ReviewList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <Match exactly pattern='/' component={Home} />
        <Match pattern='/reviews' component={ReviewList} />
      </div>
    );
  }
}

export default App;
