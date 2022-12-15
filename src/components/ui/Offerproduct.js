import React from 'react';



const Offerproduct = () => {
  return (
    <div className='Offerproduct'>
        <div className='container'>
          <div className='row'>
              
              <div className='Offershead' >
                <h1>Offer Product</h1>
                <p>HamroDrinks Products With Offers | <a href=" "><span>View all <i class="fa-solid fa-chevron-right"></i></span></a></p>
              </div>

            <div className='col-md-7'>
            <div className='row'>
              <div className='col-md-6 outbox'>
                    <div className='offerbox'>
                      <img src='./images/offerimg.jpg' alt=''/>
                      <div className='offerdetail'>
                        <h3>Title goes here</h3>
                        <del>Rs.1800</del> <br></br>
                        <span>Rs.1500</span>
                      </div>
                    </div>

                    <div className='offerbox'>
                      <img src='./images/1.jpg' alt=''/>
                      <div className='offerdetail'>
                        <h3>Title goes here</h3>
                        <del>Rs.1800</del> <br></br>
                        <span>Rs.1500</span>
                      </div>
                    </div>
              </div>
              <div className='col-md-6 outbox' >
                      <div className='offerbox'>
                        <img src='./images/1.jpg' alt=''/>
                        <div className='offerdetail'>
                          <h3>Title goes here</h3>
                          <del>Rs.1800</del> <br></br>
                          <span>Rs.1500</span>
                        </div>
                      </div>

                      <div className='offerbox'>
                        <img src='./images/offerimg.jpg' alt=''/>
                        <div className='offerdetail'>
                          <h3>Title goes here</h3>
                          <del>Rs.1800</del> <br></br>
                          <span>Rs.1500</span>
                        </div>
                      </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Offerproduct;