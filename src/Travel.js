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
const travels =[
    {
        image : "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
        caracter : "New York",
        city : "New York",
        country : "USA",
        distance :"5834"
    },
    {
        image : "https://fifty-wp.s3.amazonaws.com/detours/uploads/2018/03/Barcelone-super-block-800x480.png",
        caracter : "Barcelone",
        city : "Barcelone",
        country : "Espagne",
        distance : "1033"
    },
    {
        image : "https://img.ev.mu/images/villes/6856/1605x642/6856.jpg",
        caracter : "Rome",
        city : "Rome",
        country : "Italie",
        distance : "1416"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg",
        caracter : "Nice",
        city : "Nice",
        country : "France",
        distance :"928"
    },
    {
        image : "https://www.nacel.fr/medias/_cache/produits/289/imagePrincipale/1920_1440/ecole-de-langue-londres-tower-bridge.jpg",
        caracter : "Londres",
        city : "Londres",
        country : "Grande Bretagne",
        distance :"468"
    },
]

 
const Travels = () => (
    <div>
      {travels.map((element,index) =>
        // <Quote key = {index} quote={element.quote} image={element.image} character={element.character} />
        <Travel key ={index} {...element} />
      )}
    </div>
  );
 
export default Travels;