import React from 'react';
import { Link } from '@reach/router';


const Home = props => {
    const divStyle = {
        backgroundColor: "rgba(250, 235, 215, 0.80)"
    }
    console.log(props)
    
    
    return (
        <>
            <div className="login d-flex justify-content-center align-items-center">
                <div className='card w-50 h-25' style= {divStyle}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <h5 className="card-title display-3 text-center">Welcome to MyKitchen</h5>
                        <p className="card-text">Browse our delicious recipes and wines!</p>
                        <div>
                            <Link to="/wine" className="btn btn-outline-success m-1">Wine it up</Link>
                            <Link to="/browse" className="btn btn-outline-success m-1">Browse Food</Link>
                            <Link to="/mymenu" className="btn btn-outline-success m-1">Plan my meals for me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;