import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useEffect } from 'react';


const JobListing = () => {

 const {
  fn:fnJobs,
  data: dataJobs,
  loading: loadingJobs,

 } = useFetch(getJobs, {}); 

 useEffect(() => {
  
 })



  return 
   
  
};

export default JobListing;