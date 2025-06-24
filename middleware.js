
// middleware.js
import { NextResponse } from 'next/server';
import { supabase } from './supabaseClient';

export async function middleware(req) {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}
