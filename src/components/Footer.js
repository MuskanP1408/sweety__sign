import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import S_logo_1 from './images/S_logo_1.png';


export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted footer_color'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className="navbar-link">Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
          <i className="fab fa-facebook-f footer_icon"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="fa-brands fa-twitter footer_icon"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="fa-brands fa-google footer_icon"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="fa-brands fa-instagram footer_icon"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="fa-brands fa-linkedin footer_icon"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="fa-brands fa-github footer_icon"></i>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 navbar-link'>
              <img
                          src={S_logo_1}
                          height='150'
                          alt='Logo'
                          loading='lazy'
                        />
                
              </h6>
              <p className="navbar-link footer_text">
              Sweety Sign™️ is a trademark of Sakar Tex Mech Industries. We create bold, 
              memorable brand identities through strategic design. Let’s build something unforgettable.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 navbar-link'>Quick Links</h6>
              <p>
              <Link className="navbar-link" to="/">
                  Home
                </Link>
              </p>
              <p>
              <Link className="navbar-link" to="/about">
                  About Us</Link>
                
              </p>
              <p>
              <Link className="navbar-link" to="/clients">
                  Clients
                </Link>
              </p>
              <p>
              <Link className="navbar-link" to="/portfolio">
                  Portfolio
                </Link>
              </p>
              <p>
              <Link className="navbar-link" to="/contact">
                Contact Us
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 navbar-link'>Services</h6>
              <p>
              <Link className="navbar-link" to="/event">
                Event Management
                </Link>
              </p>
             
              <p>
              <Link className="navbar-link" to="/retail_chain">
                Retail Chain Branding
                </Link>
              </p>
              <p>
              <Link className="navbar-link" to="/outdoor_media">
                Outdoor Media Planing
                </Link>
              </p>

              <p>
              <Link className="navbar-link" to="/exhibitions">
              Exhibitions
                </Link>
              </p>

            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 navbar-link'>Contact</h6>
              <p className="navbar-link add_text">
              <i class="fa-solid fa-house footer_icon"></i>
              BRANCHES: AHMEDABAD - Dubai <br/>
              <b> Correspondence Address:</b> 905, Samudra Annexe, B/H Jain Derasar,
               Opp.Girish Cold Drinks, Vasant Vihar, Navrangpura, Ahmedabad, Gujarat - 380009
              </p>
              <p className="navbar-link">
              <i class="fa-solid fa-envelope footer_icon"></i>
                sakartech95@gmail.com
              </p>
              <p className="navbar-link">
              <i class="fa-solid fa-phone footer_icon"></i> + 85111O7575
              </p>
              {/* <p>
              <i class="fa-solid fa-print footer_icon"></i> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 navbar-link' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 Copyright: Sakar Tex Mech Industries
        
      </div>
    </MDBFooter>
  );
}