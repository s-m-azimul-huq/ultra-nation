import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
 const [countries, setCountries] =  useState([]) ;
const [cart, setCart] = useState([]);

 useEffect(() =>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => {
    setCountries(data);
  // const name =  data.map(country => country.name);
  // console.log(name);
  })
 },[])

 const handleAddCountry = (country) =>{
   const newCart = [...cart, country];
   setCart(newCart);
   console.log(cart);
  }
  return (
    <div className="App">
     <h1>Country loaded :{countries.length}</h1>
     <h4>Country Added:{cart.length}</h4>
     <Cart cart={cart}></Cart> 
      
     {
         countries.map(country => <Country handleAddCountry={handleAddCountry} country={country} ></Country>)
       }
  
    </div>
  );
}

export default App;
