import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cihjxhdpmykqamvpopjr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpaGp4aGRwbXlrcWFtdnBvcGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5MTQxODgsImV4cCI6MjA0ODQ5MDE4OH0.5tyHDatjEbW92GSwGpCpLhUPh4QbahOzowo8AP-qPQ4';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});