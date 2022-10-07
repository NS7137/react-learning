import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);

  useEffect(() => {
    // 只加载时渲染一次，第二参数为依赖项
    console.log('hello world');
  }, []);

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(prev => prev + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
