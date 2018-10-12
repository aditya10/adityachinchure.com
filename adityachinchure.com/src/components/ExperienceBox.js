import React, { Component } from 'react';

class ExperienceBox extends Component {
  render() {
    return (
       	<div class="row experience-box">
			<div class="col-lg-2 col-md-2 col-sm-12 logo">
				<img src={this.props.imgsrc} />
			</div>
			<div class="col-lg-10 col-md-10 brief">
				<div class="job">
					{this.props.jobtitle}
				</div>
				<div class="job-info">
					{this.props.jobinfo}
				</div>
				<div class="job-description">
					{this.props.jobdescr}
				</div>
			</div>
		</div>
    )
  }
};

export default ExperienceBox;