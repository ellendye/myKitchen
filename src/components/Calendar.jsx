import React, {useEffect, useState} from 'react';
import './CalendarStyle.css'
// import moment from 'moment';
import axios from 'axios';
import { Link } from '@reach/router';

const Calendar = props => {
    const alignSelf = {
        alignSelf: "flex-start",
        flex: "0,0,1"
    }
    // const value = moment();
    // const startDay = value.clone().startOf("week").format("MM/DD/YY")
    // const endDay = value.clone().endOf("week").format("MM/DD/YY")
    const [mealPlan, setmealPlan] = useState(null)
    const apiKey = 'apiKey=2bea71a0484e40899bc751b09c250c1e'
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&${apiKey}`)
            .then(res => { 
                setmealPlan(res.data)})
    }, [])
    
    return (
        <div className="calendar">
            {/* <header> */}
                <button className="secondary" style={alignSelf}>Print the recipe cards</button>
                <div className="calendar__title d-flex justify-content-center align-items-center">
                    {/* <div className="icon secondary chevron_left">‹</div>
                    <h1><span></span><strong>{startDay} – {endDay}</strong></h1>
                    <div className="icon secondary chevron_left">›</div> */}
                    <h4 className="text-center display-6">Why spend time planning your meals when we can do it for you? <br /> Welcome to your meal plan for the week!</h4>
                </div>
                {/* <div style={alignSelf}></div> */}
            {/* </header> */}
            <div>


                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Mon </th>
                            <th>Tue </th>
                            <th>Wed </th>
                            <th>Thu </th>
                            <th>Fri </th>
                            <th>Sat </th>
                            <th>Sun </th>
                        </tr>
                    </thead>
                </table>

                <div className="wrap">
                    <table>
                    {mealPlan ?
                        <tbody>
                            <tr>
                                <td>Morning</td>
                                <td><Link to={`/recipe/${mealPlan.week.monday.meals[0].id}`}>{mealPlan.week.monday.meals[0].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.tuesday.meals[0].id}`}>{mealPlan.week.tuesday.meals[0].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.wednesday.meals[0].id}`}>{mealPlan.week.wednesday.meals[0].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.thursday.meals[0].id}`}>{mealPlan.week.thursday.meals[0].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.friday.meals[0].id}`}>{mealPlan.week.friday.meals[0].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.saturday.meals[0].id}`}>{mealPlan.week.saturday.meals[0].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.sunday.meals[0].id}`}>{mealPlan.week.sunday.meals[0].title}</Link></td>
                            </tr>
                            <tr>
                                <td>Afternoon</td>
                                <td><Link to={`/recipe/${mealPlan.week.monday.meals[1].id}`}>{mealPlan.week.monday.meals[1].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.tuesday.meals[1].id}`}>{mealPlan.week.tuesday.meals[1].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.wednesday.meals[1].id}`}>{mealPlan.week.wednesday.meals[1].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.thursday.meals[1].id}`}>{mealPlan.week.thursday.meals[1].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.friday.meals[1].id}`}>{mealPlan.week.friday.meals[1].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.saturday.meals[1].id}`}>{mealPlan.week.saturday.meals[1].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.sunday.meals[1].id}`}>{mealPlan.week.sunday.meals[1].title}</Link></td>
                            </tr>
                            <tr>
                                <td>Night</td>
                                <td><Link to={`/recipe/${mealPlan.week.monday.meals[2].id}`}>{mealPlan.week.monday.meals[2].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.tuesday.meals[2].id}`}>{mealPlan.week.tuesday.meals[2].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.wednesday.meals[2].id}`}>{mealPlan.week.wednesday.meals[2].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.thursday.meals[2].id}`}>{mealPlan.week.thursday.meals[2].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.friday.meals[2].id}`}>{mealPlan.week.friday.meals[2].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.saturday.meals[2].id}`}>{mealPlan.week.saturday.meals[2].title}</Link></td>
                                <td><Link to={`/recipe/${mealPlan.week.sunday.meals[2].id}`}>{mealPlan.week.sunday.meals[2].title}</Link></td>
                            </tr>
                            <tr>
                                <td>Nutrition Totals</td>
                                <td><b>Calories</b> {mealPlan.week.monday.nutrients.calories} <br />
                                <b>Carbs</b> {mealPlan.week.monday.nutrients.carbohydrates} <br />
                                <b>Fat</b> {mealPlan.week.monday.nutrients.fat} <br />
                                <b>Protein</b>{mealPlan.week.monday.nutrients.protein}</td>
                                <td><b>Calories</b> {mealPlan.week.tuesday.nutrients.calories} <br />
                                <b>Carbs</b> {mealPlan.week.tuesday.nutrients.carbohydrates} <br />
                                <b>Fat</b> {mealPlan.week.tuesday.nutrients.fat} <br />
                                <b>Protein</b>{mealPlan.week.tuesday.nutrients.protein}</td>
                                <td><b>Calories</b> {mealPlan.week.wednesday.nutrients.calories} <br />
                                <b>Carbs</b> {mealPlan.week.wednesday.nutrients.carbohydrates} <br />
                                <b>Fat</b> {mealPlan.week.wednesday.nutrients.fat} <br />
                                <b>Protein</b>{mealPlan.week.wednesday.nutrients.protein}</td>
                                <td><b>Calories</b> {mealPlan.week.thursday.nutrients.calories} <br />
                                <b>Carbs</b> {mealPlan.week.thursday.nutrients.carbohydrates} <br />
                                <b>Fat</b> {mealPlan.week.thursday.nutrients.fat} <br />
                                <b>Protein</b>{mealPlan.week.thursday.nutrients.protein}</td>
                                <td><b>Calories</b> {mealPlan.week.friday.nutrients.calories} <br />
                                <b>Carbs</b> {mealPlan.week.friday.nutrients.carbohydrates} <br />
                                <b>Fat</b> {mealPlan.week.friday.nutrients.fat} <br />
                                <b>Protein</b>{mealPlan.week.friday.nutrients.protein}</td>
                                <td><b>Calories</b> {mealPlan.week.saturday.nutrients.calories} <br />
                                <b>Carbs</b> {mealPlan.week.saturday.nutrients.carbohydrates} <br />
                                <b>Fat</b> {mealPlan.week.saturday.nutrients.fat} <br />
                                <b>Protein</b>{mealPlan.week.saturday.nutrients.protein}</td>
                                <td><b>Calories</b> {mealPlan.week.sunday.nutrients.calories} <br />
                                <b>Carbs</b> {mealPlan.week.sunday.nutrients.carbohydrates} <br />
                                <b>Fat</b> {mealPlan.week.sunday.nutrients.fat} <br />
                                <b>Protein</b>{mealPlan.week.sunday.nutrients.protein}</td>
                            </tr>
                        </tbody>
                        : ''
                    }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Calendar;