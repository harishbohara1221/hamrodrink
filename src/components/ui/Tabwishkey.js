import React from 'react';

const Tabwishkey = () => {
  return (
    <div className='Ourproduct'>
        <div className='Tabwishkey'>
            <div className='container'>
                <div className='row'>
                    <div className='Ophead' >
                        <h1>Our Products</h1>
                        <p>The best selection of Whisky | <a href=" "><span>View all <i class="fa-solid fa-chevron-right"></i></span></a></p>
                    </div>  

                </div>
                <div  className='col-md-3'>
                        <div className='cover'>
                            <img src='./images/offerimg.jpg' alt=''/>
                            <div className='Offerdetail'>
                                <h3>Jim Beam</h3>
                                <span>Rs.6000</span>
                            </div>
                        </div>
                    </div>

                    <div  className='col-md-3'>
                        <div className='cover'>
                            <img src='./images/offerimg.jpg' alt=''/>
                            <div className='Offerdetail'>
                                <h3>Black Label Whiskey </h3>
                                <span>Rs.8000</span>
                            </div>
                        </div>    
                    </div>

                    <div  className='col-md-3'>
                        <div className='cover'>
                            <img src='./images/offerimg.jpg' alt=''/>
                            <div className='Offerdetail'>
                                <h3>Jim Beam</h3>
                                <span>Rs.10000</span>
                            </div>
                        </div>
                    </div>

                    <div  className='col-md-3'>
                        <div className='cover'>
                            <img src='./images/offerimg.jpg' alt=''/>
                            <div className='Offerdetail'>
                                <h3>Black Label Whiskey</h3>
                                <span>Rs.15000</span>
                            </div>
                        </div>
                    </div> 

            </div>
        </div>
    </div>
  )
}

export default Tabwishkey;