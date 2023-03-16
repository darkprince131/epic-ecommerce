import React from 'react'
import './Hero.css'
//import ImgBg from '../../images/banner1.png'

const Hero = () => {
    return (
        <>
        <div className = 'herooverlay'></div>
        <div className = 'herocontainer'>
            
            <div className = 'herocontent' >
                <div className = 'heroitems'>
                    <div className = 'heroh1'>Greatest Hero Ever</div>
                    <div className = 'herop'>Always there for you</div>
                    <div className = 'herobtn'> Shop Now</div>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Hero
