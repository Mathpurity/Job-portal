import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a default Supabase client (without authorization)
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create a Supabase client with authorization
const supabaseClient = (supabaseAccessToken) => {
    return createClient(supabaseUrl, supabaseKey, {
        global: {
            headers: {
                Authorization: `Bearer ${supabaseAccessToken}`,
            },
        },
    });
};

// Export both clients if needed
export { supabase, supabaseClient };