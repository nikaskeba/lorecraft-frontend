import Header from './Header';
import React, { useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const OPENAI_MODEL = 'gpt-3.5-turbo-0613';

function CreateNew() {
  const [formData, setFormData] = useState({
    name: '',
    race: '',
    class: '',
    gender: '',
    alignment: '',
  });

  const [generatedStory, setGeneratedStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const randomizeField = (field) => {
    const randomValues = {
      race: ['Human', 'Elf', 'Dwarf', 'Orc'],
      class: ['Warrior', 'Mage', 'Rogue', 'Priest'],
      gender: ['Male', 'Female', 'Non-binary', 'Other'],
      alignment: ['Good', 'Evil', 'Neutral'],
    };

    setFormData({
      ...formData,
      [field]: randomValues[field][Math.floor(Math.random() * randomValues[field].length)],
    });
  };

  const generateStory = async () => {
    setIsLoading(true);
  
    try {
      const maxTokens = 150; 
      const prompt = `Generate a unique backstory for ${formData.name}, a ${formData.gender} ${formData.race} ${formData.alignment} ${formData.class} character with a ${formData.alignment} alignment in a fantasy setting in a unique place.`;
      const response = await axios.post(OPENAI_API_ENDPOINT, {
        model: OPENAI_MODEL,
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
        max_tokens: maxTokens,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('API Response:', response); // Logs the API response for debugging
  
      let generatedStory = response.data.choices[0].message.content;
      setGeneratedStory(generatedStory);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const regenerateStory = () => {
    generateStory();
  };
  
const randomizeAll = () => {
  const randomValues = {
    race: ['Human', 'Elf', 'Dwarf', 'Orc'],
    class: ['Warrior', 'Mage', 'Rogue', 'Priest'],
    gender: ['Male', 'Female', 'Non-binary', 'Other'],
    alignment: ['Good', 'Evil', 'Neutral'],
  };

  setFormData({
    race: randomValues.race[Math.floor(Math.random() * randomValues.race.length)],
    class: randomValues.class[Math.floor(Math.random() * randomValues.class.length)],
    gender: randomValues.gender[Math.floor(Math.random() * randomValues.gender.length)],
    alignment: randomValues.alignment[Math.floor(Math.random() * randomValues.alignment.length)],
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
        placeholder="Name" 
        value={formData.name} 
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
      />

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
        placeholder="Alignment" 
        value={formData.alignment} 
        onChange={(e) => setFormData({ ...formData, alignment: e.target.value })} 
      />
      <button onClick={() => randomizeField('alignment')}>Randomize</button>

      <br />

      {/* <button onClick={handleSubmit}>Submit</button> */}
      <button onClick={randomizeAll}>Randomize All</button>

      <button onClick={generateStory} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Story'}
      </button>
      
      <button onClick={regenerateStory} disabled={isLoading}>
        {isLoading ? 'Regenerating...' : 'Regenerate Story'}
      </button>

      {generatedStory && (
        <div>
          <div>{generatedStory}</div>
        </div>
      )}
    </div>
  );
}

export default CreateNew;
