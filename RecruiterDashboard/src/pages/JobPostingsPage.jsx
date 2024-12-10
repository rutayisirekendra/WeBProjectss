import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Dialog } from '../components/ui/Dialog';
import { Textarea } from '../components/ui/Textarea';
import { Pagination } from '../components/ui/Pagination';

const ITEMS_PER_PAGE = 5;

const jobCategories = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'customer_service', label: 'Customer Service' },
];

const employmentTypes = [
  { value: 'full_time', label: 'Full Time' },
  { value: 'part_time', label: 'Part Time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
];

const initialJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    description: 'We are looking for an experienced Frontend Developer...',
    requirements: [
      '5+ years React experience',
      'Strong TypeScript skills',
      'Experience with modern frontend tools',
    ],
    responsibilities: [
      'Lead frontend development initiatives',
      'Mentor junior developers',
      'Architect scalable solutions',
    ],
    salaryRange: { min: 80000, max: 120000 },
    location: 'Remote',
    deadline: '2024-04-01',
    status: 'active',
    postedDate: '2024-03-01',
    category: 'engineering',
    employmentType: 'full_time',
    experience: '5+ years',
    benefits: [
      'Health insurance',
      'Remote work',
      'Flexible hours',
      'Professional development',
    ],
  },
  // Add more sample jobs here
];

export function JobPostingsPage() {
  const [jobs, setJobs] = useState(initialJobs);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !categoryFilter || job.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const paginatedJobs = filteredJobs.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleCreateJob = (e) => {
    e.preventDefault();
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Postings</h1>
          <p className="mt-1 text-gray-600">Manage and create job postings.</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Job Posting
        </Button>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="pl-10"
              placeholder="Search job postings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select
            options={jobCategories}
            value={categoryFilter ? jobCategories.find(c => c.value === categoryFilter) : null}
            onChange={(option) => setCategoryFilter(option?.value || null)}
            placeholder="Filter by category"
          />
        </div>
      </Card>

      <div className="space-y-4">
        {paginatedJobs.map((job) => (
          <Card key={job.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <div className="mt-2 flex gap-2">
                    <span className="px-3 py-1 text-sm bg-teal-50 text-teal-700 rounded-full">
                      {jobCategories.find(c => c.value === job.category)?.label}
                    </span>
                    <span className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
                      {employmentTypes.find(t => t.value === job.employmentType)?.label}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Location:</span> {job.location}
                  </div>
                  <div>
                    <span className="font-medium">Experience:</span> {job.experience}
                  </div>
                  <div>
                    <span className="font-medium">Salary:</span> ${job.salaryRange.min.toLocaleString()} - ${job.salaryRange.max.toLocaleString()}
                  </div>
                </div>
                <p className="text-gray-600 line-clamp-2">{job.description}</p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedJob(job)}
              >
                View Details
              </Button>
            </div>
          </Card>
        ))}

        {filteredJobs.length > ITEMS_PER_PAGE && (
          <div className="mt-6">
            <Pagination
              pageCount={Math.ceil(filteredJobs.length / ITEMS_PER_PAGE)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      <Dialog
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        title={selectedJob?.title || ''}
      >
        {selectedJob && (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">{selectedJob.description}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Responsibilities</h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
                {selectedJob.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Requirements</h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Benefits</h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
                {selectedJob.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Posted:</span>{' '}
                {new Date(selectedJob.postedDate).toLocaleDateString()}
              </div>
              <div>
                <span className="font-medium">Deadline:</span>{' '}
                {new Date(selectedJob.deadline).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}
      </Dialog>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Create New Job Posting"
      >
        <form onSubmit={handleCreateJob} className="space-y-4">
          <Input label="Job Title" required />
          <Select
            label="Category"
            options={jobCategories}
            onChange={() => {}}
            placeholder="Select category"
          />
          <Select
            label="Employment Type"
            options={employmentTypes}
            onChange={() => {}}
            placeholder="Select employment type"
          />
          <Textarea label="Description" required rows={4} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Minimum Salary" type="number" required />
            <Input label="Maximum Salary" type="number" required />
          </div>
          <Input label="Location" required />
          <Input label="Required Experience" required />
          <Input label="Application Deadline" type="date" required />
          <Textarea label="Requirements (one per line)" rows={4} />
          <Textarea label="Responsibilities (one per line)" rows={4} />
          <Textarea label="Benefits (one per line)" rows={4} />
          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Job Posting</Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}