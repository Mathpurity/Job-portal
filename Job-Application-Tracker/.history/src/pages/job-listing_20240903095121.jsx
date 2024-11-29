import { getJobs } from '@/api/apijobs'
import React, { useEffect } from 'react'

const JobListing = () => {

  const { sess}

  useEffect(() => {

    getJobs()
   })

  return (
   
  )
}

export default JobListing