import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://axutijzoapbmebaubqde.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4dXRpanpvYXBibWViYXVicWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NTcwMzQsImV4cCI6MjAzNDAzMzAzNH0.yiBy5dCxwsJNM9X7DKn9lEoiioiv-m_-gA7HcxVx9IE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
