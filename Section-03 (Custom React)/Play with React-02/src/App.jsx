import React, { useState } from 'react'

function App() {
  const createReactElement = React.createElement(
    'a',
    {
      href : 'https://google.com',
      target : '_blank'
    },
    'Click me to visit Google'
  )
  return createReactElement;
}

export default App

//If App.jsx is just a function then can we declare a function into main.jsx. Let's try.....

/**
 * Build-in Property that belong on the element.
 * 
 * (1) Type,
 * (2) Key,
 * (3) ref,
 * (4) props
 */