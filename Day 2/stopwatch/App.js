import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="App">
      <div className="stopwatch">
        <h1>{formatTime(time)}</h1>
        <div className="buttons">
          <button onClick={handleStartPause}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
