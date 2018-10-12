import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
       	<div className="row header">
			<div className="col-lg-2 col-md-2 spacer"></div>
          <div className="col-lg-4 col-md-4 photo">
            <img src="assets/aditya.png?id=2" />
          </div>
          <div className="col-lg-4 col-md-4 brief">
            <div className="name">
              Aditya Chinchure
            </div>
            <div className="points">
              📍  Vancouver, BC <br />
              🎓  Computer Science @ UBC <br />
              📷  Amature Photographer <br />
              ✍️  Blogger, Technonerds
            </div>
          </div>
			<div className="col-lg-2 col-md-2 spacer"></div>
        </div>
    )
  }
};

export default Header;