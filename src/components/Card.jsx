import React from 'react';

const Card = props => {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.image} alt={props.title} style={{height: "20rem", width: "18rem"}}/>
            <div className="card-body">
                <h5 className="card-title">props.title</h5>
                <Link to='/' className="btn btn-primary m-1">View Recipe</Link>
            </div>
        </div>
    );
}

export default Card;