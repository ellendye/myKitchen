import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import SearchFood from '../components/SearchFood'

const SearchResults = props => {
    console.log(props.term)

    const [recipes, setRecipes] = useState(null)
    const apiKey = 'apiKey=2bea71a0484e40899bc751b09c250c1e'

    const results = []
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${props.term}&${apiKey}&number=40`)
            .then(res => { 
                setRecipes(res.data.results) })
    }, [])
    if(recipes){
        for (let i = 0; i < recipes.length; i++) {
            results.push([recipes[i].title, recipes[i].image, recipes[i].id])
        }}
    console.log(results)
    return (
        <>
        <SearchFood/>
        <div className="container text-center">
            <h4>Showing top results for <b>{props.term}</b> ..</h4>
            <div className="d-flex flex-wrap">
            {recipes ? 
            results.map((recipe, idx)=> {
            return([
            <div key={idx} className="card m-1" style={{width: '15rem'}}>
                <img className="card-img-top" src={recipe[1]} alt={recipe[0]} style={{height: "10rem", width: "15rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{recipe[0]}</h5>
                    <Link to={`/recipe/${recipe[2]}`} className="btn btn-dark">Link to recipe</Link>
                </div>
            </div>
            ])})
            : ''}
            </div>
        </div>
    </>
    );
}

export default SearchResults;