import { SupabaseClient } from "@supabase/supabase-js";

export async function getJobs(token, { location, company_id, searchQuery }) {
    const supabase = await SupabaseClient(token);    

    let query = supabase.from("jobs").select("*");

    if(location)

    const { data, error } = await query

    if (error) {
        console.log("Error fetching Jobs:", error);
        return null;
    }

    return data;
}