
import React, { Component } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import "./Navbar.css"

class Navbar extends Component {

    render(){
        return(
            <nav className='portfolio-nav'>
            <div>
              This is a nav bar
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </nav>
        )}

}

export default Navbar