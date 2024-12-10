import { Users, Calendar, Eye } from 'lucide-react'

const stats = [
  {
    icon: Users,
    label: 'Job Applications',
    count: 12,
  },
  {
    icon: Calendar,
    label: 'Interviews Scheduled',
    count: 3,
  },
  {
    icon: Eye,
    label: 'Profile Views',
    count: 45,
  },
]

const recentActivity = [
  {
    id: 1,
    action: 'Applied to Frontend Developer position at Tech Corp',
    date: '2024-03-15',
  },
  {
    id: 2,
    action: 'Updated profile skills',
    date: '2024-03-14',
  },
  {
    id: 3,
    action: 'Scheduled interview with Innovation Labs',
    date: '2024-03-13',
  },
]

function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, John!</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {stats.map(({ icon: Icon, label, count }) => (
          <div key={label} className="card">
            <Icon size={24} className="text-primary mb-2" />
            <h3 className="text-lg font-semibold">{label}</h3>
            <p className="text-2xl font-bold text-primary">{count}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map(({ id, action, date }) => (
            <div key={id} className="flex justify-between items-center">
              <p>{action}</p>
              <span className="text-sm text-gray-500">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home