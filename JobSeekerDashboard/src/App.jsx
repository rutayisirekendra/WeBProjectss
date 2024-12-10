import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import JobSearch from './pages/JobSearch'
import Applications from './pages/Applications'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}

export default App