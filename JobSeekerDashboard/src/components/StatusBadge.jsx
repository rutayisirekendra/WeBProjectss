import { memo } from 'react'

const statusColors = {
  pending: 'bg-status-pending',
  interviewed: 'bg-status-interviewed',
  rejected: 'bg-status-rejected',
  accepted: 'bg-status-accepted'
}

function StatusBadge({ status }) {
  return (
    <span className={`${statusColors[status]} px-3 py-1 rounded-full text-white text-sm font-medium`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export default memo(StatusBadge)