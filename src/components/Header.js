import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap';

function Header() {
  return (
    <Navbar className='p-3 px-md-4 shadow-sm border-bottom bg-white'>
      <NavbarBrand tag={Link} to='/' className='text-danger mr-md-auto'>
        Lambda Pizza
      </NavbarBrand>
      <Nav navbar className='mr-3 flex-row'>
        <NavItem>
          <NavLink className='p-2 text-dark' href='/components/'>
            Tour
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='p-2 text-dark' href='/components/'>
            Features
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='p-2 text-dark' href='/components/'>
            Support
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='p-2 text-dark' href='/components/'>
            Pricing
          </NavLink>
        </NavItem>
      </Nav>
      <Button tag={Link} to='/pizza' outline color='success'>
        Order Pizza
      </Button>
    </Navbar>
  );
}

export default Header;
