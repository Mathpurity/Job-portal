import { SupabaseClient } from "@supabase/supabase-js";


export async function getJobs(token, { location, company_id, searchQuery }) {
    const client = await SupabaseClient(token);    

    let query = client.from("jobs").select("*");

   

    if (error) {
        console.log("Error fetching Jobs:", error);
        return null;
    }

    return data;
}