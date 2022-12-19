import React from 'react';
import Relatedproduct from './Relatedproduct';


const Single = () => {
  return (
    <div className='Single'>
       <div className='container'>
            <ul class="breadcrumb">
              <li><a href=" ">Home</a></li>
              <li><a href=" ">Ourproduct</a></li>
              <li>Productdetail</li>
            </ul>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='Singlecover'>
                        <img src='./images/wishkey.jpg' alt=' '/>
                    </div>
                    
                </div>
                <div className='col-md-6'>
                  <div className='Singledetail'>
                      <h2>Whiskey 750ML</h2>
                      <h4>Volume: <span>750ML</span></h4>
                      <h4>Brand: <span>Wishkey</span></h4>
                      <h4>Category: <span>Old Durbar</span></h4>
                      <h4>Country: <span>Nepal</span></h4>
                      <h4>Alcohol: <span>40%</span></h4>
                      <h5>Details:</h5>
                      <p>Distilled from fine French grapes, Ciroc Vodka is a prestigious ultra-premium vodka
                        that is perfect for all stylish occasions. Crafted using centuries old winemaking techniques,
                        Ciroc is exceptionally smooth and can be enjoyed sipped for in many premium cocktails.
                        </p>
                        
                    </div> 
                </div>
                <div className='col-md-3'>
                    <div className='Singlecart'>
                      <h1>Rs.6000</h1> 
                      
                      <div class="input-group">
                          <span class="input-group-btn">
                            <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                            <span class="glyphicon glyphicon-minus">-</span>
                            </button>
                          </span>
                          <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10"></input>
                          <span class="input-group-btn">
                            <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="plus" data-field="quant[1]">
                            <span class="glyphicon glyphicon-plus">+</span>
                            </button>
                          </span>
                      </div>
                      <button className='Addcart' type="button">Add to Cart</button>
                    </div>

                </div>

            </div>
            
            <div>
              <Relatedproduct/>
            </div>


        </div> 
    </div>
  )
}

export default Single;