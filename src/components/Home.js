import React, { useState, useEffect } from 'react';
import './Homecss.css'; // Ensure your CSS for bubbles and other styles is correctly linked
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import bulb from './images/bulb2.jpg';
import image from './images/image3.jpg'

// CounterCard Component
function CounterCard({ title, initialValue, limit }) {
  const [count, setCount] = React.useState(initialValue);

  React.useEffect(() => {
    if (count < limit) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 5);

      return () => clearInterval(interval);
    }
  }, [count, limit]);

  return (
    <center>
      <MDBCard className="text-center mb-4 custom-card" style={{ backgroundColor: 'rgba(64, 181, 181, 0.5)', color: 'white' }}>
        <MDBCardBody className="custom-card-body">
          <MDBCardText>
            <h3>{count}</h3>
          </MDBCardText>
          <MDBCardTitle>{title}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </center>
  );
}

// Home Component
export default function Home() {
  const [bounce, setBounce] = useState(false);
  const [flyIn, setFlyIn] = useState(false);

  const handleMouseEnter = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has scrolled enough to show the image
      const imageElement = document.getElementById('bulb-image');
      const rect = imageElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        setFlyIn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Background Image */}
      <div className="bg-image">
        <img src={image} className="w-100" alt="Sample" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <MDBContainer>
              <MDBRow className='logo_name'>
                <MDBCol sm="12" md="8">
                  <h1>
                    <i
                      className={bounce ? 'bounce' : ''}
                      onMouseEnter={handleMouseEnter} // Trigger bounce on hover
                    >
                      WELCOME TO
                    </i>
                    <br /><h1 className='sweety_text'>
                    SWEETY_SIGN</h1>
                  </h1>
                </MDBCol>
                <MDBCol sm="12" md="4" className='sweety_sign'>
                  <h4>Sweety_Sign is a Comprehensive Marketing Company</h4>
                  <MDBBtn outline color="info" href="#">
                    Company Profile
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <MDBContainer className='cardSection' fluid >
        <MDBRow>
          <MDBCol sm="12" md="4">
            <CounterCard title="Years Of Experience" initialValue={0} limit={5} />
          </MDBCol>
          <MDBCol sm="12" md="4">
            <CounterCard title="Project Completed" initialValue={50} limit={150} />
          </MDBCol>
          <MDBCol sm="12" md="4">
            <CounterCard title="Happy Clients" initialValue={150} limit={500} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Content */}
      <MDBContainer fluid className='home-container'>
        <MDBRow>
          <MDBCol md="6">
            <p className='heading_text'>Who We Are</p>
            <h1>The Age Of Innovation</h1>
            <div className='para1'> 
              Creatofox (formerly Shyam Art) has been a leading company providing services in the sector of Exhibition,
              Event Management, Below-The-Line (BTL) activations, campaign strategies and digital marketing since 2005.
              We’re a one-stop shop for all your brand development needs, taking your vision from concept to execution.
              <br/><br/>
              We’re a one-stop shop for all your brand development needs, taking your vision from concept to execution.
              <p className='heading_text1'>Our Services</p>

              <MDBRow className="mt-3 text-center">
                <MDBCol md="2">
                  <h6>Exhibitions</h6>
                </MDBCol>
                <MDBCol md="3">
                  <h6>Digital Marketing</h6>
                </MDBCol>
                <MDBCol md="4">
                  <h6>Event Management</h6>
                </MDBCol>
              </MDBRow>

              <MDBRow className="mt-4">
                <MDBCol>
                  <MDBBtn outline color="info" href="#">
                    More About Us
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>

          <MDBCol md="6">
            <MDBCardImage
              id="bulb-image"
              src={bulb}
              className={`bulb_image ${flyIn ? 'fly-in' : ''}`}
              position='bottom'
            />
          </MDBCol>
        </MDBRow>

        <MDBContainer fluid className='text-center'>
          <MDBRow>
            <MDBCol md="12">
              <p className='heading_text'>What We Do</p>
              <div className='para1'> 
                Elevate Your Brand with Creatofox Communications having expertise in Expo, events, BTL Strategies & Digital Marketing
              </div>
              <h2>We don't just manage events, we create them.</h2>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
}
