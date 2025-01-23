import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import nonlite from './images/nonlite.png';
import image from './images/image3.jpg';
import flex_banner from './images/flex_banner.png';
import glow_sign from './images/GLOW_SIGN.png';
import sign_board from './images/sign_board.png'
import './Outdoor.css'

export default function OutdoorMedia() {
  const [flyIn, setFlyIn] = useState(false);

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
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={image} className="w-100" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0 our_client">Outdoor_Media_Planing</p><br/>
                <p className="mini_content2">sweety_sign Outdoor is your one-stop shop for outdoor advertising,
                     including billboards, newspaper ads, and cinema/TV/radio commercials. Their services include
                      understanding your needs, location research, competitor analysis, proposal creation, 
                      advertisement design, permitting, production, quality control, installation, maintenance,
                       and post-campaign analysis.</p>
            </div>
        </div>
    </div>


     <MDBContainer fluid className='home-container'>
            <MDBRow className="row1">
              <MDBRow className="custom-card img_con">
              <MDBCol md="6" >
                <p className='heading_text'>Product</p>
                <h1> NONLIT SIGN BOARD</h1>
                <div className='para1'> 
                A Non-lit signboard refers to a signboard that does not have built-in lighting or 
                illumination.These are commonly used for various purposes such as business 
                signage, informational displays, or directional signs.
                  <br/><br/>
                 <b> Material:- </b>ACP, MS, SS, ACRYLIC, PVC
                  <br/><br/>
                  <b>Thickness:-</b> ACP- 3mm-4mm, Acrylic-3mm-10mm, 
                  PVC foam sheet-5mm-10mm
                 </div></MDBCol>

<MDBCol md="6" className="img1_effect">
                <MDBCardImage
                  id="bulb-image"
                  src={nonlite}
                  className={`bulb_image ${flyIn ? 'fly-in' : ''}`}
                  position='bottom'
                />
              </MDBCol>
            </MDBRow>  
            </MDBRow>
            
          

            <MDBRow className="row2">
            <MDBRow className="custom-card img_con">
              <MDBCol md="6">
                <p className='heading_text'>Product</p>
                <h1> FLEX BANNER</h1>
                <div className='para1'> 
                A flex banner is a popular and versatile form of signage used for advertising, 
                promotional activities, and display purposes.
                  <br/>
                  <b>Type:</b><br></br>
                 <b> Frontlit Flex:</b>For standard display banners.
                  <br/>
                  <b>Backlit Flex:</b>For illuminated signage (lightbox applications).
                 
                 <br/>
                  <b>Blockout Flex:</b>For double-sided printing.
                  <br/>
                  <b>Printing Technology:</b>Solvent,eco-solvent,UV,or latex printing.
                  <br/>
                  <b>Finish:</b>Glossy or matte, depending on visual preference 
                  </div>
              </MDBCol>
    
              <MDBCol md="6" className="img1_effect">
                <MDBCardImage
                  id="bulb-image"
                  src={flex_banner}
                  className={`bulb_image _image ${flyIn ? 'fly-in' : ''}`}
                  position='bottom'
                />
                
              </MDBCol>
              </MDBRow>
            </MDBRow>





            {/* ///////////////////////////////////////////////////////////// */}

            <MDBRow className="row_1">
            <MDBRow className="custom-card img_con">
              <MDBCol md="6">
                <p className='heading_text'>Product</p>
                <h1>GLOW SIGN BOARD</h1>
                <div className='para1'> 
                A backlit board is an advertising or informational display illuminated from behind 
                to enhance visibility, especially in low-light conditions.
                  <br/><br/>

                 <b>  Frame Material:</b>MS (Mild Steel), SS (Stainless Steel), or aluminum.
                  <br/>
                  <b>Thickness:-</b> 1" x 1" or 1.5" x 1.5" tubes for durability.
                  <br/>
                  <b>Cladding Material:</b>  ACP (Aluminum Composite Panel) or 
                  PVC sheets for back panel or side finishing.
                  <br/>
                  <b> Front Face Material:Options:</b> Acrylic (3–5 mm thick, preferred).<br/>
 Polycarbonate (preferred for high impact resistance).<br/>
 Flex material (backlit flex for economical options).
                  <br/>
                  <b> Lighting:</b> Tubelight, LED module
                  <br/>
                  <b>Power supply:</b> SMPS,12V DC for LE
                
                
                 </div>
              </MDBCol>
    
              <MDBCol md="6" className="img2_effect">
                <MDBCardImage
                  id="bulb-image"
                  src={glow_sign}
                  className={`bulb_image ${flyIn ? 'fly-in' : ''}`}
                  position='bottom'
                />
              </MDBCol>
            </MDBRow>
            </MDBRow>
            
            {/* ///////////////////////////////////////////////////////////// */}

            <MDBRow className="row2">
            <MDBRow className="custom-card img_con">
              <MDBCol md="6">
                <p className='heading_text'>Product</p>
                <h1> ACRYLIC SIGN BOARD</h1>
                <div className='para1'> 
                An acrylic sign board is a popular type of signage made from acrylic
 (PMMA, polymethyl methacrylate) material,known for its clarity, durability, and 
versatility.
                  <br/>

                  <b>Acrylic Type:</b>Cast Acrylic, Extruded Acrylic<br/>
                 <b> Lighting Types:</b>LED Backlighting: Even illumination for translucent acrylic.
                  <br/>
                  <b>Edge-Lit LED Strips:</b>Subtle glow effect around the edges.
                 <br/>
                  <b>Front-Lit LEDs:</b> Mounted in front for vibrant illumination.
                  <br/>
                  <b>Printing Technology:</b> Common options: 3 mm, 5 mm, 8 mm, or 10 mm. 
                  For large signboards or outdoor use, a minimum of 5 mm is recommended.
                  <br/>
                  <b>Finish:</b> Glossy: High shine for modern aesthetics. 
                  <br/>
                  <b> Matte:</b> Non-reflective surface, suitable for professional or subdued settings.
                  <br/>
                  <b> Frosted:</b>  Semi-transparent, used for decorative or privacy-enhancing signage.
                  <br/>
                  <b>Customization:</b>  Frosted or clear overlays for added depth.<br/>
                  Multi-layered designs with 3D lettering or logos.
                  <br/>
                  <b>Edge-Lit LED Strips:</b> Subtle glow effect around the edges.
                  <br/>
                  <b>Front-Lit LEDs:</b> Mounted in front for vibrant illumination.
                  <br/>
                  <b>Color Options:</b>  White, warm white, or RGB (color-changing LEDs)
                  Printing and Graphics
                  <br/>
                  <b>UV Printing:</b>High-quality, weather-resistant prints directly on the acrylic surface.
                  <br/>
                  <b>Vinyl Overlay: </b> For cut letters, logos, or decorative elements.
                  <br/>
                  <b>Laser Engraving:</b>Permanent, precise etching for text or designs.
                  </div>
              </MDBCol>
    
              <MDBCol md="6" className="img3_effect">
                <MDBCardImage
                  id="bulb-image"
                  src={sign_board}
                  className={`bulb_image _image ${flyIn ? 'fly-in' : ''}`}
                  position='bottom'
                />
              </MDBCol>
            </MDBRow>
            </MDBRow>
            
            
            
            
            </MDBContainer>

   
    </>
   );
}
