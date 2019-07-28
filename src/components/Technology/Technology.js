import React, { Component } from 'react';
import './Technology.css';

class Technology extends Component {
  render() {
    return (
      <div class="technology">
        <div className="image">
          <img src='../assets/technology.png'></img>
        </div>
        <div className="text">
          <div className="textContainer">
            <h2>Technology</h2>
            <p>I started writing code when I was 15 and I never stopped. As a Computer Science student at UBC, I have worked on several academic and personal projects.<br/><br/>
              I have internship experience as a full-stack developer, software engineer and machine learning engineer.</p><br/>
            <a href="assets/Resume.pdf">Download my Resume</a><br/>
            <a href="https://github.com/aditya10">Find my code on GitHub</a><br/>
            <a href="https://www.linkedin.com/in/adityachinchure/">Connect with me on LinkedIn</a><br/>
          </div>
        </div>
      </div>
    )
  }
};

export default Technology;