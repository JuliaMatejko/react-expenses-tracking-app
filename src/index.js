//import React from 'react';    //not necessary in the newest version of react. Need to use import in every component in older versions whre JSX code is used

import ReactDOM from 'react-dom/client'; // importing ReactDOM object

import './index.css'; // not regular js syntax
import App from './App';  // not regular js syntax

const root = ReactDOM.createRoot(document.getElementById('root')); // main entry point, main hook of the overall user interface
root.render(<App />); // App is a component, function component

//index.js file is a 1st file to be executed
