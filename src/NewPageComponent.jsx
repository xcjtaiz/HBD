// NewPageComponent.jsx

import bg2Image from './pic/bg2.png';
import React from 'react';

function NewPageComponent({ onBack }) {
  return (
    <div className='h-screen w-screen relative flex justify-center items-center'>
      <button
        type="button"
        className='bg-[#3970b8] px-16 mt-80 rounded-xl'
        onClick={onBack}
        style={{ zIndex: 1, position: 'absolute' }}
      >
        Go Back
      </button>
      <img src={bg2Image} alt='Background' className='w-full h-full object-cover' style={{ zIndex: 0 }}/>
    </div>
  );
}

export default NewPageComponent;
