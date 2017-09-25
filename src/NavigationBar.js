import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap'

class NavigationBar extends React.Component {

  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" > Portfolio </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"> Home </NavItem>
            <NavItem eventKey={1} href="#"> Contact </NavItem>
            <NavItem eventKey={1} href="#"> About </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavigationBar;
