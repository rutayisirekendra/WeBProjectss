import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  UserCircle, 
  Briefcase, 
  ClipboardList, 
  Star, 
  MessageSquare 
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: UserCircle, label: 'Profile', path: '/profile' },
  { icon: Briefcase, label: 'Job Postings', path: '/jobs' },
  { icon: ClipboardList, label: 'Applications', path: '/applications' },
  { icon: Star, label: 'Shortlisted', path: '/shortlisted' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-gray-100 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-8">Recruiter Dashboard</h1>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}