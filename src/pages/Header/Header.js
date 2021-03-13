import React from 'react'
import '../Styles/Header.css'
import {Button} from "@material-ui/core"
function Header() {
    return(
        <div className = "header">
        <h2>Hi, I'm Cody Njos</h2>
        <h3>Software Developer</h3>
        <h3>Game Enthusiest</h3>
        <h3>Cat Dad</h3>
        <img src = "../src/images/Cody_2.png"/>
        </div>
    )
}
export default Header