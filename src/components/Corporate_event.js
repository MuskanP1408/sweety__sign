import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn,MDBIcon,
    MDBCardBody

 } from 'mdb-react-ui-kit';

import background from './images/back.jpg'

import './Portfolio.css';  

export default function Corporate_event() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={background} className="background" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client">
                   <MDBIcon fas icon="briefcase" size="1x" />
                    Corporate Event Managment</p>
                <p className="event_con_cop">We plan and execute unforgettable events that leave a lasting impression.</p>
            </div>
        </div>
    </div>

    <MDBContainer className=" bg-black" fluid>
        <MDBRow>
            {/* Card 1 */}
            <MDBCol md="6" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card event_card">
                    <MDBCardBody>
                        <MDBCardTitle className="title1">  <MDBIcon fas icon="briefcase" size="2x" />
                        Corporate Event Management</MDBCardTitle><br/>
                        <MDBBtn color="primary">Read More</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="6" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card event_card">
                    <MDBCardBody>
                        <MDBCardTitle className="title1"> <MDBIcon fas icon="users" size="2x" />
                            Social Event Management</MDBCardTitle><br/><br/>
                        <MDBBtn color="primary">Read More</MDBBtn>
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
