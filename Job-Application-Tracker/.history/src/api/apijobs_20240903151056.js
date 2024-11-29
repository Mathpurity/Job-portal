import { SupabaseClient } from "@supabase/supabase-js";


export async function getJobs(token, {  }) {
    const client = await SupabaseClient(token);    

    let query = client.from("jobs").select("*");

    if(location) {
        query = query.eq("location", location);
    }

    if(location) {
        query = query.eq("company_id", company_id);
    }

    if(location) {
        query = query.ilike("title", `%${searchQuery}%`);
    }
    const { data, error } = await query

    if (error) {
        console.log("Error fetching Jobs:", error);
        return null;
    }

    return data;
}