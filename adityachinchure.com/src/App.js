import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Links from './components/Links.js';
import Letter from './components/Letter.js';
import Experience from './components/Experience.js';
import Photography from './components/Photography.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta charset="UTF-8" />
        <Header />
        <Links />
        <Letter />
		<Blog />
		<Experience />
		<Photography />
		<Footer />
      </div>
    );
  }
}

export default App;
