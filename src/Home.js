import axios from 'axios';
import React, {useEffect, useState} from 'react'
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
    const [countries, setCountries] = useState([])
    const [queriedData, setQueriedData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://restcountries.eu/rest/v2")
            console.log(request.data)
            setCountries(request.data)
            setQueriedData(request.data)
            return request
        }
        fetchData()
    },[])

    const handleSearch = (event) => {
        const filtered = countries.filter(country => (
        (country.name.toLowerCase().includes(event.target.value.toLowerCase()))
        ))
        setQueriedData(filtered);
        setSearchValue(event.target.value);
     }

    const handleSubmit= event => event.preventDefault(); 

    function numberWithCommas(population) {
        return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
     <> 
     <form onSubmit= {(e) => handleSubmit(e)} >
        <label htmlFor="search">
            <input 
            className="search"
            placeHolder="Search Country"
            type="search"
            name="search"
            value={searchValue}
            onChange={(e)=> handleSearch(e)} 
            /> 
        </label>
    </form>  
    <div className="main-container">
       <div className="country-card"> 
        <div className="row">
            <div className="country">
                {queriedData.map((country)=> (
                    <Link to={`/${country.name}`} >
                    <div className= "card">
                    <img
                    key={country.id}
                    className="flag"
                    src={country.flag}
                    alt={country.name}
                    />
                    <p className="country-name"><b>{country.name}</b></p>
                    <p className="general-deets"><b>Region: </b> {country.region}</p>
                    <p className="general-deets"><b>Population: </b>{numberWithCommas(country.population)}</p>
                    <p className="general-deets"><b>Capital: </b>{country.capital}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
       </div> 
    </div> 
    </>
    )
}

export default Home;
