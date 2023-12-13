import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//App ko bundler(bible ) convert karta he iss formate me.

// const reactElement ={
//   type :"a",
//   props:{
//       href: "http://google.com",
//       type : "_blank",
//   },
//   children:"click here",
// }



const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
);

//try to create custom react_element




const anotherUser = "chai aur react";


const reactElement = React.createElement(
  "a",
  {href: "http://google.com", target: "_blank"},
 " click hear",anotherUser
);


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <>
    {reactElement}

    <br />


    {anotherElement}
    </>

   // reactElement
    
  
)
/*
A bundler is a tool that takes all your JavaScript code, along with any other assets like CSS or images, and combines them into a single file (or a few files) that can be served to the browser.

*/