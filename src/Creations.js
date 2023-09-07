import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Creations = () => {
  const [characters, setCharacters] = useState([]);

  const fetchAllCharacters = async () => {
    try {
      const response = await axios.get('https://lorecraft.onrender.com/character');
      if (response.status === 200) {
        setCharacters(response.data);
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
      // Here you might set an error state variable to show an error message to the user
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

   return (
    <div>
      <Header />
      {characters.length === 0 ? (
        <p>No characters found</p>
      ) : (
        <Carousel>
          {characters.map((character, index) => (
            <Carousel.Item key={index}>
              <div>
                <h5>Char Name: {character.charName}</h5>
                <p>Class Type: {character.classType}</p>
                <p>Alignment: {character.alignment}</p>
                <p>Gender: {character.gender}</p>
                <p>Image URL: {character.imageURL}</p>
                <p>Backstory: {character.backstory}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Creations;