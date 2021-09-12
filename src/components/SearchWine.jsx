import React, { useState } from 'react';
import { Link, navigate } from '@reach/router'


const SearchWine = props => {
    const [searchWine, setSearchWine] = useState();

    const searchTermWine = (e) => {
        setSearchWine(e.target.value);
    }

    const customSearchWine = (e) => {
        e.preventDefault();
        navigate(`/wine/${searchWine}`)
    }
    return (
    <div className="bg-light text-center">
            <div className="container">
            <h2 className='text-danger'><b>LET'S FIND SOME WINE</b></h2>
                <form onSubmit={customSearchWine} className="form-inline">
                    <input className="border p-1 rounded m-2" name="searchBy" type="search" onChange={searchTermWine} placeholder="Search our wines.."/>
                    <button className="btn btn-outline-danger m-2" type="submit">Search</button>
                </form>
            </div>
    </div>
    )}

export default SearchWine;