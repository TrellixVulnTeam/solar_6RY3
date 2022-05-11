import React from 'react'
import {Link} from 'react-router-dom';
import Login from './Login/Login'


function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/login" style={{textDecoration:"none"}}>
            <span>Login</span>
        </Link>
        <Link to="/" style={{textDecoration:"none"}}>
        <div className="navbar-title">
        <h1>Solar</h1>
        </div>
        </Link>
        
    </div>
  )
}

export default Navbar