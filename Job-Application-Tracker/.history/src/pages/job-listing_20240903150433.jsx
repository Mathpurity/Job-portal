import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/use-fetch';
import { useSession, useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const JobListing = () => {

  const fetchJobs = async () => {
    const supabaseAccessToken = await session.getToken({
        template: "client",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data, error } = await supabase.from("jobs").select("*");

    if (error) {
        console.error("Error fetching jobs:", error);
        return;
    }

    console.log(data);

  useEffect(() => {
    fetchJobs();
  }, []);

  return <div><h1>Latest Job</h1> </div>
  
};

export default JobListing;
