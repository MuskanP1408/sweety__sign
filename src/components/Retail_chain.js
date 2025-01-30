import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn,MDBIcon,
    MDBCardBody

 } from 'mdb-react-ui-kit';

import background from './images/back.jpg'

import './Portfolio.css';  

export default function Retail_chain() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={background} className="background" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client retail">
                    <MDBIcon icon="store" size="1x"/>
                    Retails Chain Branding</p>
                <p className="event_con">Tailored Solutions for Your Brand. SAGC provides services
                     related to the creation, production, and customization of printed materials 
                     to enhance a client's brand image. Utilizing various printing techniques to 
                     produce a wide range of materials. Designing and producing signs, banners, 
                     and displays for both indoor and outdoor use to promote businesses and events.</p>
            </div>
        </div>
    </div>

    <MDBContainer className=" bg-black" fluid>
        <MDBRow>
            {/* Card 1 */}
            <MDBCol md="6" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card event_card">
                    <MDBCardBody>
                        <MDBCardTitle className="title1">  <MDBIcon fas icon="home" size="2x" />
                        Indoor Branding</MDBCardTitle><br/>
                        <MDBBtn color="primary" className="chain_btn1" ><Link to="/indoor">Read More</Link></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="6" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card event_card">
                    <MDBCardBody>
                        <MDBCardTitle className="title1"> <MDBIcon fas icon="campground" size="2x" />
                        Outdoor Branding</MDBCardTitle><br/><br/>
                        <MDBBtn color="primary" className="chain_btn2"><Link to="/outdoor">Read More</Link></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </MDBRow>  
           <MDBBtn outline color="info" className="back_button"> <Link to="/portfolio">
                  Back To Portfolio</Link>
                </MDBBtn>
    </MDBContainer>
    </>
   );
}
