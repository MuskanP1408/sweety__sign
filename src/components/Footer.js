import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';


export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
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
              <h6 className='text-uppercase fw-bold mb-4'>
              <i class="fa-solid fa-gem footer_icon"></i>
                Sweety_Sign
              </h6>
              <p>
              MANAGED BY SAKAR TEX MECH INDUSTRIES
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Clients
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Portfolio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                Event Management
                </a>
              </p>
             
              <p>
                <a href='#!' className='text-reset'>
                Retail Chain Branding
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Outdoor Media Planing
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <i class="fa-solid fa-house footer_icon"></i>
              BRANCHES: AHMEDABAD - DUBAI
              BL-1,2,& 9, Samudra Complex,Near, Swastik Cross Rd,Behind
              Jain Derasar,Opp.Girish Cold Drinks,Vasant Vihar,Navrangpura, 
              Ahmedabad, Gujarat 380009
              </p>
              <p>
              <i class="fa-solid fa-envelope footer_icon"></i>
                sakartech95@gmail.com
              </p>
              <p>
              <i class="fa-solid fa-phone footer_icon"></i> + 85111O7575
              </p>
              {/* <p>
              <i class="fa-solid fa-print footer_icon"></i> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}