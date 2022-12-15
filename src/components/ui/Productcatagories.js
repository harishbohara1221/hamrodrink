import React from 'react'

const Productcatagories = () => {
  return (
    <div className='Catagories'>
        <div className='Productcatagories'>
            <div className='Servicehead'>
                <h1>Product Category</h1>
                <p>Explore Our Amazing Selection</p>
            </div>
        </div>
        <div className='Catagory'>
            <div className='container'>
                <div className='Catagoryitems'>
                    <div className='item'>
                        <div className='itemback'>
                            <img src="./images/whiskey.png" alt="" />
                            <p>Whiskey <span>(10)</span></p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemback'>
                            <img src="./images/wine.png" alt="" />
                            <p>Wine <span>(20)</span></p>
                        </div>
                    </div>    
                    <div className='item'>
                        <div className='itemback'>
                            <img src="./images/beer.png" alt="" />
                            <p>Beer <span>(15)</span></p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemback'>
                            <img src="./images/whiskey.png" alt="" />
                            <p>Whiskey <span>(10)</span></p>
                        </div>
                    </div>    
                    <div className='item'>
                        <div className='itemback'>
                            <img src="./images/wine.png" alt="" />
                            <p>Wine <span>(20)</span></p>
                        </div>
                    </div>  
                    <div className='item'>
                        <div className='itemback'>
                            <img src="./images/beer.png" alt="" />
                            <p>Beer <span>(15)</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Productcatagories;