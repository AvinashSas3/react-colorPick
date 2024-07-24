import React, { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState('#ffffff');
  const [bg, setBg] = useState('#000000');
  const [hover, setHover] = useState(false)

  const colorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    const invertedColor = invertColor(newColor);
    setBg(invertedColor);
  };

  const invertColor = (color) => {
    if (color.indexOf('#') === 0) {
      color = color.slice(1);
    }
    if (color.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    if (color.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    var r = parseInt(color.slice(0, 2), 16),
      g = parseInt(color.slice(2, 4), 16),
      b = parseInt(color.slice(4, 6), 16);

    // Invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);

    // Pad each with zeros and return the inverted color
    return '#' + padZero(r) + padZero(g) + padZero(b);
  };

  const padZero = (str) => {
    return str.length === 1 ? '0' + str : str;
  };

  return (
    <div className='cp-picker'>
      <h1 className='display-1' style={{ color: bg, backgroundColor: color }}>Pick a Color</h1>
      <div className='cp-para' style={{ backgroundColor: color }}>
        <p style={{color: bg}}>Selected: {color}</p>
      </div>
      <label className='cp-pick'>Click to Pick</label>
      <input type='color' value={color} onChange={(e) => colorChange(e)}></input>
      <footer>
        <p style={{color: color}}>&copy; Avinash Devarakonda {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Color;

