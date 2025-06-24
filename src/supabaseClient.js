import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ctevaryrkekfdcjljtec.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0ZXZhcnhya2VrZmRjamxqdGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MjAwNTcsImV4cCI6MjA2NTM5NjA1N30.Nw3SE97e6oSd4kq-vrRKZ0s1KO3JWDzYvLBMV8SwJmc'

export const supabase = createClient(supabaseUrl, supabaseKey)
