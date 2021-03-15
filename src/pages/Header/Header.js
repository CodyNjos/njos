import React from 'react'
import '../Styles/Header.css'

import HeadShot from '../Header/Images/Cody_2.png'

import Beetle from '../Header/Images/Lamp.png'
function Header() {
    return ( 
        <div className="header">

            <div className="descriptors">
            <div>
                <h1 className="hi">Hi, I'm Cody Njos.</h1>
                <h3 className="me">I'm a Full Stack Developer Based in Fargo, North Dakota.</h3>
            </div>
            </div>
             <div className="portraitWrap">
                <img className="portrait" src={HeadShot} alt="borked" />
            </div>
           
           <img className="beetle" src ={Beetle} alt = ""/>
        </div>
    )
}
export default Header