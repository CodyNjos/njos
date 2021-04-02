import React from 'react'
import "../Styles/Body.css"
import Fragment from "./Images/fragment.icon.png"
import GitLogo from '../Header/Images/git.icon.png'
import LinkInLogo from '../Header/Images/linkedin.icon.png'
import Email from '../Header/Images/email.icon.png'
function Body() {
    return (
        <>
            <div className="main">
                <div className="intro">
                    <h2 className="introHead">A Little About Me</h2>
                    <p className="introBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi felis, cursus sed suscipit et, consequat nec nibh. Donec libero lorem,
                    rhoncus id sollicitudin in, elementum at lacus. Nullam malesuada ullamcorper vehicula. Morbi ut consectetur enim. Quisque ac semper metus.
                    Proin ac elit vel turpis lacinia semper non quis turpis. Pellentesque orci lectus, rhoncus in condimentum a,
                blandit quis dolor. Duis nec scelerisque nunc, sit amet eleifend ex.</p>
                </div>
                <div className="links">
                    <a href="https://github.com/CodyNjos" target="_blank" rel="noreferrer" >
                        <img className="logoLink" src={GitLogo} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/njos/" target="_blank" rel="noreferrer">
                        <img className="logoLink" src={LinkInLogo} alt="linkedin" />
                    </a>
                    <a href="mailto:cody.njos@live.com" target="_blank" rel="noreferrer">
                        <img className="logoLink" src={Email} alt="email" />
                    </a>
                </div>
            </div>
            <div className="contentWrap">
                <div className="content">
                    <img className="iconHead" alt="" src={Fragment} />
                    <h2 className="introHead"> Full Stack Developer</h2>
                    <h2>
                        Tools Ive Used
                    </h2>
                    <p className="introBody"> React JS</p>
                    <p className="introBody">Node</p>
                    <p className="introBody">Express</p>
                    <p className="introBody">Postgres</p>
                    <p className="introBody">Material UI</p>
                    <p className="introBody">GitHub</p>
                </div>
            </div>
            <h2 className="introHead">Some of My Recent Work</h2>
            <div className="work">
                <div className="gameExchange" onClick={() => window.open('https://thegameexchange.herokuapp.com','_newtab')} ><p className="workText">The Game Exchange</p></div>
                <div className="toDoList" onClick={() => window.open('https://sleepy-bayou-23204.herokuapp.com/','_newtab')}><p className="workText">To Do List</p></div>
                {/* <div className="projectCard">IMAGE + DESCRIPTION OF CLIENT PROJECT</div> */}
            </div>
        </>
    )
}
export default Body