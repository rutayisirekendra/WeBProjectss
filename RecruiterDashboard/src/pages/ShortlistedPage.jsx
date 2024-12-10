import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Dialog } from '../components/ui/Dialog';
import { Pagination } from '../components/ui/Pagination';
import { FileText, Download } from 'lucide-react';

const ITEMS_PER_PAGE = 4;

const shortlistedCandidates = [
  {
    id: '1',
    jobId: '1',
    job: {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      employmentType: 'Full-time',
    },
    candidateName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 123-4567',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    experience: '5 years',
    education: {
      degree: 'Master of Computer Science',
      institution: 'MIT',
      graduationYear: '2018',
    },
    coverLetter: 'I am excited to join your team...',
    resumeUrl: 'https://example.com/resume.pdf',
    status: 'interview_scheduled',
    appliedDate: '2024-03-01',
   
  },
  // Add more shortlisted candidates here
];

export function ShortlistedPage() {
  const [candidates, setCandidates] = useState(shortlistedCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedCandidates = candidates.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Shortlisted Candidates</h1>
        <p className="mt-1 text-gray-600">Review and manage shortlisted candidates.</p>
      </div>

      <div className="grid gap-4">
        {paginatedCandidates.map((candidate) => (
          <Card key={candidate.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {candidate.candidateName}
                  </h3>
                  <p className="text-sm text-gray-600">{candidate.email}</p>
                  <p className="text-sm text-gray-600">{candidate.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Position: {candidate.job.title}</p>
                  <p className="text-sm text-gray-600">
                    {candidate.job.location} • {candidate.job.employmentType}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-teal-50 text-teal-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {candidate.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                      +{candidate.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end space-y-3">
                <Badge status={candidate.status}>
                  {candidate.status.replace('_', ' ').toUpperCase()}
                </Badge>
                <Button
                  size="sm"
                  onClick={() => setSelectedCandidate(candidate)}
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {candidates.length > ITEMS_PER_PAGE && (
          <div className="mt-6">
            <Pagination
              pageCount={Math.ceil(candidates.length / ITEMS_PER_PAGE)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      <Dialog
        isOpen={!!selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        title="Candidate Profile"
      >
        {selectedCandidate && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900">Personal Information</h3>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Name:</span> {selectedCandidate.candidateName}</p>
                  <p><span className="font-medium">Email:</span> {selectedCandidate.email}</p>
                  <p><span className="font-medium">Phone:</span> {selectedCandidate.phone}</p>
                  <p><span className="font-medium">Experience:</span> {selectedCandidate.experience}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Job Details</h3>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Position:</span> {selectedCandidate.job.title}</p>
                  <p><span className="font-medium">Location:</span> {selectedCandidate.job.location}</p>
                  <p><span className="font-medium">Type:</span> {selectedCandidate.job.employmentType}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedCandidate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-teal-50 text-teal-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Education</h3>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Degree:</span> {selectedCandidate.education.degree}</p>
                <p><span className="font-medium">Institution:</span> {selectedCandidate.education.institution}</p>
                <p><span className="font-medium">Graduation Year:</span> {selectedCandidate.education.graduationYear}</p>
              </div>
            </div>

            {selectedCandidate.coverLetter && (
              <div>
                <h3 className="font-medium text-gray-900">Cover Letter</h3>
                <p className="mt-2 text-gray-600">{selectedCandidate.coverLetter}</p>
              </div>
            )}

            <div className="flex items-center space-x-4">
              <Button
                variant="secondary"
                className="flex items-center space-x-2"
                onClick={() => window.open(selectedCandidate.resumeUrl, '_blank')}
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </Button>
              <Button
                variant="secondary"
                className="flex items-center space-x-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = selectedCandidate.resumeUrl;
                  link.download = `${selectedCandidate.candidateName.replace(' ', '_')}_Resume.pdf`;
                  link.click();
                }}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>

            {selectedCandidate.portfolio && (
              <div>
                <h3 className="font-medium text-gray-900">Portfolio</h3>
                <a
                  href={selectedCandidate.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-teal-600 hover:text-teal-700"
                >
                  View Portfolio
                </a>
              </div>
            )}
          </div>
        )}
      </Dialog>
    </div>
  );
}