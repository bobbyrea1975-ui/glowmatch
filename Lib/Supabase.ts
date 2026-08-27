import { createClient } from '@supabase/supabase-js';

// These come from your Supabase project settings — see .env.example.
// Safe to expose on the client: the anon key only grants what your
// Row Level Security policies allow.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
