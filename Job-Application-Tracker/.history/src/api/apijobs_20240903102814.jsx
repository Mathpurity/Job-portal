import { supabaseClient } from '../';

export async function getJobs(token) {
    const supabase = supabaseClient(token);
    const { data, error } = await supabase.from("jobs").select("*");

    if (error) {
        console.log("Error fetching Jobs:", error);
        return null;
    }
    return data;
}