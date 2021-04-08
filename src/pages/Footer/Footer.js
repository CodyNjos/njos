import React from 'react'
import '../Styles/Footer.css'
function Footer() {
    return (
        <div className="theFoot">
            <p>© Cody Njos {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer