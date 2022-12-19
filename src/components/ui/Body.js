import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Serviceoption from "./Serviceoption";


const Body = () => {
    
  return (
    <div className='Body'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='Left'>
                        <a href=' '><img className='Upperimg' src="./images/1.jpg" alt="" /></a>
                        <a href=' '><img src="./images/2.png" alt="" /></a>
                    </div>
                </div>

                <div className='col-md-8 '>
                    <div className='Right'>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img className="d-block w-100" src="./images/slider.jpg" alt="First slide"/>
                                <Carousel.Caption>
                                <h3>Our services</h3>
                                <p>Water taken in moderation cannot hurt anybody.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img className="d-block w-100" src="./images/slider1.jpg" alt="Second slide"/>
                                <Carousel.Caption>
                                <h3>Our provider</h3>
                                <p>Drink never made a man better, but it made many a man think he was better.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="./images/slider2.jpg" alt="Third slide"/>
                                <Carousel.Caption>
                                <h3>Feel As yours</h3>
                                <p>Even though a number of people have tried, no one has yet found a way to drink for a living</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className='services' >
                    <Serviceoption/>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Body;