// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import LoginPage from './components/LoginPage';
// import Navigation from './components/navigation';
// import Layout from './app/layout';
// import Page from './app/page';
// import SignupPage from './components/SignUpPage';
// import ForgotPasswordPage from './components/forgot-password-form';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
    // <LoginPage /> 
//     {/* <SignupPage /> */}
    //  <ForgotPasswordPage /> 
//     {/* <Navigation /> */}
//     {/* <Layout /> */}
//     <Page />
    
//   </React.StrictMode>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Router> {/* Wrap the app with Router to enable routing */}
//        {/* <App /> */}
//     <LoginPage />
//     {/* <SignupPage /> */}
//     {/* <ForgotPasswordPage /> */}
//     {/* <Navigation /> */}
//     {/* <Layout /> */} {/* Main component that will contain your routes */}
//     </Router>
//   </React.StrictMode>
// );
// import React from "react";
// import ReactDOM from "react-dom";
import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App"; // Ensure you are importing your main component
import "./index.css"; // Optional: CSS file for global styles

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals();
