import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to='/'></Link>
        {/* <Link to='/About'>About</Link> */}
        <Link to='/Product'>Product</Link>
        {/* <Link to='/Product/:id'>ProductItem</Link> */}
    </div>
  )
}

export default Navbar