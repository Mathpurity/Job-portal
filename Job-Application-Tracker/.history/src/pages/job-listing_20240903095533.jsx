import { getJobs } from '@/api/apijobs'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const JobListing = () => {

  const { session } =useSession()

    const fetchJobs = await() => {
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });
      getJobs(supabaseAccessToken);
    };

  useEffect(() => {

    getJobs()
   })

  return (
   
  )
}

export default JobListing