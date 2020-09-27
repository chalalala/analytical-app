import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Image, Row, Col, Navbar, Container, Nav, ListGroup} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChartBar } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import{push as Menu} from 'react-burger-menu';


export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
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
<<<<<<< HEAD
          {/* <nav className="navbar navbar-dark">
              <span class="navbar-toggler-icon ml-auto" 
=======
          {/* Navbar Toggler */}
          <nav className="navbar navbar-dark">
              <span className="navbar-toggler-icon ml-auto" 
>>>>>>> de7d5885c2396a603e268aa43cf73020d417440c
                onClick={hideSidebar}
                id="hideToggler">
              </span> 
          </nav> */}

<<<<<<< HEAD
          {/* <div className="user-info">
=======
          {/* Avatar */}
          <div className="user-info">
>>>>>>> de7d5885c2396a603e268aa43cf73020d417440c
            <h6 className="name">{user.name}</h6>
            <div className="subtitle">{user.contact}</div>
            <Image src={user.avatar} roundedCircle className="avatar"/>
          </div> */}

<<<<<<< HEAD
          <Menu  isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
            <Navbar className="ml-auto">
              <Image src={user.avatar} roundedCircle className="small-avatar"/>
              <Navbar.Text style={{padding:0,textAlign:"left", color: 'white', alignItems:'center'}}>
                <h6 style={{marginBottom:0}}>{user.name}</h6>
                <div>{user.status}</div>
              </Navbar.Text>
            </Navbar>
            <NavLink to="/" onClick={() => this.closeMenu()} className="menu-item" activeClassName="activeLink" > 
              APPLICATION
            </NavLink>
            <NavLink to="/dashboard" onClick={() => this.closeMenu()} className="menu-item" activeClassName="activeLink" >Dashboards</NavLink>
            {/* <i class="fas fa-chart-line" style={{color: 'white'}}></i> */}
            {/* <span className="fas fa-chart-line" style={{color: 'white'}}></span> */}
            <NavLink to="/analytic" onClick={() => this.closeMenu()} className="menu-item" activeClassName="activeLink">
              <FontAwesomeIcon icon={faChartBar} style={{marginRight: 15,}}/>Analytic
            </NavLink>
            <NavLink to="/project" onClick={() => this.closeMenu()} className="menu-item" activeClassName="activeLink">
              Project
            </NavLink>
            <NavLink to="/calendar" onClick={() => this.closeMenu()} className="menu-item" activeClassName="activeLink" >
              Calendar
            </NavLink>
          </Menu>
=======
          {/* Navigator */}
          <div id="ref">
            <p className="active"><Link to ="/" style={styles.linkStyle}>Dashboards</Link></p>
            <p className="deactive"><Link to ="/analytic" style={styles.linkStyle}>Analytics</Link></p>
            <p className="deactive"><Link to ="/project"style={styles.linkStyle}>Project</Link></p>
            <p className="deactive"><Link to ="/calendar" style={styles.linkStyle}>Calendar</Link></p>
          </div>
>>>>>>> de7d5885c2396a603e268aa43cf73020d417440c
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
          <Route path="/dashboard">
            <Dashboard />
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
<<<<<<< HEAD
function Dashboard(){
  return <><h1 style={{textAlign:'center'}}>This is dashboard tab</h1></>
}
function Calendar(){
  return <h1 style={{textAlign:'center'}}>This is calendar tab</h1>
=======
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
>>>>>>> de7d5885c2396a603e268aa43cf73020d417440c
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
<<<<<<< HEAD
  return <h1 style={{textAlign:'center'}}>This is project tab</h1>
}
function Home(){
  return <h1 style={{textAlign:'center'}}>This is application tab</h1>
=======
  return(
    <Row>
      <Col><h2>Project</h2></Col>
    </Row>
  );
>>>>>>> de7d5885c2396a603e268aa43cf73020d417440c
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

<<<<<<< HEAD
// export default App;
=======
let styles = {
  linkStyle:{
    textDecoration: 'none', 
    color: "white",
  }
};

export default App;

>>>>>>> de7d5885c2396a603e268aa43cf73020d417440c
