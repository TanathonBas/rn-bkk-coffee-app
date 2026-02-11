import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wxmjcusrqmmqbhabwbik.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bWpjdXNycW1tcWJoYWJ3YmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxODM3MDEsImV4cCI6MjA4NTc1OTcwMX0.24sGbnwn1HQIRggqRKqNBuHUhRvRmVH1hLB7zmuohiY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
