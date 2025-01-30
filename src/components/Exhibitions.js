import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import background from './images/back.jpg';
import upcomming from './images/upcomming.jpg';


import './Portfolio.css';  

export default function Exhibitions() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={background} className="background" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client retail">
                   <MDBIcon fas icon="users" size="1x" />
                   Exhibitions</p>
                <p className="event_con_cop exhibition">  We take your expo vision and turn it into a reality, 
          from initial concept and design to flawless execution.
           We have a proven track record of delivering 
           mega expos that achieve outstanding results.</p>
            </div>
        </div>
    </div>

    <MDBContainer className="bg-black" fluid>

        {/* Second Row with Single Image */}
        <MDBRow className="card_row">
            <MDBCol md="12" className="mb-4 d-flex justify-content-center">
                <h2 className="exhi_text"><center>Upcomming Exhibition</center></h2>
                <div className="image-container ">
                    <img src={upcomming} alt="Company Annual Event" className="image1 exh_img"/>
                    {/* <p className="image-title">STANDY ROLLUP STANDY</p> */}
                </div>
            </MDBCol>
        </MDBRow>

        <MDBBtn outline color="info" className="back_button"> <Link to="/portfolio">
                         Back To Portfolio</Link></MDBBtn>
    </MDBContainer>
    </>
   );
}
