import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//try to create custom react_element
const reactElement=React.createElement(
  "a",
  {href: "http://google.com", target: "_blank"},
 " click hear"
);


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <>
    reactElement
    <App/>
    </>
    
  
)
