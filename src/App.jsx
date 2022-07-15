import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
// Setting up initial state using react hook (useState)
const [search, setSearch] = useState("");
const [crypto, setCrypto] = useState([]);
// Fetching API using Axios library
// Do not foget to install it ( npm i axios )

useEffect(()=> {
  Axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=0&limit=200&currency=USD`)
    .then ((res)=> {
      setCrypto(res.data.coins)
    });
  },[]);

  return (
  // Here, you can create a component if you want, i did not want as it's
  // a very small app.
  // i.e. <CRYPTO/>

<div className="App">
    <h1 className="title">Cryptocurrency Finder</h1>
    <input type="text" 
    placeholder='search (only small letters)...'
    onChange={(e) => {
      setSearch(e.target.value)
    }}/>

    {/* Here goes the table of crypto currencies */}
    <table>
      <thead>
        <tr>
          <td>Rank</td>
          <td>Name</td>
          <td>Symbol</td>
          <td>Market Cap</td>
          <td>Price</td>
          <td>Available Supply</td>
        </tr>
      </thead>
      {/* Filtering to check for the chosen crypto */}
      <tbody>
        {crypto 
        .filter((val)=> { return val.name.toLowerCase()
        .includes(search)})
        .map((val, id)=> {
          return (
            <>
            <tr id="id">
              <td className="rank">{val.rank}</td>
              <td className="logo">
              <a href={val.websiteUrl}>
                  <img 
                  src={val.icon} 
                  alt="logo" 
                  width="30px"/>
                  </a>
                  <p>{val.name}</p>
                  </td>
            <td className="symbol">{val.symbol}</td>
            <td>$ {Math.round(val.marketCap)} </td>
            <td>$ {Math.round(val.price)} </td>
            <td>{val.availableSupply}</td>
            </tr>
            </>
          )
        })
        }
      </tbody>
    </table>
    </div>
  );
}

export default App;
