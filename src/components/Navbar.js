import React from 'react'
import "./navbar.css";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_left'>
                <h3>LARQ</h3>
            </div>
            <div className='navbar_right'>
                <ul>
                    <li style={{color: "black"}}>Home</li>
                    <li>About</li>
                    <li>Bottles</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className='login-btn' style={{color: "black"}}>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar