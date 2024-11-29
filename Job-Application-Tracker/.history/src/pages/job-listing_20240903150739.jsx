import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useSession } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const JobListing = () => {
  const { session } = useSession(); // Access the session object correctly
  
  const fetchJobs = async () => {
    if (session) { // Ensure session is available before using it
      const supabaseAccessToken = await session.getToken({
        template: "client",
      });
      const data = await getJobs(supabaseAccessToken);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchJobs(); // Fetch jobs when the component mounts
  }, []);

  return (
    <div>
      <h1>Latest Job</h1>
    </div>
  );
};

export default JobListing;
