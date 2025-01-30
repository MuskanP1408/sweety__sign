import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn,MDBIcon,
    MDBCardBody

 } from 'mdb-react-ui-kit';

import background from './images/back.jpg'

import './Portfolio.css';  

export default function Event() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={background} className="background" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client">
                    <MDBIcon icon="hands-helping" size="1x"/>
                    Event Managment</p>
                <p className="mini_content event_con">An event management company handling Exhibitions,
                     corporate events (product launches, conferences), social events (weddings, birthdays), 
                     festival decorations, BTL activities, and more. They excel in understanding your goals,
                      developing a detailed event plan, venue selection, vendor management, logistics coordination,
                       marketing strategy, and on-site management.</p>
            </div>
        </div>
    </div>

    <MDBContainer className=" bg-black" fluid>
        <MDBRow>
            {/* Card 1 */}
            <MDBCol md="6" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card event_card">
                    <MDBCardBody>
                        <MDBCardTitle className="title1 name">  <MDBIcon fas icon="briefcase" size="2x" />
                        Corporate Event Management</MDBCardTitle><br/>
                        <MDBBtn color="primary" className="read_btn"><Link to="/corporate_event">Read More</Link></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="6" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card event_card">
                    <MDBCardBody>
                        <MDBCardTitle className="title1"> <MDBIcon fas icon="users" size="2x" />
                            Social Event Management</MDBCardTitle><br/><br/>
                        <MDBBtn color="primary"  className="read_btn"><Link to="/social_event">Read More</Link></MDBBtn>
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
