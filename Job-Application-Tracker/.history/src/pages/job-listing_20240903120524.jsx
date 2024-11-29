import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';


const JobListing = () => {
  const [ser]
  const {isLoaded} = useUser

 const {
  fn:fnJobs,
  data: dataJobs,
  loading: loadingJobs,

 } = useFetch(getJobs, {}); 



 useEffect(() => {
  if(isLoaded) fnJobs();
 }, [isLoaded]);

  return <div></div>;
   
  
};

export default JobListing;