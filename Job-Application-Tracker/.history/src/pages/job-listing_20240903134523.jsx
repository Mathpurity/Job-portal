import
import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser(); // Correct usage of useUser

  const {
    fn: fetchJobs,
    data: jobsData,
    loading: isLoading,
    error: fetchError
  } = useFetch(getJobs, { location, company_id, searchQuery });

  useEffect(() => {
    if (isLoaded) {
      fetchJobs(); // Trigger fetch only when isLoaded is true
    }
  }, [isLoaded, location, company_id, searchQuery]);

  if (!isLoaded || isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <PacmanLoader className='mb-4' width={'100%'} color='#36d7b7' />
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <p>Error fetching jobs: {fetchError.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className='gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8'>
        Latest Jobs
      </h1>
      {/* Render job listings here */}
      {jobsData && jobsData.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          {/* Add more job details as needed */}
        </div>
      ))}
    </div>
  );
};

export default JobListing;
