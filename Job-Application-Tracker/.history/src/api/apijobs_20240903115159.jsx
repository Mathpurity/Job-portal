import { SupabaseClient } from "@supabase/supabase-js";

export async function getJobs(token, { location, company_id, searchQuery }) {
    const supabase = await SupabaseClient(token);    

    let query = supabase.from("jobs").select("*");

    if(location) {
        query = query.eq("location", location);
    }

    if(location) {
        query = query.eq("comp", company_id);
    }

    if(location) {
        query = query.eq("location", searchQuery);
    }
    const { data, error } = await query

    if (error) {
        console.log("Error fetching Jobs:", error);
        return null;
    }

    return data;
}