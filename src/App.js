import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Image, Row, Col, Navbar, Container, Nav, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends Component {
  render(){
    // var setActiveState = () =>{
    //   const node = ReactDOM.findDOMNode(this);

    //   // Get child nodes
    //   if (node instanceof HTMLElement) {
    //       const child = node.querySelector(".active");
    //       if (child) child.className = child.className.replace("active","deactive");
    //   }
    // }

    return (
      <Router>
      <div className="App">
        <div id="sidebar">
          {/* Navbar Toggler */}
          <nav className="navbar navbar-dark">
              <span className="navbar-toggler-icon ml-auto" 
                onClick={hideSidebar}
                id="hideToggler">
              </span> 
          </nav>

          {/* Avatar */}
          <div className="user-info">
            <h6 className="name">{user.name}</h6>
            <div className="subtitle">{user.contact}</div>
            <Image src={user.avatar} roundedCircle className="avatar"/>
          </div>

          {/* Navigator */}
          <div id="ref">
            <p className="active"><Link to ="/" style={styles.linkStyle}>Dashboards</Link></p>
            <p className="deactive"><Link to ="/analytic" style={styles.linkStyle}>Analytics</Link></p>
            <p className="deactive"><Link to ="/project"style={styles.linkStyle}>Project</Link></p>
            <p className="deactive"><Link to ="/calendar" style={styles.linkStyle}>Calendar</Link></p>
          </div>
        </div>
        
        <Navbar variant="light" bg="light">
          <Navbar>
            <div className="navbar navbar-light">
              <span className="navbar-toggler-icon" 
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
        
        <Switch>
          <Route path="/analytic">
            <Analytic />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}
function Home(){
  return(
    <Row>
      <Col><h2>Home</h2></Col>
    </Row>
  );
}
function Calendar(){
  return(
    <Row>
      <Col><h2>Calendar</h2></Col>
    </Row>
  );
}
function Analytic(){
  return (
    <div className="content">
      <div className="graph-wrapper">
        <Row>
          <Col>
            <h6>{graph.title}</h6>
            <div className="subtitle">{graph.subtitle}</div>  
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
  );
}
function Project(){
  return(
    <Row>
      <Col><h2>Project</h2></Col>
    </Row>
  );
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

let styles = {
  linkStyle:{
    textDecoration: 'none', 
    color: "white",
  }
};

export default App;

