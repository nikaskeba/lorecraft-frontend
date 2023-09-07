import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        characters.map((character, index) => (
          <div key={index}>
         
            <p>Char Name: {character.charName}</p>
            <p>Class Type: {character.classType}</p>
            <p>Alignment: {character.alignment}</p>
            <p>Gender: {character.gender}</p>
            <p>Image URL: {character.imageURL}</p>
            <p>Backstory: {character.backstory}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Creations;


