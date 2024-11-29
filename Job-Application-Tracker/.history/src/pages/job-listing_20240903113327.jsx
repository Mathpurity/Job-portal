import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';


const JobListing = () => {

 

useFetch(getJobs)

  return 
   
  
};

export default JobListing;