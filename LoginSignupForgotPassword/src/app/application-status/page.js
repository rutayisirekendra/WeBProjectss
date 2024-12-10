import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const applications = [
  {
    id: 1,
    jobTitle: 'Software Engineer',
    company: 'Tech Co',
    appliedDate: '2023-05-20',
    status: 'pending',
  },
  {
    id: 2,
    jobTitle: 'Product Manager',
    company: 'Innovate Inc',
    appliedDate: '2023-05-18',
    status: 'reviewed',
  },
  {
    id: 3,
    jobTitle: 'UX Designer',
    company: 'Design Studio',
    appliedDate: '2023-05-15',
    status: 'accepted',
  },
  // Add more applications here
]

export default function ApplicationStatus() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Application Status</h1>
      <Table>
        <TableCaption>A list of your recent job applications</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Applied Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.jobTitle}</TableCell>
              <TableCell>{application.company}</TableCell>
              <TableCell>{application.appliedDate}</TableCell>
              <TableCell>
                <Badge variant={
                  application.status === 'accepted' ? 'success' :
                  application.status === 'rejected' ? 'destructive' :
                  application.status === 'reviewed' ? 'warning' : 'default'
                }>
                  {application.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

