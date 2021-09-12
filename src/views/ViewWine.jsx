import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchWine from '../components/SearchWine'
import { Link } from '@reach/router';

const ViewWine = props => {
    console.log(props.varietal)
    const [wineDescription, setWineDescription] = useState(null)
    const [winePairing, setWinePairing] = useState(null)
    const [wineRec, setWineRec] = useState(null)


    const apiKey = 'apiKey=2bea71a0484e40899bc751b09c250c1e'

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/wine/description?wine=${props.varietal}&${apiKey}`)
            .then(res => {
                setWineDescription(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/wine/dishes?wine=${props.varietal}&${apiKey}`)
            .then(res => {
                setWinePairing(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/wine/recommendation?number=3&wine=${props.varietal}&${apiKey}`)
            .then(res => {
                setWineRec(res.data)
            })
    }, [])
    return (
        <>
        <SearchWine/>
            <div >
                <div className="row align-items-start">
                    <div className="col">
                    <img style={{opacity: "50%", width: "100%", height: "55rem"}} src="https://images.pexels.com/photos/4877876/pexels-photo-4877876.jpeg"  alt="wine" />
                    </div>
                    <div className="col h-75">
                        <h1 className="text-center display-5">{props.varietal}</h1>
                        {
                            wineDescription ?
                                <h4 className="text-center m-2"><i>{wineDescription.wineDescription}</i></h4>
                            : ''
                        }
                        {
                            winePairing ?
                            <>
                            <h6>How to pair it</h6>
                            <p>{winePairing.text}</p>
                            <h6>Find a recipe</h6>
                            <p className="d-flex justify-content-around">
                                {
                                winePairing.pairings.map((food, index) => {
                                    return(
                                        <p><Link to={`/search/${food}`}><i key={index}>{food}</i></Link>  </p>
                                    )
                                })}
                            </p>
                            </>
                            : ''
                        }
                        <h6>What we recommend</h6>
                        {wineRec ? 
                        <div className="d-flex justify-content-between">
                        <div className="card" style={{width: "10rem"}}>
                            <img className="card-img-top img-fluid" src={wineRec.recommendedWines[0].imageUrl} alt="Card image cap"/>
                            <div className="card-body">
                                <b className="card-title">{wineRec.recommendedWines[0].title}</b>
                                <p className="card-text text-truncate">{wineRec.recommendedWines[0].description}</p>
                                <p className="card-text text-truncate">Rating: {wineRec.recommendedWines[0].ratingCount}</p>
                                <a href={wineRec.recommendedWines[0].link}>{wineRec.recommendedWines[0].price} buy it here</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "10rem"}}>
                            <img className="card-img-top img-fluid" src={wineRec.recommendedWines[1].imageUrl} alt="Card image cap"/>
                            <div className="card-body">
                                <b className="card-title">{wineRec.recommendedWines[1].title}</b>
                                <p className="card-text text-truncate">{wineRec.recommendedWines[1].description}</p>
                                <p className="card-text text-truncate">Rating: {wineRec.recommendedWines[1].ratingCount}</p>
                                <a href={wineRec.recommendedWines[1].link}>{wineRec.recommendedWines[1].price} buy it here</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "10rem"}}>
                            <img className="card-img-top img-fluid" src={wineRec.recommendedWines[2].imageUrl} alt="Card image cap"/>
                            <div className="card-body">
                                <b className="card-title">{wineRec.recommendedWines[2].title}</b>
                                <p className="card-text text-truncate">{wineRec.recommendedWines[2].description}</p>
                                <p className="card-text text-truncate">Rating: {wineRec.recommendedWines[2].ratingCount}</p>
                                <a href={wineRec.recommendedWines[2].link}>{wineRec.recommendedWines[2].price} buy it here</a>
                            </div>
                        </div>
                        </div>
                        : '' }
                    </div>
                    <div className="col">
                        <img style={{opacity: "50%", width: "100%", height: "55rem"}} src="https://images.pexels.com/photos/3521365/pexels-photo-3521365.jpeg"  alt="wine" />
                    </div>
                </div>
                <div>
                    <img style={{opacity: "50%", width: "100%", height: "50rem"}} src="https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg" alt="wine bottles" />
                </div>
            </div>
        </>
    )
}
export default ViewWine;