import React from 'react';

const WorkExperience = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, workExperience: { ...formData.workExperience, [e.target.name]: e.target.value } });
  };

  return (
    <div>
      <h3>Work Experience</h3>
      <input
        name="company"
        placeholder="Company Name"
        value={formData.workExperience?.company || ''}
        onChange={handleChange}
      />
      <input
        name="position"
        placeholder="Position"
        value={formData.workExperience?.position || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default WorkExperience;