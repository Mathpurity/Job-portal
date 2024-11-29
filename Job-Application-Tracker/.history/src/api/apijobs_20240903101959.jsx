import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with your Supabase URL and Anon/Public API key
const SUPABASE_URL = "your-supabase-url"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "your-anon-key"; // Replace with your Supabase Anon/Public API key

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function getJobs(token) {
    // Set the authorization token in the headers
    supabase.auth.setAuth(token);

    try {
        const { data, error } = await supabase.from("jobs").select("*");
        if (error) {
            console.log("Error fetching Jobs:", error);
            return null;
        }
        return data;
    } catch (err) {
        console.error("Unexpected error fetching jobs:", err);
        return null;
    }
}