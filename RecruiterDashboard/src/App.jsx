// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Layout } from './components/layout/Layout';
// import { HomePage } from './pages/HomePage';
// import { ProfilePage } from './pages/ProfilePage';
// import { JobPostingsPage } from './pages/JobPostingsPage';
// import { ApplicationsPage } from './pages/ApplicationsPage';
// import { ShortlistedPage } from './pages/ShortlistedPage';
// import { MessagesPage } from './pages/MessagesPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="jobs" element={<JobPostingsPage />} />
//           <Route path="applications" element={<ApplicationsPage />} />
//           <Route path="shortlisted" element={<ShortlistedPage />} />
//           <Route path="messages" element={<MessagesPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Layout } from './components/layout/Layout';
// import { HomePage } from './pages/HomePage';
// import { ProfilePage } from './pages/ProfilePage';
// import { JobPostingsPage } from './pages/JobPostingsPage';
// import { ApplicationsPage } from './pages/ApplicationsPage';
// import { ShortlistedPage } from './pages/ShortlistedPage';
// import { MessagesPage } from './pages/MessagesPage';
// import LoginPage from './Login/components/LoginPage';
// import SignupPage from './Login/components/SignUpPage';
// import ForgotPasswordPage from './Login/components/forgot-password-form';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes (Login, Signup, Forgot Password) */}
//         <Route path="/layout" element={<LoginPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />

//         {/* Protected Routes (Require Layout) */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="jobs" element={<JobPostingsPage />} />
//           <Route path="applications" element={<ApplicationsPage />} />
//           <Route path="shortlisted" element={<ShortlistedPage />} />
//           <Route path="messages" element={<MessagesPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Login/components/LoginPage";
import SignupPage from "./Login/components/SignUpPage";
import ForgotPasswordPage from "./Login/components/forgot-password-form";
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { JobPostingsPage } from './pages/JobPostingsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ShortlistedPage } from './pages/ShortlistedPage';
import { MessagesPage } from './pages/MessagesPage';

function App() {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <Router>
      <Routes>
        {/* Default route - Redirect to login page if not authenticated */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
        
        {/* Authentication routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Main app routes */}
        <Route path="/home" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="jobs" element={<JobPostingsPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="shortlisted" element={<ShortlistedPage />} />
          <Route path="messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

