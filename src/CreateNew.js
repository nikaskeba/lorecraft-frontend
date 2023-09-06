import Header from './Header';
import React, { useState } from 'react';

function CreateNew() {
  const [formData, setFormData] = useState({
    race: '',
    class: '',
    gender: '',
    customDetails: '',
  });

  const randomizeField = (field) => {
    const randomValues = {
      race: ['Human', 'Elf', 'Dwarf', 'Orc'],
      class: ['Warrior', 'Mage', 'Rogue', 'Priest'],
      gender: ['Male', 'Female', 'Non-binary', 'Other'],
      customDetails: ['Detail1', 'Detail2', 'Detail3', 'Detail4'],
    };

    setFormData({
      ...formData,
      [field]: randomValues[field][Math.floor(Math.random() * randomValues[field].length)],
    });
  };

const randomizeAll = () => {
  const randomValues = {
    race: ['Human', 'Elf', 'Dwarf', 'Orc'],
    class: ['Warrior', 'Mage', 'Rogue', 'Priest'],
    gender: ['Male', 'Female', 'Non-binary', 'Other'],
    customDetails: ['Detail1', 'Detail2', 'Detail3', 'Detail4'],
  };

  setFormData({
    race: randomValues.race[Math.floor(Math.random() * randomValues.race.length)],
    class: randomValues.class[Math.floor(Math.random() * randomValues.class.length)],
    gender: randomValues.gender[Math.floor(Math.random() * randomValues.gender.length)],
    customDetails: randomValues.customDetails[Math.floor(Math.random() * randomValues.customDetails.length)],
  });
};

  const handleSubmit = () => {
    console.log('Form Submitted', formData);
  };

  return (

    <div>
    <Header />
      <input 
        type="text" 
        placeholder="Race" 
        value={formData.race} 
        onChange={(e) => setFormData({ ...formData, race: e.target.value })} 
      />
      <button onClick={() => randomizeField('race')}>Randomize</button>
      
      <input 
        type="text" 
        placeholder="Class" 
        value={formData.class} 
        onChange={(e) => setFormData({ ...formData, class: e.target.value })} 
      />
      <button onClick={() => randomizeField('class')}>Randomize</button>
      
      <input 
        type="text" 
        placeholder="Gender" 
        value={formData.gender} 
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })} 
      />
      <button onClick={() => randomizeField('gender')}>Randomize</button>
      
      <input 
        type="text" 
        placeholder="Custom Details" 
        value={formData.customDetails} 
        onChange={(e) => setFormData({ ...formData, customDetails: e.target.value })} 
      />
      <button onClick={() => randomizeField('customDetails')}>Randomize</button>

      <br />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={randomizeAll}>Randomize All</button>
    </div>
  );
}

export default CreateNew;
