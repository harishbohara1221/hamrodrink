import React from 'react'
import { Link } from 'react-router-dom'

const OfferCard = () => {
  return (
    <div className='offerbox'>
      <Link to="/productdetail">
          <img src='./images/offerimg.jpg' alt=''/>
      </Link>
      <Link to="/productdetail">
          <div className='offerdetail'>
            <h3>Title goes here</h3>
            <del>Rs.1800</del> <br></br>
            <span>Rs.1500</span>
          </div>
      </Link>
    </div>
  )
}

export default OfferCard