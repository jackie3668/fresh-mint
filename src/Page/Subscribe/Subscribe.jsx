import React, { useState } from 'react';
import './Subscribe.css';
import Select from '../../Component/Select/Select';
import Register from '../../Component/Register/Register';
import Payment from '../../Component/Payment/Payment';
import Pick from '../../Component/Pick/Pick';

const Subscribe = () => {
  const stepOrder = ['Select', 'Register', 'Payment', 'Pick'];
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
    window.scroll(0,0)
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'Select':
        return <Select handleNextStep={handleNextStep} setPrice={setPrice} price={price} setCount={setCount} count={count}/>;
      case 'Register':
        return <Register handleNextStep={handleNextStep} setPrice={setPrice} price={price} setCount={setCount} count={count}  />;
      case 'Payment':
        return <Payment handleNextStep={handleNextStep} setPrice={setPrice} price={price} setCount={setCount} count={count}/>;
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
        <p className={currentStep === 'Register' ? 'active' : ''}>Address</p>
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
