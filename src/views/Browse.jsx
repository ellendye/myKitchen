import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import SearchFood from '../components/SearchFood'


const Browse = props => {
    const [recipes, setRecipes] = useState(null)
    const apiKey = 'apiKey=2bea71a0484e40899bc751b09c250c1e'

    
    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/random?" + apiKey)
            .then(res => { setRecipes(res.data) })
    }, [])
    if (recipes){
        var background = {
            backgroundImage: `url(${recipes.recipes[0].image})`,
            height: '450px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            margin: '2em',
            width: '60vw'
        }
    }

    return (
        <>
            <SearchFood/>
            {recipes ?
            <div className="container d-flex align-items-center justify-content-center">
                <div className="border rounded d-flex align-items-start justify-content-end" style={background}>
                    <div className="card h-50 w-50 align-items-center justify-content-center bg-white m-3">
                        <Link to={`/recipe/${recipes.recipes[0].id}`} className="btn btn-outline-dark w-50 m-2">Try out this recipe!</Link>
                        <p className="display-6">{recipes.recipes[0].title}</p>
                    </div>
                </div>
            </div>
            : ''}
        </>
    )
}

export default Browse;