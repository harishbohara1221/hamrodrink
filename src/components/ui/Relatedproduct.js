import React from 'react';
import ProductCard from './ProductCard';

const Relatedproduct = () => {
  return (
    <div className='Relatedproduct'>
        <h2>Relatedproduct</h2>
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
  )
}

export default Relatedproduct;