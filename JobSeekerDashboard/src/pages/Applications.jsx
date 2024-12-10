import { useState } from 'react'
import StatusBadge from '../components/StatusBadge'
import Modal from '../components/Modal'

const mockApplications = [
  {
    id: 1,
    jobTitle: 'Senior React Developer',
    company: 'Tech Corp',
    appliedDate: '2024-03-10',
    status: 'interviewed',
    notes: 'Technical interview scheduled for next week',
  },
  {
    id: 2,
    jobTitle: 'Frontend Developer',
    company: 'Innovation Labs',
    appliedDate: '2024-03-08',
    status: 'pending',
    notes: 'Application under review',
  },
]

function Applications() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedApplication, setSelectedApplication] = useState(null)

  const filteredApplications = mockApplications.filter(app => 
    selectedStatus === 'all' || app.status === selectedStatus
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Applications</h1>

      <div className="flex gap-2 mb-6">
        {['all', 'pending', 'interviewed', 'rejected', 'accepted'].map(status => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-md ${
              selectedStatus === status
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredApplications.map(application => (
          <div key={application.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {application.jobTitle}
                </h3>
                <p className="text-gray-600">{application.company}</p>
              </div>
              <StatusBadge status={application.status} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">
                Applied: {new Date(application.appliedDate).toLocaleDateString()}
              </p>
              <button
                onClick={() => setSelectedApplication(application)}
                className="btn-secondary"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedApplication}
        onClose={() => setSelectedApplication(null)}
        title="Application Details"
      >
        {selectedApplication && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">{selectedApplication.jobTitle}</h3>
              <p className="text-gray-600">{selectedApplication.company}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">
                Applied: {new Date(selectedApplication.appliedDate).toLocaleDateString()}
              </p>
              <StatusBadge status={selectedApplication.status} />
            </div>
            <div>
              <h4 className="font-medium mb-2">Notes</h4>
              <p className="text-gray-700">{selectedApplication.notes}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Applications