import DashboardBanner from '@/app/(back-office)/components/dashboard/DashboardBanner'
import SalesOverview from '@/app/(back-office)/components/dashboard/SalesOverview'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <DashboardBanner/>
      <SalesOverview/>
      <h2>Dashboard</h2>
    </div>
  )
}
