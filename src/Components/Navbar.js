import React,{Component} from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import './navbar.css';

class navbar extends Component{
    render(){

        return(
            <div>
                <Navbar className="navColor" expand="lg">
                    <Navbar.Brand href="#home"><i className="fa fa-hand-o-right" aria-hidden="true"></i>ToDo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default navbar;