import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  width: 8.5in;
  min-height: 11in;
  padding: 1in;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Preview = ({ formData }) => {
  return (
    <ResumeContainer>
      <Header>
        <h1>{formData.name}</h1>
        <p>{formData.email}</p>
      </Header>

      <Section>
        <SectionTitle>Education</SectionTitle>
        <p>
          {formData.education.school}, {formData.education.degree}
        </p>
      </Section>

      <Section>
        <SectionTitle>Work Experience</SectionTitle>
        <div>
          <h4>{formData.workExperience.company}</h4>
          <p>{formData.workExperience.position}</p>
        </div>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <ul>
          <li>{formData.skills.skill1}</li>
          <li>{formData.skills.skill2}</li>
        </ul>
      </Section>
    </ResumeContainer>
  );
};

export default Preview;