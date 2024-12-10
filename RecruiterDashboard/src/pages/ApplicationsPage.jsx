import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Dialog } from '../components/ui/Dialog';
import { Tabs } from '../components/ui/Tabs';
import { Pagination } from '../components/ui/Pagination';
import { FileText, Download, Mail } from 'lucide-react';
import { sendEmail, replaceTemplateVariables } from '../utils/email';

const ITEMS_PER_PAGE = 4;

const tabs = [
  { id: 'all', label: 'All Applications' },
  { id: 'pending', label: 'Pending' },
  { id: 'under_review', label: 'Under Review' },
  { id: 'interview_scheduled', label: 'Interview Scheduled' },
  { id: 'offer_made', label: 'Offer Made' },
  { id: 'rejected', label: 'Rejected' },
];

const initialApplications = [
  {
    id: '1',
    jobId: '1',
    job: {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      employmentType: 'Full-time',
    },
    candidateName: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    skills: ['React', 'JavaScript', 'Node.js', 'GraphQL', 'AWS'],
    experience: '7 years',
    education: {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      graduationYear: '2016',
    },
    coverLetter: 'I am excited to apply for the Senior Frontend Developer position...',
    resumeUrl: 'https://example.com/resume.pdf',
    status: 'pending',
    appliedDate: '2024-03-01',
    portfolio: 'https://github.com/johnsmith',
    references: [
      {
        name: 'Jane Doe',
        position: 'Engineering Manager',
        company: 'Previous Corp',
        phone: '+1 (555) 987-6543',
        email: 'jane.doe@previous.com',
      },
    ],
  },
  // Add more sample applications here
];

export function ApplicationsPage() {
  const [applications, setApplications] = useState(initialApplications);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredApplications = applications.filter(
    (app) => activeTab === 'all' || app.status === activeTab
  );

  const paginatedApplications = filteredApplications.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleStatusChange = (applicationId, newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === applicationId ? { ...app, status: newStatus } : app
      )
    );

    const application = applications.find((app) => app.id === applicationId);
    if (application) {
      const emailVariables = {
        candidateName: application.candidateName,
        position: application.job.title,
        company: application.job.company,
      };

      let emailTemplate = '';
      switch (newStatus) {
        case 'interview_scheduled':
          emailTemplate = 'We would like to schedule an interview...';
          break;
        case 'rejected':
          emailTemplate = 'Thank you for your interest...';
          break;
        default:
          break;
      }

      if (emailTemplate) {
        const emailContent = replaceTemplateVariables(emailTemplate, emailVariables);
        sendEmail(application.email, `Application Update: ${application.job.title}`, emailContent);
      }
    }

    setSelectedApplication(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
        <p className="mt-1 text-gray-600">Manage and review job applications.</p>
      </div>

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <div className="grid gap-4">
        {paginatedApplications.map((application) => (
          <Card key={application.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {application.candidateName}
                  </h3>
                  <p className="text-sm text-gray-600">{application.email}</p>
                  <p className="text-sm text-gray-600">{application.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Applied for: {application.job.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {application.job.location} • {application.job.employmentType}
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Applied: {new Date(application.appliedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-3">
                <Badge status={application.status}>
                  {application.status.replace('_', ' ').toUpperCase()}
                </Badge>
                <Button
                  size="sm"
                  onClick={() => setSelectedApplication(application)}
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredApplications.length > ITEMS_PER_PAGE && (
          <div className="mt-6">
            <Pagination
              pageCount={Math.ceil(filteredApplications.length / ITEMS_PER_PAGE)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      <Dialog
        isOpen={!!selectedApplication}
        onClose={() => setSelectedApplication(null)}
        title="Application Details"
      >
        {selectedApplication && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900">Personal Information</h3>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Name:</span> {selectedApplication.candidateName}</p>
                  <p><span className="font-medium">Email:</span> {selectedApplication.email}</p>
                  <p><span className="font-medium">Phone:</span> {selectedApplication.phone}</p>
                  <p><span className="font-medium">Experience:</span> {selectedApplication.experience}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Job Details</h3>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Position:</span> {selectedApplication.job.title}</p>
                  <p><span className="font-medium">Location:</span> {selectedApplication.job.location}</p>
                  <p><span className="font-medium">Type:</span> {selectedApplication.job.employmentType}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedApplication.skills.map((skill) => (
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
                <p><span className="font-medium">Degree:</span> {selectedApplication.education.degree}</p>
                <p><span className="font-medium">Institution:</span> {selectedApplication.education.institution}</p>
                <p><span className="font-medium">Graduation Year:</span> {selectedApplication.education.graduationYear}</p>
              </div>
            </div>

            {selectedApplication.coverLetter && (
              <div>
                <h3 className="font-medium text-gray-900">Cover Letter</h3>
                <p className="mt-2 text-gray-600">{selectedApplication.coverLetter}</p>
              </div>
            )}

            <div className="flex items-center space-x-4">
              <Button
                variant="secondary"
                className="flex items-center space-x-2"
                onClick={() => window.open(selectedApplication.resumeUrl, '_blank')}
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </Button>
              <Button
                variant="secondary"
                className="flex items-center space-x-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href =selectedApplication.resumeUrl;
                  link.download = `${selectedApplication.candidateName.replace(' ', '_')}_Resume.pdf`;
                  link.click();
                }}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>

          
          </div>
        )}
      </Dialog>
    </div>
  );
}
