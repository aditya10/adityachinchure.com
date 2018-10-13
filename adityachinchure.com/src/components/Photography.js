import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery.js';

class Photography extends Component {
  render() {
    return (
			<div className="col-lg-8 col-md-8 photography">
				<div class="classTitle">
              		PHOTOGRAPHY
            	</div>
				<div className="text">
					<p>I do photography because it encourages my creativity. Since it is a hobby, I do not sell my pictures; instead, you can find all my shots on Unsplash, available to download and use for free.</p>
				</div>
				<PhotoGallery />
			</div> 
    )
  }
};

export default Photography;