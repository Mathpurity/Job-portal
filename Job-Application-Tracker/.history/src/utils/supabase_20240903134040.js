
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const supabaseClient = async (supabaseAccessToken) =>{
    const client = createClient(supabaseUrl, supabaseKey, {
        global:{
            headers: {
                Authorization: `Bearer ${supabaseAccessToken}`,
            },
        },
    });
    return ;
};

export default supabase;
        