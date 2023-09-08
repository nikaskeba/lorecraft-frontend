import Header from './Header';
import { useCallback, useEffect,useState } from 'react';

import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal'; // Import Modal component

const SERVER_URL='https://lorecraft.onrender.com'
// const SERVER_URL='http://localhost:3001'

const Creations = () => {
  const { user } = useAuth0();
  const [editingCharacter, setEditingCharacter] = useState(null);
  const handleEditButtonClick = (character) => {
  console.log('Editing character:', character);
  setEditingCharacter(character);

};
  const [characters, setCharacters] = useState([]);

const fetchAllCharacters = useCallback(async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/character/${user.email}`);
      if (response.status === 200) {
        setCharacters(response.data);
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
      // Here you might set an error state variable to show an error message to the user
    }
}, [user.email]);

useEffect(() => {
  fetchAllCharacters();
}, [fetchAllCharacters]);
const handleEditClick = async (userEmail, updatedCharacterData) => {
  try {
    const { charName, classType, ...idData } = updatedCharacterData;
    const id = Object.values(idData).join('');

    const characterData = {
      id,
      charName,
      classType,
    };

    console.log('Data to be sent:', { characters: [characterData] });

    // Send a PATCH request to the server with the correct data structure
    const response = await axios.patch(`${SERVER_URL}/character/${userEmail}`, { characters: [characterData] }, {
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
    });



    if (response.status === 200) {
      console.log('Character updated successfully');
      // ... (other success handling code)
    } else if (response.status === 404) {
      console.error('User with that email address not found');
      // ... (handle user not found error)
    } else {
      console.error('Failed to update character');
      // ... (other error handling code)
    }
    // Refresh the character list after update
    fetchAllCharacters();
  } catch (error) {
    console.error('Error updating character:', error);
    // ... (other error handling code)
  }
};


const handleDeleteClick = async (characterId) => {
  try {
    // Send a DELETE request to the server with the character ID in the URL
    const response = await axios.delete(`${SERVER_URL}/character/${characterId}`);
    if (response.status === 200) {
      console.log('Character deleted successfully');
      // ... (other success handling code)
    } else if (response.status === 404) {
      console.error('Character not found');
      // ... (handle character not found error)
    } else {
      console.error('Failed to delete character');
      // ... (other error handling code)
    }
    // Refresh the character list after deletion
    fetchAllCharacters();
  } catch (error) {
    console.error('Error deleting character:', error);
    // ... (other error handling code)
  }
};

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
        <p>Race: {character.race}</p>
        <p>Class Type: {character.classType}</p>
        <p>Alignment: {character.alignment}</p>
        <p>Gender: {character.gender}</p>
        {character.imageURL && <img src={character.imageURL} alt="Character" />}
        <p>Backstory: {character.backstory}</p>
        <button onClick={() => handleEditButtonClick(character._id)}>Edit</button>
        <button onClick={() => handleDeleteClick(character._id)}>Delete</button>
      </div>
    </Carousel.Item>
  ))}
</Carousel>

      )}
 {editingCharacter && (
<Modal show={!!editingCharacter} onHide={() => setEditingCharacter(null)}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Character</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* Editable fields for character details */}
    <div>
      <label htmlFor="charName">Character Name:</label>
      <input
        type="text"
        id="charName"
        value={editingCharacter.charName} 
        onChange={(e) => {
          // Update the character's name in the editingCharacter state
          setEditingCharacter({
            ...editingCharacter,
            charName: e.target.value,
          });
        }}
      />
    </div>
    <div>
      <label htmlFor="classType">Class Type:</label>
      <input
        type="text"
        id="classType"
        value={editingCharacter.classType}
        onChange={(e) => {
          // Update the character's class type in the editingCharacter state
          setEditingCharacter({
            ...editingCharacter,
            classType: e.target.value,
          });
        }}
      />
    </div>
    {/* Repeat the above pattern for other character details (alignment, gender, imageURL, backstory) */}
  </Modal.Body>
  <Modal.Footer>
<button onClick={() => handleEditClick(user.email, editingCharacter)}>Edit</button>

    <button onClick={() => setEditingCharacter(null)}>Cancel</button>
  </Modal.Footer>
</Modal>


      )}
    </div>


  );
};

export default Creations;