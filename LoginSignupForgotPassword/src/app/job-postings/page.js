"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const jobPostings = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Co',
    description: 'We are looking for a skilled software engineer to join our team.',
    requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience',
    salary: '$80,000 - $120,000',
    location: 'San Francisco, CA',
    postedDate: '2023-05-15',
  },
  // Add more job postings here
]

export default function JobPostings() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedJob, setSelectedJob] = useState<typeof jobPostings[0] | null>(null)

  const filteredJobs = jobPostings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Job Postings</h1>
      <Input
        type="search"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{job.company}</p>
              <p className="mt-2">{job.description}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedJob(job)}>View Details</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{selectedJob?.title}</DialogTitle>
                    <DialogDescription>{selectedJob?.company}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2">
                    <p><strong>Description:</strong> {selectedJob?.description}</p>
                    <p><strong>Requirements:</strong> {selectedJob?.requirements}</p>
                    <p><strong>Salary Range:</strong> {selectedJob?.salary}</p>
                    <p><strong>Location:</strong> {selectedJob?.location}</p>
                    <p><strong>Posted Date:</strong> {selectedJob?.postedDate}</p>
                  </div>
                  <DialogFooter>
                    <Button>Apply Now</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

