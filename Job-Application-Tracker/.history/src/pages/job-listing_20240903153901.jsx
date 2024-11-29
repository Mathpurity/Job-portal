import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useSession } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const JobListing = () => {
  const { session } = useSession(); // Access the session object correctly
 
  const fn = async (...args)
}

export default JobListing;
