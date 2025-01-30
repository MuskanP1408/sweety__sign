import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn,MDBIcon,
    MDBCardBody

 } from 'mdb-react-ui-kit';

import background from './images/back.jpg';
import dealer from './images/dealer_meet.jpg';
import product from './images/product_launch.jpg';
import vision from './images/vision.jpg';
import annual from './images/company_anuual.jpg';
import Conference from './images/Conference_Architect_Association.jpg';
import Annul_event from './images/Annul_event_(ITC).jpg';
import Product_launch from './images/Product_launch_Event_( Hero_moto_Corp).jpg'
import Airtel from './images/Product_launch_Event_( Airtel ).jpg'

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

   <MDBContainer className="bg-black" fluid>
           <MDBRow className="card_row">
               {/* Image 1 */}
               <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                   <div className="image-container">
                       <img src={dealer} alt="Dealer Meet" className="image1"/>
                       <p className="image-title">Confrence Event ( IllD )</p>
                   </div>
               </MDBCol>
   
               {/* Image 2 */}
               <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                   <div className="image-container">
                       <img src={product} alt="Product Launch Event" className="image1"/>
                       <p className="image-title">Product launch ( GALA Dinner)</p>
                   </div>
               </MDBCol>
   
               {/* Image 3 */}
               <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                   <div className="image-container">
                       <img src={vision} alt="Vision Launch Event" className="image1"/>
                       <p className="image-title">Vision Launch Event</p>
                   </div>
               </MDBCol>
           </MDBRow>


{/* //////////////////////////////////////////////////////////////////////// */}

<MDBRow className="card_row">
               {/* Image 1 */}
               <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                   <div className="image-container">
                       <img src={Conference} alt="Dealer Meet" className="image1"/>
                       <p className="image-title">Conference Architect Association</p>
                   </div>
               </MDBCol>
   
               {/* Image 2 */}
               <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                   <div className="image-container">
                       <img src={Annul_event} alt="Product Launch Event" className="image1"/>
                       <p className="image-title">Annul event (ITC)</p>
                   </div>
               </MDBCol>
   
               {/* Image 3 */}
               <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                   <div className="image-container">
                       <img src={Product_launch} alt="Vision Launch Event" className="image1"/>
                       <p className="image-title">Product launch Event ( Hero_moto_Corp)</p>
                   </div>
               </MDBCol>
           </MDBRow>

{/* /////////////////////////////////////////////////////////////////////////////// */}

   
           {/* Second Row with Single Image */}
           <MDBRow className="card_row">
               <MDBCol md="12" className="mb-4 d-flex justify-content-center">
                   <div className="image-container">
                       <img src={annual} alt="Company Annual Event" className="image1"/>
                       <p className="image-title">Annual event 
                       DM University</p>
                   </div>
               </MDBCol>
           </MDBRow>
        
        
           <MDBBtn outline color="info" className="back_button event_page"> <Link to="/event">
                  Back To Event Page</Link>
                </MDBBtn>
    </MDBContainer>
    </>
   );
}
