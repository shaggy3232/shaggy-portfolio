import { Component } from 'react';
import "./Projects.css"
import nrml from "../../Assets/NRML.JPG"
import pluggedin from "../../Assets/PluggedIn.png"
import {
  SiReact,
  SiSass,
  SiJavascript,
  SiHtml5,
  SiCss3,
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
                                    <div className='stacks'>
                                        <div className="skill-group">
                                            <div className="skill">
                                            <SiHtml5 color="#E34F26" size={50} />
                                            </div>
                                            <p className="skill-info">HTML</p>
                                        </div>
                                        <div className="skill-group">
                                            <div className="skill">
                                            <SiCss3 color="#1572B6" size={50} />
                                            </div>
                                            <p className="skill-info">CSS</p>
                                        </div>
                                        <div className="skill-group">
                                            <div className="skill">
                                            <SiJavascript color="#F7DF1E" size={50} />
                                            </div>
                                            <p className="skill-info">JS</p>
                                        </div>
                                    </div>
                                    <h3 className='Stack'>Goal</h3>
                                    <p> When I started this theme I was really hoping to creat a unique shopping experience to all the users of the website. Creating very interactive components that will make a memorable session making people want ot continue shopping. Making all the pages on the website myself and creating intreging section with the goal of increaing conversion in mind. Which after a year we noticed a 60% increase in conversion with this theme.</p>
                                    <a href="https://nrml.ca/" target="_blank" rel="noopener noreferrer">Check it out</a>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="box">
                                <div class="content">                            
                                    <h1 className='blurb'>Plugged In</h1>
                                    <img src={pluggedin} style={{ height: "auto", width: "100%" }} alt="Your SVG" />                            
                                    <h3 className='Stack'>Stack</h3>
                                            <div className='stacks'>
                                                <div className="skill-group">
                                                    <div className="skill">
                                                    <SiHtml5 color="#E34F26" size={50} />
                                                    </div>
                                                    <p className="skill-info">HTML</p>
                                                </div>
                                                <div className="skill-group">
                                                    <div className="skill">
                                                    <SiCss3 color="#1572B6" size={50} />
                                                    </div>
                                                    <p className="skill-info">CSS</p>
                                                </div>
                                                <div className="skill-group">
                                                    <div className="skill">
                                                    <SiJavascript color="#F7DF1E" size={50} />
                                                    </div>
                                                    <p className="skill-info">JS</p>
                                                </div>
                                                <div className="skill-group">
                                                    <div className="skill">
                                                    <SiReact color="#61DAFB" size={50} />
                                                    </div>
                                                    <p className="skill-info">ReactJS</p>
                                                </div>
                                                <div className="skill-group">
                                                    <div className="skill">
                                                    <SiSass color="#CC6699" size={50} />
                                                    </div>
                                                    <p className="skill-info">SASS</p>
                                                </div>
                                            </div>
                                            <h3 className='Stack'>Goal</h3>
                                    <p>This project was simply a quick landing page for a digital business agency to that lets me showcase some of the abilities to create a React Project. Using some of the different features that react provide to make some usefull compenents.</p>
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