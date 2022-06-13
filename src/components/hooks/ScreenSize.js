import React, { useState, useEffect } from 'react';

// https://www.positronx.io/react-get-dynamic-window-height-width-using-react-hooks/

export default function ScreenSize() {
  const [screenSize, getDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return screenSize;
}