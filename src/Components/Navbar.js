import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './navbar.css';

class navbar extends Component{
    render(){

        return(
            <div class="main">
                <Navbar className="navColor" expand="lg">
                    <Navbar.Brand href="#"><i className="fa fa-hand-o-right" aria-hidden="true"></i>ToDo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#"><i class="fa fa-tasks"></i>MyTasks</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#"><i class="fas fa-sign-out-alt"></i>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default navbar;