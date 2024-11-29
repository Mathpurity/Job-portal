import { getJobs } from '@/api/apijobs'
import React, { useEffect } from 'react'

const JobListing = () => {


  return (
   useEffect(() => {

    getJobs()
   })
  )
}

export default JobListing