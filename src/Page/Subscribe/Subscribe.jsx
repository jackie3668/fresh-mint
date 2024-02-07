import React, { useState } from 'react';
import './Subscribe.css';
import Select from '../../Component/Select/Select';
import Register from '../../Component/Register/Register';
import Address from '../../Component/Address/Address';
import Payment from '../../Component/Payment/Payment';
import Pick from '../../Component/Pick/Pick';

const Subscribe = () => {
  const stepOrder = ['Select', 'Register', 'Address', 'Payment', 'Pick'];
  const [currentStep, setCurrentStep] = useState('Select');
  const [price, setPrice] = useState(18.75)
  const [count, setCount] = useState(8)

  const handleNextStep = () => {
    const currentStepIndex = stepOrder.indexOf(currentStep);
    if (currentStepIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentStepIndex + 1]);
    } else {
      setCurrentStep(stepOrder[0]);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'Select':
        return <Select handleNextStep={handleNextStep} setPrice={setPrice} price={price} setCount={setCount} count={count}/>;
      case 'Register':
        return <Register handleNextStep={handleNextStep} setPrice={setPrice} price={price} setCount={setCount} count={count}  />;
      case 'Address':
        return <Address handleNextStep={handleNextStep} />;
      case 'Payment':
        return <Payment handleNextStep={handleNextStep} />;
      case 'Pick':
        return <Pick handleNextStep={handleNextStep} />;
      default:
        return <Select handleNextStep={handleNextStep} />;
    }
  };

  return (
    <div className='subscribe'>

      <div className="subscribe-breadcrumbs">
        <p className={currentStep === 'Select' ? 'active' : ''}>Select Plan</p>
        <p className={currentStep === 'Register' ? 'active' : ''}>Register</p>
        <p className={currentStep === 'Address' ? 'active' : ''}>Address</p>
        <p className={currentStep === 'Payment' ? 'active' : ''}>Payment</p>
        <p className={currentStep === 'Pick' ? 'active' : ''}>Pick Meals</p>
      </div>
      <div className="subscribe-render">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default Subscribe;
