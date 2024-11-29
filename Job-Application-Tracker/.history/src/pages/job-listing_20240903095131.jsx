import { getJobs } from '@/api/apijobs'
import React, { useEffect } from 'react'

const JobListing = () => {

  const { session } =Us

  useEffect(() => {

    getJobs()
   })

  return (
   
  )
}

export default JobListing