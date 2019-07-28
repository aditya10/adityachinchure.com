import React, { Component } from 'react';
import './Photography.css';

class Photography extends Component {
  render() {
    return (
      <div class="photography-row">
        <div className="image">
          <img src='../assets/PhotoCollage.png'></img>
        </div>
        <div className="text">
          <div className="textContainer">
            <h2>Photography</h2>
            <p>I enjoy photography because it relieves me of stress, pushes me to go out and explore, and gets my creative juices flowing.</p><br/>
            <a href="https://unsplash.com/@adityachinchure">Download my photos on Unsplash</a><br/>
            <a href="https://www.instagram.com/aditya.chinchure/">Follow me on Instagram</a><br/>
          </div>
        </div>
      </div>
    )
  }
};

export default Photography;