import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
  useEffect(() => {
    fetchData();
  }, []); //end useEffect
  const [galleryList, setGalleryList] = useState([]);
  const fetchData = () => {
    axios
      .get('/gallery')
      .then((response) => {
        console.log('get response:', response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert('Error fetching data.');
        console.log('GET error:', error);
      });
  }; // end fetchData
  const addLikes = (evt) => {
    const picId = evt.target.id;
    console.log(picId);
    axios
      .put(`/gallery/like/${picId}`)
      .then((response) => {
        console.log('in adding likes', response);
        fetchData();
      })
      .catch((error) => {
        console.log('PUT error', error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList gallery={galleryList} addLikes={addLikes} />
    </div>
  );
}

export default App;
