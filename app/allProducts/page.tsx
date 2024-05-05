import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div className='h-[100vh]  gap-2 p-4 flex flex-col bg-[#F4F4F5]'>
      <h1>All Products</h1>
      <h2><Link href={'/'} className='text-[#1E2832] text-[16px]'>back to home</Link></h2>
    </div>
  )
}

export default Page
