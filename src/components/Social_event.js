import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import background from './images/back.jpg';
import baby_shower from './images/event6.jpg';
import Birthday_Decor from './images/event2.jpg';
import Engagement from './images/event9.jpg';
import Wedding_decor from './images/event5.jpg';

import './Portfolio.css';  

export default function Social_event() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={background} className="background" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client">
                   <MDBIcon fas icon="users" size="1x" />
                    Social Event Managment</p>
                <p className="event_con_cop">We plan and execute unforgettable events that leave a lasting impression.</p>
            </div>
        </div>
    </div>

    <MDBContainer className="bg-black" fluid>
        <MDBRow className="card_row">
            {/* Image 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={baby_shower} alt="Dealer Meet" className="image1"/>
                    <p className="image-title">Wedding</p>
                </div>
            </MDBCol>

            {/* Image 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={Birthday_Decor} alt="Product Launch Event" className="image1"/>
                    <p className="image-title">Birthday Decor</p>
                </div>
            </MDBCol>

            {/* Image 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={Engagement} alt="Vision Launch Event" className="image1"/>
                    <p className="image-title">Engagement</p>
                </div>
            </MDBCol>
        </MDBRow>

        {/* Second Row with Single Image */}
        <MDBRow className="card_row">
            <MDBCol md="12" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={Wedding_decor} alt="Company Annual Event" className="image1"/>
                    <p className="image-title">Haldi Decor</p>
                </div>
            </MDBCol>
        </MDBRow>

        <MDBBtn outline color="info" className="back_button event_page">
            <Link to="/event">Back To Event Page</Link>
        </MDBBtn>
    </MDBContainer>
    </>
   );
}
