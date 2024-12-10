import { useState } from 'react'
import { Search } from 'lucide-react'
import JobCard from '../components/JobCard'
import JobDetailsModal from '../components/JobDetailsModal'

const jobCategories = ['All', 'IT', 'Finance', 'Marketing', 'Design']

const mockJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior React Developer to join our team...',
    fullDescription: `We are seeking an experienced Senior React Developer to join our dynamic team. The ideal candidate will have a strong foundation in React.js and modern web development practices.

Key Responsibilities:
• Lead development of complex React applications
• Mentor junior developers
• Implement best practices and coding standards
• Collaborate with UI/UX designers

Requirements:
• 5+ years of experience with React.js
• Strong understanding of JavaScript/ES6+
• Experience with Redux or similar state management
• Knowledge of modern frontend build tools
• Experience with REST APIs and GraphQL
• Bachelor's degree in Computer Science or related field`,
    category: 'IT',
    isRemote: true,
    type: 'Full-time',
    requirements: [
      'React.js expertise',
      'JavaScript/ES6+',
      'Redux',
      'REST APIs',
      'GraphQL',
    ]
  },
  {
    id: 2,
    title: 'Financial Analyst',
    company: 'Finance Pro',
    location: 'New York, NY',
    salary: '$90,000 - $110,000',
    description: 'Seeking an experienced Financial Analyst to join our team...',
    fullDescription: `We're looking for a detail-oriented Financial Analyst to join our growing team. This role will be crucial in supporting our financial planning and analysis efforts.

Key Responsibilities:
• Prepare financial reports and forecasts
• Analyze market trends
• Support budget planning
• Develop financial models

Requirements:
• 3+ years of financial analysis experience
• Strong Excel skills
• Knowledge of financial modeling
• Bachelor's degree in Finance or related field`,
    category: 'Finance',
    isRemote: false,
    type: 'Part-time',
    requirements: [
      'Financial analysis',
      'Excel expertise',
      'Financial modeling',
      'Budget planning',
    ]
  },
]

function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedJob, setSelectedJob] = useState(null)
  const [page, setPage] = useState(1)
  const jobsPerPage = 4

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const paginatedJobs = filteredJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage)
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

  const handleApply = () => {
    // Handle job application logic
    console.log('Applying for job:', selectedJob?.title)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Job Search</h1>

      <div className="card">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            {jobCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {paginatedJobs.map(job => (
          <JobCard
            key={job.id}
            {...job}
            onViewDetails={() => setSelectedJob(job)}
            onApply={handleApply}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="btn-secondary"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="btn-secondary"
          >
            Next
          </button>
        </div>
      )}

      <JobDetailsModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={handleApply}
      />
    </div>
  )
}

export default JobSearch