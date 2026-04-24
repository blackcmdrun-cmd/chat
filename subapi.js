import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://aeutnkbweuslpmrpvdxe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFldXRua2J3ZXVzbHBtcnB2ZHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NDY3NTMsImV4cCI6MjA5MjQyMjc1M30.vUmzvw9PTywxgycam5byajvVpJW3SkHSjpix9r54TKc'

export const supabase = createClient(supabaseUrl, supabaseKey)