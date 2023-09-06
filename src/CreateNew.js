import Header from './Header';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

   <div className="container">
      <Header />
      <div style={{ border: '1px solid #000', padding: '10px', boxShadow: '0px 0px 10px #000', maxWidth: '400px', margin: '0 auto' }}>
        {Object.keys(formData).map((field, index) => (
          <div className="form-group" key={index}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                value={formData[field]} 
                onChange={(e) => setFormData({...formData, [field]: e.target.value})}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={() => randomizeField(field)}>Randomize</button>
              </div>
            </div>
          </div>
        ))}
        <div>
          <button className="btn btn-primary" type="button" onClick={handleSubmit}>Submit</button>
          <button className="btn btn-secondary ml-2" type="button" onClick={randomizeAll}>Randomize All</button>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
