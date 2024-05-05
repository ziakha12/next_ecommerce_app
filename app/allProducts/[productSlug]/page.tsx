"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'

function page({ params }: any) {
  return (
    <div className='h-[100vh] flex mx-auto w-full flex-col gap-2 p-4  bg-[#F4F4F5]'>
      <h1>product : {params.productSlug}</h1>
      <h2><Link href={'/'} className='text-[#1E2832] text-[16px]'>back to home</Link></h2>
    </div>
  )
}

export default page
