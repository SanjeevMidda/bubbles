import React, { useState } from "react";

const Circle = () => {
  let randomDimension = () => {
    return Math.floor(Math.random() * 500);
  };

  let randomLocation = () => {
    return Math.floor(Math.random() * 800);
  };

  const [dimensions, setDimension] = useState({
    width: randomDimension(),
    height: randomDimension(),
    top: randomLocation(),
    left: randomLocation(),
  });

  setInterval(
    () =>
      setDimension({
        width: randomDimension(),
        height: randomDimension(),
        top: randomLocation(),
        left: randomLocation(),
      }),
    700
  );
  return <div className="circle" style={dimensions}></div>;
};

export default Circle;
