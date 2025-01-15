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
  MDBIcon,
  MDBCarousel, MDBCarouselItem
} from 'mdb-react-ui-kit';
import bulb from './images/bulb2.jpg';
import image from './images/image3.jpg';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';

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
                  <h4>SWEETy_SIGN ONE STOP BRANDING SOLUTION</h4>
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
            We are a trusted signage company with decades of experience, dedicated to delivering high-quality, 
            visually captivating solutions that help businesses communicate their identity.
             From our humble beginnings to becoming an industry leader, we continue to innovate and uphold a 
             legacy of excellence, driven by the fresh perspectives and cutting-edge technology of the new 
             generation.
              <br/><br/>
              We’re a one-stop shop for all your brand development needs, taking your vision from concept to execution.
              <p className='heading_text1'>Our Services</p>

              <MDBRow className="mt-3 text-center">
                <MDBCol md="3">
                  <h6> Custom Signage</h6>
                </MDBCol>
                <MDBCol md="4">
                  <h6> Outdoor & Indoor Signs</h6>
                </MDBCol>
                <MDBCol md="4">
                  <h6> LED & Digital Signage</h6>
                </MDBCol>

                <MDBRow className="mt-3 text-center">
                <MDBCol md="5">
                  <h6> 3D & Dimensional Signs</h6>
                </MDBCol>
                <MDBCol md="4">
                  <h6>Eco-friendly Solutions</h6>
                </MDBCol>
              </MDBRow>
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
              We specialize in designing and creating custom signage solutions, including storefront signs, 
              LED boards, vinyl branding, and more, to help businesses effectively communicate and stand out.
               Our diverse range of products includes eye-catching outdoor displays, elegant interior signs,
                and innovative digital solutions.
              </div>
              <h2 className='para2'> We pride ourselves on being a one-stop shop for all signage
              needs, offering:</h2>
            </MDBCol>
          </MDBRow>
{/* ////////////////////////////////////////////////////////////////// */}

          <div className="card-container">
      <MDBCard className="custom-card1">
        <MDBCardBody className='card_1'>
          <MDBIcon icon="sign" size="3x" />
          <MDBCardTitle> Custom Signage </MDBCardTitle>
          <MDBCardText>
          Tailored designs that reflect your unique 
          brand identity.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="custom-card1">
        <MDBCardBody>
          <MDBIcon icon="building" size="3x" />
          <MDBCardTitle>Outdoor & Indoor Signs </MDBCardTitle>
          <MDBCardText>
          Durable solutions for both 
exterior and interior displays, including wayfinding systems 
and promotiona signage.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="custom-card1">
        <MDBCardBody >
          <MDBIcon icon="tv" size="3x" />
          <MDBCardTitle>LED & Digital Signage </MDBCardTitle>
          <MDBCardText>
           Cutting-edge solutions that capture
 attention and engage audiences, with energy-efficient and 
 customizable options.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="custom-card1">
        <MDBCardBody>
          <MDBIcon icon="cube" size="3x" />
          <MDBCardTitle> 3D & Dimensional Signs </MDBCardTitle>
          <MDBCardText>
          Stunning, attention-grabbing 
          designs  that elevate your visual presence.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="custom-card1">
        <MDBCardBody>
          <MDBIcon icon="leaf" size="3x" />
          <MDBCardTitle>Eco-friendly Solutions </MDBCardTitle>
          <MDBCardText>
           Sustainable materials and 
processes that minimize environmental impact.We combine 
creativity, craftsmanship, and advanced technologies to 
create signage that is not only visually compelling but also 
functional and long-lasting.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
        </MDBContainer>



        {/* ///////////////////////////////////////////////// */}
        <p className='heading_text'>Our Products</p>
        <h1>Take A look at our Products</h1> <br></br>
        <MDBCarousel showControls showIndicators interval={3000}>
  <MDBCarouselItem itemId={1} interval={3000}>
    
        <img src={product1} className="d-block products_list" alt="..." />
    
      
  </MDBCarouselItem>
  <MDBCarouselItem itemId={2} interval={3000}>
    <img src={product2} className="d-block products_list" alt="..." />
  </MDBCarouselItem>
  <MDBCarouselItem itemId={3} interval={3000}>
    <img src={product3} className="d-block products_list" alt="..." />
  </MDBCarouselItem>
</MDBCarousel>
<br></br><br></br><br></br>
  <MDBContainer className="d-flex justify-content-center align-items-center">
             
              <div className="marquee-text">
              CUSTOM SIGNAGE / LED & DIGITAL SIGNAGE / OUTDOOR & INDOOR SIGNS / 3D & DIMENSIONAL SIGNS / ECO-FRIENDLY SOLUTION
         </div>
       
     </MDBContainer>
 
     <MDBContainer className="d-flex justify-content-center align-items-center">
             
              <div className="marquee-text2">
              CUSTOM SIGNAGE / LED & DIGITAL SIGNAGE / OUTDOOR & INDOOR SIGNS / 3D & DIMENSIONAL SIGNS / ECO-FRIENDLY SOLUTION
         </div>
       
     </MDBContainer>

    <br></br><br></br><br></br>
      </MDBContainer>
     
    </div>
    
  );
}
