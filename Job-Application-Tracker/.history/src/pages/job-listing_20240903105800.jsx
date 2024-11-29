import { getJobs } from '@/api/apijobs';
import { useSession } from '@clerk/clerk-react';
import  { useEffect } from 'react';

const JobListing = () => {
  const { session } = useSession();

  const fetchJobs = async () => {
    try {
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });
      const data = await getJobs(supabaseAccessToken);
      console.log(data); // This should log the fetched data
    } catch (error) {
      console.error("Error fetching jobs:", error); // Log any errors
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [session]); // Add session as a dependency if it may change

  return null; // Return null or any valid JSX
};

export default JobListing;