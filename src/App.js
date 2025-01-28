import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // MDB UI Kit for styling
import Nav from './components/Nav'; // Import Nav component
import Home from './components/Home'; // Import Home component
import About from './components/About';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from  './components/Footer';
import OutdoorMedia from './components/OutdoorMedia';
import Event from './components/Event';
import ScrollToTop from './components/ScrollToTop'; 
import Corporate_event from './components/Corporate_event';
import Social_event from './components/Social_event';
import Retail_chain from './components/Retail_chain';
import Indoor from './components/Indoor';
import Outdoor from './components/Outdoor';


function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app with BrowserRouter here */}
      <Nav />  {/* Display the Navbar */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} /> {/* Define route for home page */}
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/outdoor_media" element={<OutdoorMedia/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/corporate_event" element={<Corporate_event/>} />
        <Route path="/social_event" element={<Social_event/>} />
        <Route path="/social_event" element={<Social_event/>} />
        <Route path="/retail_chain" element={<Retail_chain />} />
        <Route path='/indoor' element={<Indoor/>} />
        <Route path='/outdoor' element={<Outdoor/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
