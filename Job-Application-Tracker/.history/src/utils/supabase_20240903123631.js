import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function getJobs(token) {
    // Create a Supabase client with the authorization token
    const supabase = createClient(supabaseUrl, supabaseKey, {
        global: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    });

    // Fetch jobs from the "jobs" table
    const { data, error } = await supabase.from("jobs").select("*");

    if (error) {
        console.error("Error fetching Jobs:", error);
        return null; // Handle the error appropriately
    }
    return data; // Return the fetched data
}