import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav, NavItem
  } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
      return(
        <Navbar color="light" light>
            <NavbarBrand href="/">Nucamp Notes</NavbarBrand>
            <Nav>
                <NavItem>
                    <i className= "fa fa-camera fa-lg" />
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to= '/view-notes'> View Notes </Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to= '/create-note'> Create Notes </Link>
                </NavItem>
            </Nav>
        </Navbar>
      )
}

  export default Header;