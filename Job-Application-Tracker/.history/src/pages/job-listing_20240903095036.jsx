import { getJobs } from '@/api/apijobs'
import React, { useEffect } from 'react'

const JobListing = () => {

  useEffect(() => {

    getJobs()
   })
   
  return (
   
  )
}

export default JobListing