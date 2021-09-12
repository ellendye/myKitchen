import React from 'react';
import { Link } from '@reach/router';

const Navbar = props => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to='/' className="navbar-brand" >MyKitchen</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/browse' className="nav-item nav-link">Recipes</Link>
                    <Link to='/wine' className="nav-item nav-link">Wine</Link>
                    <Link to='/mymenu' className="nav-item nav-link">myMenu</Link>
                </div>
            </div>
        </div>
    </nav>
            )
}

export default Navbar;