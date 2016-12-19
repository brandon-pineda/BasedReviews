import React, { Component } from 'react';
import {Match, Miss, Link } from 'react-router';
import Navbar from './Navbar';
import Review from './Review';
import ReviewList from './ReviewList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <Match pattern='/reviews' component={ReviewList} />
        <Match pattern='/blue-flame' component={Review} />
      </div>
    );
  }
}

export default App;
