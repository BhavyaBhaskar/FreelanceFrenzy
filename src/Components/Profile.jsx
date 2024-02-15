/* eslint-disable react/prop-types */
import "./Profile.css";

import { useState } from "react";

function Profile({ setIsRegistered }) {
  const [name, setName] = useState("John Doe");
  const [contactInfo, setContactInfo] = useState("johndoe@example.com");
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [experience, setExperience] = useState("5 years");
  const [portfolio, setPortfolio] = useState(["Project 1", "Project 2"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="contactInfo">Contact Information:</label>
      <input
        type="text"
        id="contactInfo"
        value={contactInfo}
        onChange={(event) => setContactInfo(event.target.value)}
      />
      <label htmlFor="skills">Skills:</label>
      <input
        type="text"
        id="skills"
        value={skills.join(", ")}
        onChange={(event) => setSkills(event.target.value.split(", "))}
      />
      <label htmlFor="experience">Experience:</label>
      <input
        type="text"
        id="experience"
        value={experience}
        onChange={(event) => setExperience(event.target.value)}
      />
      <label htmlFor="portfolio">Portfolio:</label>
      <input
        type="text"
        id="portfolio"
        value={portfolio.join(", ")}
        onChange={(event) => setPortfolio(event.target.value.split(", "))}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default Profile;
