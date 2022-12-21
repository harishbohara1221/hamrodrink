import React from 'react';
import ProductCard from './ProductCard';


const Tabwine = () => {
  return (
    
    <div className='Ourproduct'>
        <div className='Tabwine'>
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

export default Tabwine;