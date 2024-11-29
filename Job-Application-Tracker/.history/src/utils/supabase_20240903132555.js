import { SupabaseClient cre} from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a Supabase client
const supabase = new SupabaseClient(supabaseUrl, supabaseKey);

export async function getJobs(token) {
    // Set up headers directly in the request
    const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .headers({ Authorization: `Bearer ${token}` });

    if (error) {
        console.error("Error fetching Jobs:", error);
        return null; // Handle the error appropriately
    }
    return data; // Return the fetched data
}
