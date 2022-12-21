import React from 'react';
import ProductCard from './ProductCard';

const Tabbeer = () => {
  return (
    <div className='Ourproduct'>
        <div className='Tabbeer'>
            <div className='container'>
                
                <div className='row'>
                    <div  className='col-md-3'>
                        <ProductCard/>
                    </div>

                    <div  className='col-md-3'>
                        <ProductCard/>    
                    </div>

                    <div  className='col-md-3'>
                        <ProductCard/>
                    </div>

                    <div  className='col-md-3'>
                        <ProductCard/>
                    </div> 

                </div>


            </div>
        </div>
    </div>
  )
}

export default Tabbeer;