
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from "../src/components/Country/country";
import Cart from "../src/components/Cart/Cart"
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);



  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
      .catch(error => console.log(error))

  }, [])

  const handleAddCountry = (country) => {
    const newCart=[...cart,country];
    setCart(newCart);
     
    }


  return (
    <div className="App">

      <h1>Country Loaded {countries.length}</h1>
      <h1>Country Added {cart.length}</h1>
      <Cart Cart={cart}></Cart>

      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>


    </div>
  );
}

export default App;
