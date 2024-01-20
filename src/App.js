// App.jsx

import React, { useState } from 'react';
import bgImage from './pic/bg.png';
import bg2Image from './pic/bg2.png';
import bg4Image from './pic/bg4.png';
import bg5Image from './pic/bg5.png';
import hbdImage from './pic/hbd.png';
import videoMei from './pic/video.mp4';
import './App.css';
import NewPageComponent from './NewPageComponent';

function ImageContainer({ setImageSrc }) {
  return (
    <div className="image-container">
      <img
        src={bg4Image}
        alt="Your Image"
        className="w-full h-full object-cover rounded-xl"
        onClick={() => setImageSrc(bg2Image)}
      />
    </div>
  );
}

function VideoContainer({ onClose, setBackImage, onNext }) {
  return (
    <div className="video-container">
      <video width="500" height="400" controls className='rounded-xl drop-shadow-2xl'>
        <source src={videoMei} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="buttons-container">
        <button
          type="button"
          className='bg-[#333] p-4 rounded-xl mt-4 text-white'
          onClick={() => {
            onClose();
            setBackImage(bg2Image);
          }}
        >
          Back
        </button>
        <button
          type="button"
          className='bg-[#333] p-4 rounded-xl mt-4 ml-4 text-white'
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showContent, setShowContent] = useState(null);
  const [imageSrc, setImageSrc] = useState(bg2Image);

  const handleButtonClick = () => {
    setShowContent(
      <>
        <VideoContainer
          onClose={() => {
            setShowContent(null);
            setImageSrc(bg2Image);
          }}
          setBackImage={setImageSrc}
          onNext={() => {
            setShowContent(<NewPageComponent onBack={() => setShowContent(null)} />);
          }}
        />
      </>
    );
  };

  return (
    <div className='h-screen w-screen overflow-hidden relative'>
      <img src={bg5Image} alt='Background' className='w-full h-full object-cover'/>

      <div className="App absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        {showContent ? (
          <h1 className="text-xl text-white font-bold underline hover:text-2xl ease-in duration-100">
            {showContent}
          </h1>
        ) : (
          <>
            <ImageContainer setImageSrc={setImageSrc} />
            <h1 className="text-xl text-white font-bold underline hover:text-2xl ease-in duration-100">
              <button
                type="button"
                className='bg-[#333] p-6 mt-8 rounded-xl'
                onClick={handleButtonClick}
              >
                HAPPY BIRTHDAY MEI!
              </button>
            </h1>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
