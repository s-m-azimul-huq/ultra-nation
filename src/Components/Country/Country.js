import React from 'react';

const Country = (props) => {
    const { name, population, flag } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div>
            <h4>{name}</h4>
            <img style={{ height: "50px" }} src={flag} alt="" />
            <p>Population : {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;