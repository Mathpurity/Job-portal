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
    getJobs(su);
  };

  useEffect(() => {

  }, [])
  
};

export default JobListing;
