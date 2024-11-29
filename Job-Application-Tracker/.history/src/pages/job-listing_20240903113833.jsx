import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';


const JobListing = () => {

 const {
  fn:fnJobs,
  data: dataJobs,
  loading: loadingJobs,

 } = useFetch(getJobs, {}); 

 use



  return 
   
  
};

export default JobListing;