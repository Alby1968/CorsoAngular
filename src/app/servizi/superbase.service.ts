
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xkbzssfhtqmwiorpetpe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYnpzc2ZodHFtd2lvcnBldHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5Mzg3MDcsImV4cCI6MjA1MjUxNDcwN30.Qt6CFFitcZ2ftG7uBE2_VFu_PBgUUXpW2z2-8ARId8U';


export const superbase = createClient(supabaseUrl, supabaseKey);
  

