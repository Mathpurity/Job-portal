import { getJobs } from '@/api/apijobs';
import { useSession } from '@clerk/clerk-react';
import  { useEffect } from 'react';

const JobListing = () => {

 

   
  useEffect(() => {
    fetchJobs();
  }, []);

  return 
   
  
};

export default JobListing;