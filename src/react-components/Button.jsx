import React from 'react';
import { useEffect, useState } from 'react';

const Button = ({ children }) => {
  const [test, setTest] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      console.log('test');
    }, 200);
  }, []);
  return <button>{children}</button>;
};

export default Button;
