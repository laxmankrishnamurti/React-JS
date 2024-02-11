import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Varibales from '../Components/Variables.jsx'

function SayHello(){
  return (
    <div>
      <h2>This is a component which is declared into main.jsx</h2>
    </div>
  )
}

//can we render this. Let's try
const ReactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit google'
}

//But, instead of passing custom object we can pass object by creating new element by React mehod.

const NewElement = React.createElement(
  'a',
  {
    href : 'https://wikipedis.org',
    target : '_blank'
  },
  'Click here to Visit Wikipedia'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* newElement */}
      {/* <NewElement /> */}
      <App/>
      <Varibales/>
  </React.StrictMode>,
)

/**
 * <ReactElement />  //Objects are not used like that. Because, React has it's own methods to take a custom argument with a proper syntax as React wants. That means our key-name is not fullfilled the condition as React takes. Because let suppose we change the "type" name to "laxman" then we think that it will render then it is not going to be happen.
 */
