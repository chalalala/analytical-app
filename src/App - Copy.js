import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Image, Row, Col, Navbar, Container, Nav, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div id="sidebar">

          <nav className="navbar navbar-dark">
              <span class="navbar-toggler-icon ml-auto" 
                onClick={hideSidebar}
                id="hideToggler">
              </span> 
          </nav>

          <div className="user-info">
            <h6 className="name">{user.name}</h6>
            <div className="subtitle">{user.contact}</div>
            <Image src={user.avatar} roundedCircle className="avatar"/>
          </div>

          <div id="ref">
            <p style={{opacity:0.8,fontSize:14}}>APPLICATION</p>
            <p className="navg" ref="navg">Dashboards</p>
            <p className="navg" ref="navg">Analytics</p>
            <p className="navg" ref="navg">Project</p>
            <p className="navg" ref="navg">Calendar</p> 
          </div>
        </div>
      
        <Navbar variant="light" bg="light">
          <Navbar>
            <div class="navbar navbar-light">
              <span class="navbar-toggler-icon" 
                style={{display:'none'}}
                onClick={showSidebar}
                id="showToggler"
              >
              </span>
            </div>
            <Nav.Link href="#">Calendar</Nav.Link>
            <Nav.Link href="#">Mail</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">To-do</Nav.Link>
            <Nav.Link href="#">Stars</Nav.Link>
          </Navbar>

          <Navbar className="ml-auto">
              <Image src={user.avatar} roundedCircle className="small-avatar"/>
              <Navbar.Text style={{padding:0,textAlign:"left"}}>
                <h6 style={{marginBottom:0}}>{user.name}</h6>
                <div>{user.status}</div>
              </Navbar.Text>
          </Navbar>
        </Navbar>

        <div className="content show" id="Analytics">
          <div className="graph-wrapper">
            <Row>
              <Col>
                <h6>{graph.title}</h6>
                <div class="subtitle">{graph.subtitle}</div>  
              </Col>
            </Row>
            <Row>
              <div className="graph">
                <img src={graph.image}/>
              </div>
            </Row>
          </div>

          <Row>
            <Col lg="7" style={{textAlign:'left'}}>
              <p style={{marginLeft:50}}>How are your active users trending over time?</p>
            </Col>

            <Col lg="5" style={{textAlign:'left'}}>
              <p>What are your top devices?</p>
            </Col>
          </Row>     
        </div>

        <div className="content" id="Dashboards">
          <p>Nothing's here</p>
        </div>   

      </div>
    )
  }
}

const user = {
  name: 'Mai Doan',
  contact: 'maidt.bi9162@st.usth.edu.vn',
  avatar: require('./images/avatar.jpg'),
  status: 'Guest',
};

const graph = {
  title: 'Annual Number of Deaths from Wildfire',
  subtitle: 'Global Deaths Since 2019 due to Wildfires',
  image: require('./images/Line-Graphs.jpg')
}

var hideSidebar = () => {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("showToggler").style.display = "block";
}

var showSidebar = () => {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("showToggler").style.display = "none";
  document.getElementById("hideToggler").style.display = "block";
}

var displayContent = () => {
  var container = document.getElementById("ref");
  // var navigator = container.getElementsByClassName("navg");
  var navigator = ReactDOM.findDOMNode(this.refs.navg);
  console.log(navigator.length);
  for (var i=0;i<navigator.length;i++){
    navigator[i].addEventListener("click",function(){
      var current = document.querySelector("show");
      current.className = current.className.replace(" show","");
      document.getElementById(navigator[i].innerHTML).className += " show";
    })
  }
}

// displayContent();

export default App;
