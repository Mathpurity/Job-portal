import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';


const JobListing = () => {

 const {
  fn:fnJobs

 }useFetch(getJobs)



  return 
   
  
};

export default JobListing;