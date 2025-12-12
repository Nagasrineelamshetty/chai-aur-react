import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}
// const ReactElement= {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
//react element according to react syntax
const anotherUser= "chai aur react"
const reactElement= React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'click me to visit google',
    anotherElement
);
const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google </a>
)
createRoot(document.getElementById('nagasri')).render(
  
    // <App />
    reactElement
  
)
