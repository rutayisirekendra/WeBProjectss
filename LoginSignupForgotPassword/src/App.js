// import React from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for React Router
// import { Link } from 'react-router-dom'; // Import Link to use for navigation

// import logo from './logo.svg';
// import LoginPage from './components/LoginPage'; // Import your LoginPage component
// import SignupPage from './components/SignUpPage'; // Import SignupPage
// import ForgotPasswordPage from './components/forgot-password-form'; // Import ForgotPasswordPage

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//       {/* Define routes for different pages */}
//       <Routes>
//         <Route path="/" element={<LoginPage />} /> {/* Route for login page */}
//         <Route path="/signup" element={<SignupPage />} /> {/* Route for signup page */}
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Route for forgot password page */}
//       </Routes>

//       {/* Example links to navigate between pages */}
//       <nav>
//         <Link to="/">Login</Link> | 
//         <Link to="/signup">Sign Up</Link> | 
//         <Link to="/forgot-password">Forgot Password</Link>
//       </nav>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignUpPage";
import ForgotPasswordPage from "./components/forgot-password-form";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

