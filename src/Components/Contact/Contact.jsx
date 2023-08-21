
import React, { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./Contact.css"
import {
    SiLinkedin,
    SiGithub,
    SiGmail,

  } from "@icons-pack/react-simple-icons"
class Contact extends Component {

    render(){
        return(
            <div class ="frame">
                <a href="#" class="btn">
            <SiLinkedin color="#0e76a8" size={50} />
            </a>
                <a href="#" class="btn">
            <SiGithub color="#252525" size ={50}/>
            </a>
                <a href="#" class="btn">
            <SiGmail color ="#252525"/>
            </a>
            </div>
        )}

}

export default Contact
