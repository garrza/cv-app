import React from 'react';

const Education = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, education: { ...formData.education, [e.target.name]: e.target.value } });
  };

  return (
    <div>
      <h3>Education</h3>
      <input
        name="school"
        placeholder="School Name"
        value={formData.education?.school || ''}
        onChange={handleChange}
      />
      <input
        name="degree"
        placeholder="Degree"
        value={formData.education?.degree || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default Education;