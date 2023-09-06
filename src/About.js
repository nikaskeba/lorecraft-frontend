import Header from './Header';
import React from 'react';
import './About.css';

function About() {
  const profiles = [
    { name: "Person 1", info: "Info about person 1", imgSrc: "./images/Profile1.png" },
    { name: "Person 2", info: "Info about person 2", imgSrc: "./images/Profile2.png" },
    { name: "Person 3", info: "Info about person 3", imgSrc: "./images/Profile3.png" },
  ];

  return (
    <div>
    <Header />
    <div className="profile-container">
      {profiles.map((profile, index) => (
        <div key={index} className="profile">
          <img src={profile.imgSrc} alt={profile.name} />
          <h2>{profile.name}</h2>
          <textarea value={profile.info} readOnly />
        </div>
      ))}
    </div></div>
  );
}

export default About;
