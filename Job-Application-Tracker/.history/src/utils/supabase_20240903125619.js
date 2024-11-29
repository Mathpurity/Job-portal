import { createClient } from '@supabase/supabase-js';

export async function getJobs(token, { location, company_id, searchQuery }) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Ensure this is correctly set
    const supabaseKey = token; // Use the provided token for the key

    // Ensure the URL and key are defined
    if (!supabaseUrl || !supabaseKey) {
        console.error("Supabase URL or Key is missing.");
        return null;
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Build query
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
        console.error("Error fetching Jobs:", error);
        return null;
    }

    return data;
}
