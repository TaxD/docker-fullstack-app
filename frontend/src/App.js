import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('/api/values')
      .then(res => {
        console.log(res.data);
        setResults(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(""); 

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/value', { value: search })
      .then(res => {
        console.log(res.data);
        setResults([...results, res.data]);
        setSearch("");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {
            results && results.map((result, index) => (
              <div key={index}>
                {result.value}
              </div>
            ))

          }
          <form className="example" onSubmit={submitHandler}>
            <input type="text"
              placeholder="Search.."
              name="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
