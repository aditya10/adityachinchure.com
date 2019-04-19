import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
       	<div class="links-wrapper">
          <div class="links">
            <a href="https://github.com/aditya10">
              <div class="link" id="github">
                <div class="brand-img">
                  <img src="assets/github.svg" />
                </div>
                <div class="text">
                  All my technical projects can be found on GitHub!
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/adityachinchure/">
              <div class="link" id="linkedin">
                <div class="brand-img">
                  <img src="assets/linkedin.svg" />
                </div>
                <div class="text">
                  Read my about my projects and experience on LinkedIn.
                </div>
              </div>
            </a>
            <a href="https://medium.com/technonerds">
              <div class="link" id="technonerds">
                <div class="brand-img">
                  <img src="assets/technonerds.svg" />
                </div>
                <div class="text">
                  Technonerds - my technology blog. Read about tech trends, products and tech culture.
                </div>
              </div>
            </a>
            <a href="https://unsplash.com/@adityachinchure">
              <div class="link" id="unsplash">
                <div class="brand-img">
                  <img src="assets/unsplash.svg" />
                </div>
                <div class="text">
                  My best photos are available on Unsplash. My photos have recieved over 18 million views!
                </div>
              </div>
            </a>
            <a href="https://medium.com/@adityachinchure">
              <div class="link" id="medium">
                <div class="brand-img">
                  <img src="assets/medium.svg" />
                </div>
                <div class="text">
                  My personal blog about my experiences.
                </div>
              </div>
            </a>
          </div>
        </div>
    )
  }
};

export default Header;