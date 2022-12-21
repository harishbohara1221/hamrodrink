import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = () => {
  return (
     <div className='cover'>
        <Link to="/productdetail">
          <img src='./images/beer.jpg' alt=''/>
        </Link>
        <Link to="/productdetail">
          <div className='Offerdetail'>
              <h3>Tuborg Strong</h3>
              <span>Rs.6000</span>
          </div>
        </Link>
      </div>
  )
}

export default ProductCard