import React from 'react';

const country = (props) => {
const handleAddCountry=props.handleAddCountry;

const {name , population,capital,region,flag}=props.country;
const flagStyle={height:'60px', width:'100px'};
const countryStyle={border:"2px solid red" }
return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flag }alt=""></img>
            <h1>name: {name}</h1>
            <h2>Capital: {capital}</h2>
            <h2>Population: {population}</h2>
            <h2>region: {region}</h2>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
            <br></br>
        </div>
    );
};

export default country;