import React from 'react';
import { MDBContainer, MDBRow, MDBCol, 
  MDBBtn, MDBCard, MDBCardBody, MDBCardText,MDBCardTitle
} from 'mdb-react-ui-kit';
import './About.css';
import  { useState } from "react";
import image from './images/image3.jpg'
import image2 from './images/chart.png'



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
      <MDBCard className="text-center mb-4 custom-card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
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

export default function About() {
  const [activeTab, setActiveTab] = useState("purpose");
    return (
        <>
        
      <div className='bg-image'>
      <img src={image} className='w-100' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className='d-flex justify-content-left align-items-center h-100'>
          <p className='text mb-0'>About Us</p>
          <h2 className="mini_content1"> For decades, we’ve been dedicated to creating high-quality, 
visually captivating signage that helps businesses of all sizes
 communicate their identity and message effectively. What 
started as a small local business has grown into a trusted 
name in the signage industry, known for delivering innovative 
and impactful solutions. In the last decade, the company has 
been led by the new generation, who have brought fresh 
perspectives, cutting-edge technology, and a commitment to 
keeping our legacy of excellence alive.</h2>
        </div>
      </div>
    </div>
 <MDBContainer fluid className='about-container'>
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
    </div>


    {/* //----------------------// */}

    <MDBContainer className="d-flex flex-column align-items-left mt-4">
      <div className="d-flex mb-2">
        <MDBBtn 
          color={activeTab === "purpose" ? "info" : "dark"}
          className="me-2 purpose"
          onClick={() => setActiveTab("purpose")}
        >
          OUR JOURNEY
        </MDBBtn>
        <MDBBtn className='values'
          color={activeTab === "values" ? "info" : "dark"}
          onClick={() => setActiveTab("values")}
        >
          WHY CHOOSE US
        </MDBBtn>
      </div>

      <MDBCard style={{ maxWidth: "500px", backgroundColor: "#000", color: "#fff" }}>
        <MDBCardBody>
          {activeTab === "purpose" && (
            <div className="box_text">
              Starting as a small business focused on providing reliable, high-quality signage for local businesses,
               we grew by embracing emerging technologies and trends. A decade ago, 
               leadership transitioned to <b>Pushpesh Pandey</b>, whose dynamic vision ushered in a new wave of 
               creativity and innovation. By adopting digital printing, LED technology, and 3D design, 
               we expanded our offerings and positioned ourselves as leaders in providing personalized, 
               sustainable signage solutions. Today, we continue to stay at the forefront of the industry, 
               meeting the diverse needs of clients across various sectors.
            </div>
          )}
          {activeTab === "values" && (
              <div className="box_text">
              Our core values are innovation, professionalism, and delivering qualitative
              service with flawless execution.Choose us for our decades of experience and expertise in 
              delivering customized, high-quality signage solutions. We leverage cutting-edge technologies 
              like digital printing, UV tech, LED lighting, and 3D design to create visually striking and
               durable signs that reflect your brand’s identity. With a global reach and a commitment to 
               sustainability, we offer eco-friendly, energy-efficient solutions tailored to meet your specific 
               needs. Our customer-centric approach ensures a smooth and satisfying experience from start to finish.
            </div>
          )}
        </MDBCardBody>
      </MDBCard>
      <MDBBtn outline color="info" href="#">
                          Company Profile
      </MDBBtn>

      
    </MDBContainer>


    {/* //---------------------// */}
    </MDBCol>
    <MDBCol md="6">
    <MDBRow className="d-flex justify-content-center align-items-center">
                <div className="horizontal-lines d-flex">
                   <div className="line small"></div>
                    <div className="line large"></div>
                    <div className="line small"></div>
                    <div className="line large"></div>
                    <div className="line small"></div>
                </div>
            </MDBRow> 
    </MDBCol>
  </MDBRow>

    {/* Cards Section */}
    <MDBContainer className='cardSection mt-5'>
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
            </MDBContainer >

            <MDBContainer className="img d-flex justify-content-center align-items-center">
              <img src={image2} className="brading_smartart w-45" alt="Image" />
            </MDBContainer>

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

 </MDBContainer>
 </>       
       
    );
}


 
            
