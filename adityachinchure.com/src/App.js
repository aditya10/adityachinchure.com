import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Links from './components/Links.js';
import Letter from './components/Letter.js';
import Experience from './components/Experience.js';
import Photography from './components/Photography.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta charset="UTF-8" />
        <Header />
        <Links />
        <Letter />
		<Experience />
		<Photography />

    		<div class="footer">
    			<p>Designed and coded by Aditya Chinchure. Copyright 2018.</p>
    		</div>

      </div>
    );
  }
}

export default App;
