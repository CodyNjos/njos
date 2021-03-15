import React from 'react'
import "../Styles/Body.css"
import Fragment from "./Images/fragment.icon.png"
function Body(params) {
    return(
        <>
        <div className = "main">
            <div className="intro">
            <h2>Intro About Me Filler</h2>
            <p className="introBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi felis, cursus sed suscipit et, consequat nec nibh. Donec libero lorem, 
                rhoncus id sollicitudin in, elementum at lacus. Nullam malesuada ullamcorper vehicula. Morbi ut consectetur enim. Quisque ac semper metus. 
                Proin ac elit vel turpis lacinia semper non quis turpis. Pellentesque orci lectus, rhoncus in condimentum a, 
                blandit quis dolor. Duis nec scelerisque nunc, sit amet eleifend ex.</p>
            </div>
        </div>
        <div className="contentWrap">
        <div className ="content">
        <img className="iconHead" alt = "" src={Fragment}/>
        <h3> Full Stack Developer</h3>
        </div>
        </div>
        </>
    )
}
export default Body