import { createClient } from "@supabase/supabase-js";

export async function getJobs(token, { location, company_id, searchQuery }) {
    // Create a Supabase client
    const supabaseUrl = 'import.meta.env.VITE_SUPABASE_URL;'; // Replace with your Supabase URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;; // Use the provided token for the key
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Start building the query
    let query = supabase.from("jobs").select("*");

    if (location) {
        query = query.eq("location", location);
    }

    if (company_id) {
        query = query.eq("company_id", company_id);
    }

    if (searchQuery) {
        query = query.ilike("title", `%${searchQuery}%`);
    }

    // Execute the query
    const { data, error } = await query;

    if (error) {
        console.log("Error fetching Jobs:", error);
        return null;
    }

    return data;
}
