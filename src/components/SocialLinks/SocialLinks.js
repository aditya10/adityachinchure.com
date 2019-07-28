import React, { Component } from 'react';
import './SocialLinks.css';

class SocialLinks extends Component {
  render() {
    return (
        <div className="links">
          <a href="https://github.com/aditya10">
            <img src="assets/links/github.png"/>
          </a>
          <a href="https://www.linkedin.com/in/adityachinchure/">
            <img src="assets/links/linkedin.png"/>
          </a>
          <a href="https://medium.com/technonerds">
            <img src="assets/links/technonerds.png"/>
          </a>
          <a href="https://unsplash.com/@adityachinchure">
            <img src="assets/links/unsplash.png"/>
          </a>
          <a href="https://medium.com/@adityachinchure">
            <img src="assets/links/medium.png"/>
          </a>
          <a href="assets/Resume.pdf">
            <img src="assets/links/resume.png"/>
          </a>
        </div>
    )
  }
};

export default SocialLinks;