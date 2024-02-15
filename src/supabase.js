import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bkxkptxqjpdyzazlrgof.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreGtwdHhxanBkeXphemxyZ29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5ODYwNTIsImV4cCI6MjAyMzU2MjA1Mn0.4r0MoW02OynmIACahfZSZp44EBo7QoZIHCLo54-U5Kg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
