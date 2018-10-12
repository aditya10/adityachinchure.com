import React, { Component } from 'react';
import ExperienceBox from './ExperienceBox.js';


class Experience extends Component {
  render() {
	  var imgsrcArr=["assets/appneta.svg",
					 "assets/ubc.svg", 
					 "assets/castle.svg"
					];
	  
	  var jobtitleArr=[
		  "Junior Software Developer (Co-op), AppNeta", 
		  "Teaching Assistant (CPSC 304 - Relational Databases), University of British Columbia", 
		  "Web Developer, Castle"
	  ];
	  
	  var jobinfoArr=[
		  "Vancouver, Canada | September 2018 onwards",
		  "Vancouver, Canada | May - June 2018", 
		  "Vancouver, Canada | January - June 2018"
	  ];
	  
	  var jobdescrArr=[
		  "Writing JS and Java code to assist with scaling up AppNeta’s SAAS software. Learning about back-end architecture and Elastic Search.", 
		  "Managed tutorial classes and assisted the professor during lectures and on our online discussion forum. Supervised five teams on their group projects - answered questions and provided guidance frequently.", 
		  "Worked with Castle, a UBC based web-development startup, to develop websites for our clients. Largerly used HTML, CSS, JS and PHP"
	  ];
      var elements=[];
      for(var i=0;i<jobtitleArr.length;i++){
		  // push the component to elements!
		  elements.push(<ExperienceBox 
						imgsrc={imgsrcArr[i]} 
						jobtitle={jobtitleArr[i]} 
						jobinfo={jobinfoArr[i]} 
						jobdescr={jobdescrArr[i]} />);
      }
	  
    return (
		<div class="col-lg-10 col-md-10 col-sm-12 experience">
            <div class="classTitle">
              EXPERIENCE
            </div>
			<div class="container-fluid list">
				{elements}
			</div>
        </div>
    )
  }
};

export default Experience;