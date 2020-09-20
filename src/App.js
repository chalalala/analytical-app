import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Image, Row, Col, Navbar, Container, Nav, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div id="sidebar">
          <FontAwesomeIcon icon="coffee" inverse/>

          <div onClick={hideSidebar}>Click me</div>
          
          <div className="user-info">
            <h6 id="name">{user.name}</h6>
            <div id="contact">{user.contact}</div>
            <Image src={user.avatar} roundedCircle className="avatar"/>
          </div>

          <ListGroup variant="flush" id="ref">
            <p style={{marginLeft:25,color:'white'}}>APPLICATION</p>
            <div className="list-group-item">Dashboards</div>
            <div className="list-group-item">Analytics</div>
            <div className="list-group-item">Project</div>
            <div className="list-group-item">Calendar</div> 
          </ListGroup>
        </div>
      
        <Navbar bg="light" className="justify-content-between">
          <Navbar className="mr-auto">
            <Nav.Link href="#">Calendar</Nav.Link>
            <Nav.Link href="#">Mail</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">To-do</Nav.Link>
            <Nav.Link href="#">Stars</Nav.Link>
          </Navbar>

          <Navbar className="mr-auto">
              <Image src={user.avatar} roundedCircle className="small-avatar"/>
              <Navbar.Text>
                <h6 style={{marginBottom:0}}>{user.name}</h6>
                <div>{user.status}</div>
              </Navbar.Text>
          </Navbar>
        </Navbar>
            
        <div className="graph">

        </div>

      </div>
    )
  }
}

const user = {
  name: 'Mai Doan',
  contact: 'maidt.bi9162@st.usth.edu.vn',
  avatar: require('./avatar.jpg'),
  status: 'Guest',
};

var hideSidebar = () => {
  document.getElementById("sidebar").style.display = "none";
}

export default App;
