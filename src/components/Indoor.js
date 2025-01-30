import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import background from './images/back.jpg';
import baby_shower from './images/indoor1.jpg';
import paint from './images/vinly_paint.png';
import clip from './images/clip_on.png';
import standy from './images/standy.png';

import './Portfolio.css';  

export default function Indoor() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={background} className="background" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client retail">
                   <MDBIcon fas icon="home" size="1x" />
                   Indoor Branding</p>
                <p className="event_con_cop brand_text">Tailored Solutions for Your Brand. SAGC provides 
                    services related to the creation, production, and customization of
                     printed materials to enhance a client's brand image. Utilizing various printing 
                     techniques to produce a wide range of materials. Designing and producing signs, 
                     banners, and displays for both indoor and outdoor use to promote businesses and events.</p>
            </div>
        </div>
    </div>

    <MDBContainer className="bg-black" fluid>
        <MDBRow className="card_row">
            {/* Image 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={baby_shower} alt="Dealer Meet" className="image1"/>
                    <p className="image-title"> INSHOP BRANDING</p>
                </div>
            </MDBCol>

            {/* Image 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={paint} alt="Product Launch Event" className="image1"/>
                    <p className="image-title"> VINYL PRINTING</p>
                </div>
            </MDBCol>

            {/* Image 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={clip} alt="Vision Launch Event" className="image1"/>
                    <p className="image-title">CLIP-ON</p>
                </div>
            </MDBCol>
        </MDBRow>

        {/* Second Row with Single Image */}
        <MDBRow className="card_row">
            <MDBCol md="12" className="mb-4 d-flex justify-content-center">
                <div className="image-container">
                    <img src={standy} alt="Company Annual Event" className="image1"/>
                    <p className="image-title">STANDY ROLLUP STANDY</p>
                </div>
            </MDBCol>
        </MDBRow>

        <MDBBtn outline color="info" className="back_button event_page">
            <Link to="/retail_chain">Back To Event Page</Link>
        </MDBBtn>
    </MDBContainer>
    </>
   );
}
