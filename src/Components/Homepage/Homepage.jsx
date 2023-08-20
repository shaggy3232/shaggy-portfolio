
import React, { Component } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import "./Homepage.css"
import Navbar from '../Navbar/Navbar';
import Iam from '../Iam/Iam';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

class Homepage extends Component {

    render(){
        return(
            <div className='bg'>
                <Navbar/>
                <Iam/>
                <Projects/>
                <Contact/>
            </div>
        )}

}

export default Homepage