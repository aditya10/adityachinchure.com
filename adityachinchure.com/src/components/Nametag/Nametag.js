import React, { Component } from 'react';
import './Nametag.css';
import SocialLinks from "../SocialLinks/SocialLinks";

class Nametag extends Component {
  render() {
    return (
      <div class="col-md-12">
        <h1>Hello, I’m Aditya</h1>
        <h3>Code writer | Photo maker | Technology nerd</h3>
        <div className="social-links"><SocialLinks/></div>
      </div>
    )
  }
};

export default Nametag;