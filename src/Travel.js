import React from 'react';
const Travel =({image,caracter,distance,city,country}) =>(
    <figure>
        <img src= {image} alt ={caracter} />
        <figcaption>
            <h2>{city} : {country}</h2>
            <h3>à {distance} km</h3>
        </figcaption>
    </figure>
);
export default Travel;