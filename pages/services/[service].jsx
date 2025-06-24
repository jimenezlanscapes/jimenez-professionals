import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!service) return;

    async function fetchData() {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("slug", service)
        .single();

      if (!error) setData(data);
    }

    fetchData();
  }, [service]);

  if (!data) return <div className="p-10">Loading...</div>;

  return (
    <div className="bg-[#f0f8f0] min-h-screen text-[#3e4c35] font-sans">
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-xl font-bold text-[#4e7938]">Jimenez Landscaping, LLC</div>
        <nav className="flex space-x-6 text-sm font-semibold">
          <a href="/" className="text-[#4e7938] hover:text-[#76a05b]">Home</a>
          <a href="/#services" className="text-[#4e7938] hover:text-[#76a05b]">Services</a>
          <a href="/login" className="text-[#4e7938] hover:text-[#76a05b]">Client Login</a>
        </nav>
      </header>

      <main className="px-8 py-12">
        <h1 className="text-3xl font-bold text-[#4e7938] mb-6">{data.title}</h1>
        <p className="mb-6">{data.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.images?.map((img, i) => (
            <img key={i} src={img} alt={data.title + ' image ' + i} className="w-full rounded shadow" />
          ))}
        </div>
      </main>

      <footer className="bg-[#f0f8f0] text-[#4e7938] text-center py-8 border-t border-[#8aa765] mt-10">
        <p className="mb-4 text-sm">Scan the QR code to access our client portal:</p>
        <img src="/assets/qr-code.png" alt="Client Portal QR Code" className="mx-auto w-24 h-24 object-contain" />
      </footer>
    </div>
  );
}
