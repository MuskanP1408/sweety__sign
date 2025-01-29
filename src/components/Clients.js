import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn,
    MDBCardBody

 } from 'mdb-react-ui-kit';
import image3 from './images/image3.jpg';  // Background image
import kerla from './images/kerla.jpg';  // Client images
import powergrid from './images/powergrid.jpg';
import KANDALAPORT from './images/KANDALAPORT.png';
import bod from './images/bod.png';
import indian from './images/indian.jpg';
import uco from './images/uco.jpg'
import vpp from './images/vpp.jpg';
import frizb from './images/frizb.png';
import indira from './images/indira.jpg';
import vijay from './images/vijay.jpg';
import diamond from './images/diamond.jpg';
import pcj from './images/pcj.webp';
import akshar from './images/akshar.jpg';
import YOUNITED from './images/younited.png';
import fatboy from './images/fatboy.png';
import intelect from './images/intellect.jpg';
import itc from './images/itc.png';
import rollers from './images/rollers.jpeg';
import idfc from './images/idfc.png';
import hive from './images/hive.png';
import apollo from './images/APOLLO.jpg';
import varuna from './images/VARUNA.jpg';
import sis from './images/SIS.jpg';
import kirloska from './images/KIRLOSKA.png'

import './Portfolio.css';  

export default function Clients() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={image3} className="w-100" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client">Our Clients</p><br/>
                <p className="mini_content">Thousands of clients across hundreds of industries. Take a look for yourself.</p>
            </div>
        </div>
    </div>

    <MDBContainer className=" bg-black" fluid>
        <MDBRow className="card_row"> 
        <p className="heading_text clients_content">OUR VALUABLE GOVERNMENT CLINTS
        </p>
            {/* Card 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={kerla} alt="Card image 1" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title">CENTRAL UNIVERSITY
                        OF KERELA</MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={powergrid} alt="Card image 2" position="top" className="cardimage" />
                    <MDBCardBody>
                        <MDBCardTitle className="title">POWERGRID</MDBCardTitle>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={KANDALAPORT} alt="Card image 3" position="top" className="cardimage" />
                    <MDBCardBody>
                        <MDBCardTitle className="title"> KANDALA PORT</MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>


        <MDBRow className="card_row2">
            {/* Card 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={bod} alt="Card image 1" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title"> BANK OF BARODA</MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={indian} alt="Card image 2" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title"> INDIAN BANK</MDBCardTitle>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={uco} alt="Card image 3" position="top" className="cardimage" />
                    <MDBCardBody>
                        <MDBCardTitle className="title"> UCO BANK </MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

    {/* ///////////////////////////////////////////// */}
    <MDBRow className="card_row2">
        <p className="heading_text clients_content">PRIVATE CLIENTS (Authorised Vendor)
        </p>
            {/* Card 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={intelect} alt="Card image 1" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title">  INTELLECT </MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={itc} alt="Card image 2" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title">  ITC LIMITED </MDBCardTitle>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={rollers} alt="Card image 3" position="top" className="cardimage" />
                    <MDBCardBody>
                        <MDBCardTitle className="title"> HMSU ROLLERS </MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>


        <MDBRow className="card_row2">
        
            {/* Card 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={idfc} alt="Card image 1" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title">  IDFC FIRST BANK </MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={hive} alt="Card image 2" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title"> HIVE </MDBCardTitle>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={apollo} alt="Card image 3" position="top" className="cardimage" />
                    <MDBCardBody>
                        <MDBCardTitle className="title"> APOLLO </MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>


        <MDBRow className="card_row2">
        
        {/* Card 1 */}
        <MDBCol md="4" className="mb-4 d-flex justify-content-center">
            <MDBCard className="custom-card">
                <MDBCardImage src={varuna} alt="Card image 1" position="top" className="cardimage"/>
                <MDBCardBody>
                    <MDBCardTitle className="title">VARUNA ELECTRIC</MDBCardTitle>
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

        {/* Card 2 */}
        <MDBCol md="4" className="mb-4 d-flex justify-content-center">
            <MDBCard className="custom-card">
                <MDBCardImage src={sis} alt="Card image 2" position="top" className="cardimage"/>
                <MDBCardBody>
                    <MDBCardTitle className="title"> SIS
                    GROUP ENTERPRISES </MDBCardTitle>
                    
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

        {/* Card 3 */}
        <MDBCol md="4" className="mb-4 d-flex justify-content-center">
            <MDBCard className="custom-card">
                <MDBCardImage src={kirloska} alt="Card image 3" position="top" className="cardimage" />
                <MDBCardBody>
                    <MDBCardTitle className="title">  KIRLOSKAR </MDBCardTitle>
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>



    {/* /////////////////////////////////////////////////////// */}

    <MDBRow className="card_row2">
        <p className="heading_text clients_content">GUJARAT BASED  (Authorised Supplier) 
        </p>
            {/* Card 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={vpp} alt="Card image 1" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title">VIMLACHAL 
                        PRINT&PACK PVT.LTD</MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={frizb} alt="Card image 2" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title"> FRIZBEE </MDBCardTitle>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={indira} alt="Card image 3" position="top" className="cardimage" />
                    <MDBCardBody>
                        <MDBCardTitle className="title">INDIRA IVF </MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>


        <MDBRow className="card_row2">
        
            {/* Card 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={vijay} alt="Card image 1" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title">VIJAY</MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={diamond} alt="Card image 2" position="top" className="cardimage"/>
                    <MDBCardBody>
                        <MDBCardTitle className="title">  DIAMOND </MDBCardTitle>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={pcj} alt="Card image 3" position="top" className="cardimage" />
                    <MDBCardBody>
                        <MDBCardTitle className="title">  PC JEWELLER </MDBCardTitle>
                       
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>


        <MDBRow className="card_row2">
        
        {/* Card 1 */}
        <MDBCol md="4" className="mb-4 d-flex justify-content-center">
            <MDBCard className="custom-card">
                <MDBCardImage src={akshar} alt="Card image 1" position="top" className="cardimage"/>
                <MDBCardBody>
                    <MDBCardTitle className="title">AKSAR TRAVELS</MDBCardTitle>
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

        {/* Card 2 */}
        <MDBCol md="4" className="mb-4 d-flex justify-content-center">
            <MDBCard className="custom-card">
                <MDBCardImage src={YOUNITED} alt="Card image 2" position="top" className="cardimage"/>
                <MDBCardBody>
                    <MDBCardTitle className="title">   YOUNITED </MDBCardTitle>
                    
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

        {/* Card 3 */}
        <MDBCol md="4" className="mb-4 d-flex justify-content-center">
            <MDBCard className="custom-card">
                <MDBCardImage src={fatboy} alt="Card image 3" position="top" className="cardimage" />
                <MDBCardBody>
                    <MDBCardTitle className="title">  FAT BOYS </MDBCardTitle>
                   
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>


        

    </MDBContainer>
    </>
   );
}
