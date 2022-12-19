import React from 'react';
import Navbar from "../components/ui/Navbar";
import Head from "../components/ui/Head";
import Footer from '../components/ui/Footer';


const Aboutus = () => {
  return (
    <div>
        <Head/>  
        <Navbar/>
        <div className='Aboutus'>
          <div className='container'>
              <div className='row'>
                  <h2>About us</h2>
                  <img src="./images/1.jpg" alt=" "/>
                  <p>Liquor World, incorporated on December 2013 is one of the biggest Online 
                  and Offline Liquor Store in Kathmandu, Nepal offers widest selection of 
                  genuine domestic and foreign wines, whiskies, beers, bourbons, scotches, 
                  tequilas, vodkas, rums, liqueurs, beverages, cigarettes, mixers and other 
                  spirits at best price. We provide Free Delivery inside ringroad of Kathmandu 
                  with purchase of Rs. 1500 and above, below Rs. 1500 and Outside Ringroad 
                  (Extra Rs. 150-250) will be added. Our delivery hours are from 10:30AM to 8:30PM
                  currently and we are 365 days open at your service. Store Opens: 10AM – 9PM.</p>
              </div>
              
          </div>
        </div>
        
        <Footer/>    
    </div>
  )
}

export default Aboutus;