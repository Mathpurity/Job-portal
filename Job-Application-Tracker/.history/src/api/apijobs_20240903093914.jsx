import { SupabaseClient } from "@supabase/supabase-js";

export async function getJobs(token, { location, company_id, searchQuery }) {
    const supabase = await SupabaseClient(token);    
}