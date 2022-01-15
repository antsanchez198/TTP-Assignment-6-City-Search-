import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

function App() {
  const [cityList, setCityList] = useState([])
  const [loading, setLoading] = useState(true)
  let city

  const fetchCities = async () => {
    try{
      const response = await fetch(`http://ctp-zip-api.herokuapp.com/city/${city}`)
      const jsonData = await response.json()
      setCityList(jsonData)
    }
    catch (err){
      console.error(err)
      alert(city + "is not a valid city! Try again")
    }
  }

  async function setInput(val){
    city = val.target.value
    setLoading(true)
  }

  async function startSearch () {
    city = city.toUpperCase()
    fetchCities()
    setLoading(false)
  }

  return (
    <div className="App">
      <h1>Enter a City Below</h1>
      <input type="text" placeholder='Enter a City' onChange={setInput}></input>  
      <button onClick={startSearch}>Search</button>
      {loading === false ? 
      cityList.map(index => {
        return(
          <body>
            <span>Zip-Code: {index}</span>
          </body>
        )
      }) 
      : <p></p> }
    </div>
  );
}

export default App;
