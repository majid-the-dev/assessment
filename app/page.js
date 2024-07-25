import UsersTable from '@/components/UsersTable'
import React from 'react'

const Page = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <p className='text-[#98A2B3] text-sm font-light'>Settings / Users & Roles Settings</p>
      {/* Heading */}
      <h1 className='text-[#1D2739] text-2xl font-bold mt-10'>Users & Roles</h1>
      <p className='text-[#98A2B3] text-sm font-light mt-2'>Manage all users in your business</p>
      <div className="flex items-center gap-2 mt-8">
        <button className="text-sm font-medium text-primaryBlue border-b-2 border-primaryBlue px-4 py-2">Users</button>
        <button className="text-sm font-light text-[#98A2B3] px-4 py-2">Roles</button>
      </div>
      <UsersTable />
    </div>
  )
}

export default Page