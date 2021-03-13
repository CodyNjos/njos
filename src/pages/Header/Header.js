import React from 'react'
import '../Styles/Header.css'
import {Button} from "@material-ui/core"
function Header() {
    return(
        <div className = "header">
        <div className = "desciptors">
        <h1>Hi, I'm Cody Njos</h1><br/>
        <h2>Software Developer</h2>
        <h2>Tech Enthusiest</h2>
        <h2>Cat Dad</h2>
        </div>
        <div className= "portrait">
        <img className ="portrait" src = "https://i.imgur.com/vSh2qcj.jpg" alt="borked"/>
        </div>
        </div>
    )
}
export default Header