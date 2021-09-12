import React from 'react';

const Footer = props => {
    const background = {
        backgroundImage: "url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg')", 
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '40vh',
        width: "100vw",
        position: 'fixed',
        bottom: '0', 
        opacity: '0.5'
    }
    return (
    <footer className="footer">
        <div style={background}></div>
    </footer>
            )
}

export default Footer;