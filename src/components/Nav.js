import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './Nav.css';
import S_logo_1 from './images/S_logo_1.png';

export default function () {
  const [openBasic, setOpenBasic] = useState(false);

  // Toggle the navbar when "hamburger" icon is clicked
  const toggleNavbar = () => {
    setOpenBasic(!openBasic);
  };

  // Close the navbar when a link is clicked
  const closeNavbar = () => {
    setOpenBasic(false);
  };

  return (
    <MDBNavbar expand='lg' className='nav_color' fixed='top'>
      <MDBContainer fluid>
        {/* Logo Section */}
        <MDBNavbarBrand href='/'>
          <img
            src={S_logo_1}
            height='50'
            alt='Logo'
            loading='lazy'
          />
        </MDBNavbarBrand>

        {/* Hamburger Toggler Icon - On smaller screens, the hamburger will appear on the right */}
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded={openBasic ? 'true' : 'false'}
          aria-label='Toggle navigation'
          onClick={toggleNavbar}
          className="ms-auto" // Ensures the toggler is aligned to the right
        >
          {/* Change the color of the hamburger icon here */}
          <MDBIcon icon='bars' fas className='hamburger' /> {/* You can replace the color here */}
        </MDBNavbarToggler>

        {/* Navbar Collapse Section */}
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='ms-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link className="navbar-link" to="/" onClick={closeNavbar}>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/about" onClick={closeNavbar}>About Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/clients" onClick={closeNavbar}>Clients</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/portfolio" onClick={closeNavbar}>Portfolio</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/contact" onClick={closeNavbar}>Contact Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
