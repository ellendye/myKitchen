import React, { useState } from 'react';
import { Link, navigate } from '@reach/router'


const SearchFood = props => {
    const [search, setSearch] = useState();

    const searchTerm = (e) => {
        setSearch(e.target.value);
    }
    const customSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`)
    }
    return (
    <div className="bg-light text-center">
            <div className="container">
            <h2 className='text-success'><b>FIND A RECIPE</b></h2>
                <form onSubmit={customSearch} className="form-inline">
                    <input className="border p-1 rounded" name="searchBy" type="search" onChange={searchTerm} placeholder="Search our recipes.."/>
                    <button className="btn btn-outline-success m-2" type="submit">Search</button>
                </form>
                <div><Link to="/search/healthy" className="btn link-secondary">Healthy</Link> | <Link to="/search/quick&easy" className="btn link-secondary">Quick & Easy</Link> | <Link to="/search/gluten-free" className="btn link-secondary">Gluten-free</Link> | <Link to="/search/vegetarian" className="btn link-secondary">Vegetarian</Link></div>
            </div>
    </div>
    )}

export default SearchFood;