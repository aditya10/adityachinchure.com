import React, { Component } from 'react';
import './Homepage.css';
import Photography from '../Photography/Photography.js';
import Blog from '../Blog/Blog.js';
import Footer from '../Footer/Footer.js';
import PhotoHeader from '../PhotoHeader/PhotoHeader.js';
import Header from '../Header/Header';
import {getUnsplashPhotos} from "../../utilities/UnsplashConfig.js";
import Nametag from '../Nametag/Nametag.js';
import Technology from "../Technology/Technology";

class Homepage extends Component {
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
        console.log(json);
      json.forEach(photo => {links.push(photo.links.download);});
      var rand = Math.floor(Math.random() * 15);
      this.setState({source: links[rand]});
    });

  }

  render() {
    return (
        <div className="App">
          <Header source={this.state.source}/>
          <Technology/>
          <Photography/>
          <Blog />
          <Footer />
        </div>
    );
  }
}

export default Homepage;
