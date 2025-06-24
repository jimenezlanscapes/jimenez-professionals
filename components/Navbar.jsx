
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-100 px-8 py-5 shadow-lg flex items-center justify-between">
      <div className="text-2xl font-extrabold text-green-800">
        Jimenez Landscaping, LLC
      </div>
      <div className="flex gap-8 text-green-900 font-semibold items-center">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <a
          href="mailto:info@jimenezlandscaping.com?subject=Request%20for%20Quote"
          className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Get Quote
        </a>
      </div>
    </nav>
  );
}
