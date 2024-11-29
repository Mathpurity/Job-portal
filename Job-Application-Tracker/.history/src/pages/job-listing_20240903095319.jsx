import { getJobs } from '@/api/apijobs'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const JobListing = () => {

  const { session } =useSession()

    const fetchJobs = () => {
      const supabaseAccessToken = await session.getToken
    }

  useEffect(() => {

    getJobs()
   })

  return (
   
  )
}

export default JobListing