// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wdpawlpaqqwbnsmylxeq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkcGF3bHBhcXF3Ym5zbXlseGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MTY0ODAsImV4cCI6MjA1NTk5MjQ4MH0.TwtEZ2YIKzUl1wAqt4OdrY1e2kPxtVn53pIeHDnMg0w";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);