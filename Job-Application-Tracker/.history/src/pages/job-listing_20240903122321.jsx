import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';


const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const {isLoaded} = useUser

 const {
  fn:fnJobs,
  data: dataJobs,
  loading: loadingJobs,

 } = useFetch(getJobs, {
  location,
  company_id,
  searchQuery,
 }); 



 useEffect(() => {
  if(isLoaded) fnJobs();
 }, [isLoaded, location, company_id, searchQuery]);


 if (!isLoaded) {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <PacmanLoader className='mb-4' width={'100%'} color='#36d7b7' />
    </div>
  );
}

  return <div></div>;
   
  
};

export default JobListing;