import React, { Component } from 'react';

class PhotoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.source !== prevProps.source) {
      console.log(this.props.source);
      this.setState({source: this.props.source})
    }
  }
  render() {
    return (
      <div className="col-log-12 photo-header">
        <div className="photo">
          <img src={this.state.source} />
        </div>
        <div className="col-lg-12 details-row">
          <div className="profile">
            <img src="assets/aditya.png?id=0" />
            <div className="name">Aditya Chinchure</div>
            <div className=" social-icons">
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
            </div>
          </div>

        </div>
      </div>
    )
  }
};

export default PhotoHeader;