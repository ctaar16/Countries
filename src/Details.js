import axios from 'axios';
import React, {useEffect, useState} from 'react'
import "./Details.css";
import {withRouter} from "react-router-dom";
import { Link } from "react-router-dom";

function Details(props) {

    const [country, setCountry] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://restcountries.eu/rest/v2/name/${props.match.params.country}`)
            console.log(request.data)
            setCountry(request.data)
            return request
        }
        fetchData()
    },[])

    function numberWithCommas(population) {
        return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="deetmaincontainer">
            <Link to="/"><button>Back</button></Link>
            <div className="flagcard">
                {country.map((country) => (
                    <>
                        <img
                        key={country.id}
                        className="deetflag"
                        src={country.flag}
                        alt={country.name}
                        />
                        <div className="details">
                        <p className="country-name"><b>{country.name}</b></p>
                        <p className="general-deets"><b>Native Name: </b> {country.nativeName}</p>
                        <p className="general-deets"><b>Poplulation: </b>{numberWithCommas(country.population)}</p>
                        <p className="general-deets"><b>Region: </b> {country.region}</p>
                        <p className="general-deets"><b>Sub Region:</b> {country.subregion}</p>
                        <p className="general-deets"><b>Capital: </b>{country.capital}</p>
                        <p className="general-deets"><b>Currencies: </b>{country.currencies[0].name}</p>
                        <p className="general-deets"><b>Currency Symbol: </b>{country.currencies[0].symbol}</p>
                        <p className="general-deets"><b>Languages: </b>{country.languages[0].name}</p>
                        </div>
                        </>
                ))}                 
            </div>            
        </div>
    )
}

export default withRouter(Details);