import { createClient } from '@supabase/supabase-js';

// Initializing the Supabase client with URL and Key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create a Supabase client with a specific token
export const supabaseClient = async (supabaseAccessToken) => {
    // Set the token in the headers of the existing client
    supabase.auth.setAuth(supabaseAccessToken);
    return supabase;
};

export default supabase;
