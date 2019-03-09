import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Links from './components/Links.js';
import Letter from './components/Letter.js';
import Experience from './components/Experience.js';
import Photography from './components/Photography.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';
import PhotoHeader from './components/PhotoHeader.js';
import {getUnsplashPhotos} from "./components/UnsplashConfig.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: ""
    }
  }

  componentDidMount() {
    this.generateRandomImage()
  }

  generateRandomImage() {
    var links = [];
    getUnsplashPhotos.then(json => {
      json.forEach(photo => {links.push(photo.links.download);});
      var rand = Math.floor(Math.random() * 30);
      this.setState({source: links[rand]});
    });

  }

  render() {
    return (
      <div className="App">
        <PhotoHeader source={this.state.source}/>
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
