import React from 'react';

const Button = ({ children, type = 'colored', onClick, ...props }) => {
  const baseStyle = {
    width: '300px',
    padding: '13px 68px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '400px',
    transition: 'none',
    fontSize: '18px',
    textTransform: 'uppercase',
    backgroundColor: '#fff',
    marginBottom: '20px',
  };

  // create styled button for register, add and save actions
  const coloredButton = {
    ...baseStyle,
    background:
      'linear-gradient(96.76deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%)',
    color: '#fff',
  };

  const handleMouseEnter = e => {
    e.target.style.scale = '1.05';
  };

  const handleMouseLeave = e => {
    e.target.style.scale = '1';
  };

  return (
    <button
      style={type === 'white' ? baseStyle : coloredButton}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
