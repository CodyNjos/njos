import React from 'react'
import '../Styles/Header.css'
import { Button } from "@material-ui/core"
import GitLogo from '../Header/Images/git.icon.png'
import LinkInLogo from '../Header/Images/linkedin.icon.png'
import HeadShot from '../Header/Images/Cody_2.png'
import Email from '../Header/Images/email.icon.png'
function Header() {
    return (
        <div className="header">
            <div className="descriptors">
            <div>
                <h1 className= "hi">Hi,</h1>
                <h2>I'm Cody Njos</h2>
                {/* <h2>Software Developer</h2>
                <h2>Tech Enthusiest</h2>
                <h2>Cat Dad</h2> */}
            </div>
            </div>
            <div className="links">
                <a href="https://github.com/CodyNjos" target="_blank">
                <img className = "logoLink" src={GitLogo} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/njos/" target="_blank">
                <img className = "logoLink" src ={LinkInLogo} alt="linkedin"/>
                </a>
                <a href="mailto:cody.njos@live.com" target="_blank">
                <img className = "logoLink" src ={Email} alt="email"/> 
                </a>
            </div>
            <div className="portrait">
                <img className="portrait" src={HeadShot} alt="borked" />
            </div>
        </div>
    )
}
export default Header