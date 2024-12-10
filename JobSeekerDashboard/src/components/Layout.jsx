import { Home, User, Search, FileText } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Search, label: 'Job Search', path: '/job-search' },
  { icon: FileText, label: 'Applications', path: '/applications' },
]

function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-nav-bg p-4 space-y-2">
        <div className="text-nav-text text-xl font-bold mb-8">Job Seeker</div>
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout