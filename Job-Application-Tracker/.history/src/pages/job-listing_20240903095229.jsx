import { getJobs } from '@/api/apijobs'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const JobListing = () => {

  const { session } =useSession()

    const fetch

  useEffect(() => {

    getJobs()
   })

  return (
   
  )
}

export default JobListing