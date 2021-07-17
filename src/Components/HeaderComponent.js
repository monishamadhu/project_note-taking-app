import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav, NavItem
  } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
      return(
        <Navbar color="light" className="navbar">
            <NavbarBrand href="/" id="heading">Notes to Remember</NavbarBrand>
            <Nav>
                {/* <NavItem>
                    <i className= "fa fa-camera fa-lg" />
                </NavItem> */}
                <NavItem>
                    <Link className='nav-link fa fa-eye fa-lg' to= '/view-notes'> View Notes </Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link fa fa-plus-circle fa-lg' to= '/create-note'> Create Note </Link>
                </NavItem>
            </Nav>
        </Navbar>
      )
}

  export default Header;