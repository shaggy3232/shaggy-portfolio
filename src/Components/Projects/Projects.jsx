import { Component } from 'react';
import "./Projects.css"
import nrml from "../../Assets/NRML.JPG"

import "../skills/skills.scss";

import {
  ReactJs,
  Redux,
  Reduxsaga,
  Sass,
  Javascript,
  Html5,
  CssThree,
  Nodedotjs,
  Express,
  Mysql,
  R,
  Mongodb,
} from "@icons-pack/react-simple-icons";

class Projects extends Component {
    render(){
        return(
            <div className='projects-cards-container'>
            <div class="projects-cards">
                <h1 className='blurb'>Some of my Projects</h1>
                <div class="container">
                    <div class="card">
                    <div class="box">
                    <div class="content">
                        <h1 className='blurb'>NRML Shopify Theme</h1>
                        <img src={nrml} style={{ height: "auto", width: "100%" }} alt="Your SVG" />
                        <h3 className='Stack'>Stack</h3>
                        <p className='longer-blurb'>Really put alot of my core HTML CSS and JavaScript experience on display for this project as I was the sole developer on the Shopify theme for a streetwear boutique at the top of the streetwear scene in Canada.</p>
                        <h3 className='Stack'>Goal</h3>
                        <p> Making all the pages on the website myself and creating intreging section with the goal of increaing conversion in mind. Which after a year we noticed a 60% increase in conversion with this theme.</p>
                        <a href="https://nrml.ca/" target="_blank" rel="noopener noreferrer">Check it out</a>
                        
                        
                        </div>
                    </div>
                    </div>

                    <div class="card">
                    <div class="box">
                        <div class="content">
                        
                        <h3>Plugged In</h3>
                        <p>Help businesses track key performance metrics using analytics tools such as Google Analytics, providing regular reporting on site traffic, conversion rates, and other important data points.</p>
                        <a href="https://youshouldgetpluggedin.io/" target="_blank" rel="noopener noreferrer">Check it out</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div> 

        )
    }
}
export default Projects