
import React, { Component } from 'react';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import "./Contact.css"

class Contact extends Component {

    render(){
        return(
            <div class ="frame">
                <a href="#" class="btn">
            <i class="fab fa-facebook-f" style={{color: '#3b5998'}}></i>
            </a>
                <a href="#" class="btn">
            <i class="fab fa-twitter" style={{color: '#00acee'}}></i>
            </a>
                <a href="#" class="btn">
            <i class="fab fa-dribbble" style={{color: '#ea4c89'}}></i>
            </a>
                <a href="#" class="btn">
            <i class="fab fa-linkedin-in" style={{color:'#0e76a8'}}></i>
            </a>
                <a href="#" class="btn">
            <i class="fab fa-get-pocket" style={{color:"#ee4056"}}></i>
            </a>
                <a href="#" class="btn">
            <i class="far fa-envelope"></i>
            </a>
            </div>
        )}

}

export default Contact
