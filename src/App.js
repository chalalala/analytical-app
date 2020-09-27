import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Image, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faColumns, faTasks, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faEnvelope, faAddressBook, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import {  BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import { push as Menu } from 'react-burger-menu';


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
  toggleMenu (menuState) {
    this.setState({menuOpen: menuState})
  }
  render(){
    return (
      <Router>
      <div className="App">
        <div id="sidebar">
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}>
            
            <div className="user-info">
              <h6 className="name">{user.name}</h6>
              <div className="subtitle">{user.contact}</div>
              <Image src={user.avatar} roundedCircle className="avatar"/>
            </div>

            <Navbar.Text activeClassName="activeLink"> 
              APPLICATION
            </Navbar.Text>
            <NavLink to="/" onClick={() => this.toggleMenu(false)}>
              <FontAwesomeIcon icon={faColumns} style={{marginRight: 15,}}/>Dashboards
            </NavLink>
            <NavLink to="/analytic" onClick={() => this.toggleMenu(false)} activeClassName="activeLink">
              <FontAwesomeIcon icon={faChartBar} style={{marginRight: 15,}}/>Analytic
            </NavLink>
            <NavLink to="/project" onClick={() => this.toggleMenu(false)} activeClassName="activeLink">
              <FontAwesomeIcon icon={faTasks} style={{marginRight: 15,}}/>Project
            </NavLink>
            <NavLink to="/calendar" onClick={() => this.toggleMenu(false)} activeClassName="activeLink" >
              <FontAwesomeIcon icon={faCalendarAlt} style={{marginRight: 15,}}/>Calendar
            </NavLink>
          </Menu>
        </div>
        
        <Navbar variant="light" bg="light">
          <Navbar>
            <Nav.Link>&nbsp;</Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faCalendarAlt} style={styles.navbarLink}/></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faEnvelope} style={styles.navbarLink}/></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faAddressBook} style={styles.navbarLink}/></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faCheckSquare} style={styles.navbarLink}/></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faStar} style={{color:'#fdb511'}}/></Nav.Link>
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
            <Dashboards />
          </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

function Dashboards(){
  return <h1 style={{marginTop: 20, textAlign:'center'}}>This is Dashboards tab</h1>
}
function Calendar(){
  return <h1 style={{marginTop: 20, textAlign:'center'}}>This is calendar tab</h1>
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

      {/* <Row>
        <Col lg="7" style={{textAlign:'left'}}>
          <p style={{marginLeft:50}}>How are your active users trending over time?</p>
        </Col>

        <Col lg="5" style={{textAlign:'left'}}>
          <p>What are your top devices?</p>
        </Col>
      </Row>     */}
    </div>
  );
}
function Project(){
  return <h1 style={{marginTop: 20, textAlign:'center'}}>This is project tab</h1>
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

const styles = {
  navbarLink: {
    color:'#b3b3b3',
  }
}