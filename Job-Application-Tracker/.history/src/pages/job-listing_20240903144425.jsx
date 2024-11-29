import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useSession, useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const JobListing = () => {

  const { session } = useSession()
  
  const fetchJobs = async() => {
    const supabaseAccessToken = await session.getToken({
      template: "client",
    });
    const data = await getJobs(supabaseAccessToken);
    console.log()
  };

  useEffect(() => {

  }, []);

  return <div><h1>Latest Job</h1> </div>
  
};

export default JobListing;
