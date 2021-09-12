import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchFood from '../components/SearchFood'
import {Link} from '@reach/router';

const View = props => {
    console.log(props.id)
    const [recipeSummary, setRecipeSummary] = useState(null)
    const [recipeNutrition, setRecipeNutrition] = useState(null)
    const [recipeCard, setrecipeCard] = useState(null)
    const [similarRecipes, setSimilarRecipes] = useState(null)
    const [recipeEquipment, setRecipeEquipment] = useState(null)


    const apiKey = 'apiKey=2bea71a0484e40899bc751b09c250c1e'

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${props.id}/information?${apiKey}`)
            .then(res => { 
                setRecipeSummary(res.data)})
    }, [])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${props.id}/card?${apiKey}`)
            .then(res => { 
                setrecipeCard(res.data)})
    }, [])
    

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${props.id}/nutritionWidget.json?${apiKey}`)
            .then(res => { 
                setRecipeNutrition(res.data)})
    }, [])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${props.id}/similar?${apiKey}&number=2`)
            .then(res => { 
                setSimilarRecipes(res.data)})
    }, [])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${props.id}/equipmentWidget.json?${apiKey}`)
            .then(res => { 
                setRecipeEquipment(res.data)})
    }, [])



    return (
        <>
        <SearchFood/>
        <div className="container d-flex justify-content-around mt-4">
            {
                recipeCard ?
                <img className="w-75 h-100" src= {recipeCard.url} alt={recipeCard.url} />
                : '' }
                
            {
                recipeSummary ? 
            <div className="border p-2">
            <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-media={recipeSummary.image} data-pin-url={recipeSummary.sourceUrl} data-pin-tall="true"></a>
                        <p><b>Total time:</b> {recipeSummary.readyInMinutes} minutes</p>
                        <p><b>Servings:</b> {recipeSummary.servings}</p>
                        {recipeNutrition ?
                        <>
                        <p><b>Nutritional Information (per serving)</b></p>
                        <p><i>Calories:</i> {recipeNutrition.calories}</p>
                        <p><i>Carbs:</i> {recipeNutrition.carbs}</p>
                        <p><i>Fat:</i> {recipeNutrition.fat}</p>
                        <p><i>Protein:</i> {recipeNutrition.protein}</p>
                        </>
                        : '' }
                        {recipeEquipment ? 
                        <>
                        <p><b>Equipment to grab: </b></p>
                        {
                            recipeEquipment.equipment.map((equip, index) =>{
                                return (
                                <p key={index}>{index +1}. <i>{equip.name}</i></p>
                            )})

                        }
                        </>
                        : ''}
                        
                        <p><b>Recommended Wine Pairing:</b></p>
                        {recipeSummary.winePairing.pairingText ?
                        <>
                        <p><i>{recipeSummary.winePairing.pairingText}</i></p>
                        <p>Try the <a href={recipeSummary.winePairing.productMatches[0].link}>{recipeSummary.winePairing.productMatches[0].title}</a> here!</p>
                        </>
                        : '' }
                        <p><b>You may also like..</b></p>
                        {similarRecipes ?
                        <>
                        <Link to={`/recipe/${similarRecipes[0].id}`}>{similarRecipes[0].title}</Link><br />
                        <Link to={`/recipe/${similarRecipes[1].id}`}>{similarRecipes[1].title}</Link>
                        </>
                        : ''}
            </div>
            : '' }
        </div>
        </>
    );
}

export default View;