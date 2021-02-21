import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  useEffect(() => {
    fetchData();
  }, []); //end useEffect
  const fetchData = () => {
    axios
      .get('/gallery')
      .then((response) => {
        console.log('get response:', response.data);
      })
      .catch((error) => {
        alert('Error fetching data.');
        console.log('GET error:', error);
      });
  }; // end fetchData

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
