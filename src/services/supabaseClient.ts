import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wsgamiiircgolprphhna.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZ2FtaWlpcmNnb2xwcnBoaG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2ODM2NDEsImV4cCI6MjAwMjI1OTY0MX0.gkM-9D6FGxnQfVD3QXq2pWAKImdIVU_64vCdi0VyGA0';
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
