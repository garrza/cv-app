import React from 'react';

const Skills = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, skills: { ...formData.skills, [e.target.name]: e.target.value } });
  };

  return (
    <div>
      <h3>Skills</h3>
      <input
        name="skill1"
        placeholder="Skill 1"
        value={formData.skills?.skill1 || ''}
        onChange={handleChange}
      />
      <input
        name="skill2"
        placeholder="Skill 2"
        value={formData.skills?.skill2 || ''}
        onChange={handleChange}
      />
      {/* Add more fields as needed */}
    </div>
  );
};

export default Skills;