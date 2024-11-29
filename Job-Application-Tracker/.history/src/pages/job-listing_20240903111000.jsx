import { getJobs } from '@/api/apijobs';
import { useSession } from '@clerk/clerk-react';
import  { useEffect } from 'react';

const JobListing = () => {

  const { session } =useSession()

    const fetchJobs = async () => {
      c
      });
      const data = await getJobs(supabaseAccessToken);
      console.log(data);
    };
  useEffect(() => {
    fetchJobs();
  }, []);

  return 
   
  
};

export default JobListing;