import React from 'react'
import '../Styles/Header.css'
//import GitLogo from '../Header/Images/git.icon.png'
import LinkInLogo from '../Header/Images/linkedin.icon.png'
import HeadShot from '../Header/Images/Cody_2.png'
import Email from '../Header/Images/email.icon.png'
function Header() {
    const GitLogo = require('../Header/Images/git.icon.png-')
    return (
        <div className="header">
            <div className="descriptors">
            <div>
                <h1>Hi, Im Cody Njos</h1>
                <h3>I'm a Full Stack Developer Based in Fargo, North Dakota.</h3>
            </div>
            </div>
             <div className="portraitWrap">
                <img className="portrait" src={HeadShot} alt="borked" />
            </div>
            <div className="links">
                <a href="https://github.com/CodyNjos" target="_blank" rel="noreferrer" >
                <img className = "logoLink" src={GitLogo} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/njos/" target="_blank" rel="noreferrer">
                <img className = "logoLink" src ={LinkInLogo} alt="linkedin"/>
                </a>
                <a href="mailto:cody.njos@live.com" target="_blank" rel="noreferrer">
                <img className = "logoLink" src ={Email} alt="email"/> 
                </a>
            </div>
           <h1>A COOL AND FUN YELLOW GRAPHIC</h1>
        </div>
    )
}
export default Header