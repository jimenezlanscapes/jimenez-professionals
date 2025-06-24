
// pages/api/saveProfile.js
import { supabase } from '../../supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, phone } = req.body;

    const { error } = await supabase
      .from('profiles')
      .upsert([{ email, name, phone }], { onConflict: ['email'] });

    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ success: true });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
