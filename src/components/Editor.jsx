import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import PersonalInformation from './Sections/PersonalInformation';
import Education from './Sections/Education';
import WorkExperience from './Sections/WorkExperience';
import Skills from './Sections/Skills';
import Preview from './Preview';

const steps = ['Personal Information', 'Education', 'Work Experience', 'Skills'];

function Editor() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: {},
    workExperience: {},
    skills: {},
  });

  const handleStep = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
    <div>
      <Stepper activeStep={activeStep} nonLinear>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={() => handleStep(index)}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <PersonalInformation formData={formData} setFormData={setFormData} />}
          {activeStep === 1 && <Education formData={formData} setFormData={setFormData} />}
          {activeStep === 2 && <WorkExperience formData={formData} setFormData={setFormData} />}
          {activeStep === 3 && <Skills formData={formData} setFormData={setFormData} />}
    </div>
    <div>
        <Preview formData={formData} />
    </div>
    </div>
  );
}

export default Editor;