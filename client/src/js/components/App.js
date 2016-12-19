import React, { Component } from 'react';
import {Match, Miss, Link } from 'react-router';
import Review from './Review';
import ReviewList from './ReviewList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="intro-container">
            <h1>
                <Link to='/'
                style={{ color: 'white', textDecoration: 'none'}}>
                    BasedReviews
                </Link>
            </h1>
        </section>
        <ul>
            <li><Link to='/reviews'>All Reviews</Link></li>
        </ul>

        <Match pattern='/reviews' component={ReviewList} />
        <Match pattern='/blue-flame' component={Review} />
      </div>
    );
  }
}

export default App;
