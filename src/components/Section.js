import React from 'react'
import "./section.css"
import Cap from "../images/cap.png"
import Bottle from "../images/bottle.png"
const Section = () => {
    return (
        <>
            <div className='cap_container'>
                <img className="cap" src={Cap} alt="" />
            </div>
            <div className='box'>

            </div>
            <div className='info_container'>
                <h3>Self Cleaning bottle</h3>
                <h3>In 60 Seconds</h3>
                <p>Hit refresh with the intelligently clean bottle built for adventure.</p>
                <button>KNOW MORE</button>
            </div>
            <div className='bottle_container'>
                <img className="bottle" src={Bottle} alt="" />
            </div>
        </>
    )
}

export default Section