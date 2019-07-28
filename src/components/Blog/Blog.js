import React, { Component } from 'react';
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
       	<div className="col-lg-8 col-md-8 blog">
					<h2>Blog</h2>
					<p>I started Technonerds in 2015 as a platform to share my stories with technology. Now, I write blogs about tech, life and much more.</p>
					<div id="fm-medium-embed"></div>
					<div className="spacer col-lg-12 col-md-1" />
			</div> 
    )
  }
};

export default Blog;