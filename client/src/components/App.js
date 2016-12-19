import React, { Component } from 'react';
import Review from './Review';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="intro-container">
            <h1>BasedReviews</h1>
        </section>
        <Review />
      </div>
    );
  }
}

export default App;
