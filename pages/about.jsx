import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-700">Jimenez Landscaping</div>
        <nav className="space-x-4">
          <Link href="/"><span className="hover:underline cursor-pointer">Home</span></Link>
          <Link href="/services"><span className="hover:underline cursor-pointer">Services</span></Link>
          <Link href="/login"><span className="hover:underline cursor-pointer">Client Login</span></Link>
        </nav>
      </header>

      <main className="flex-grow p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-4">About Us</h1>
        <div className="text-lg space-y-4">
          <p>Jimenez Landscaping, LLC is dedicated to transforming outdoor spaces into beautiful, functional landscapes. Our specialty lies in hardscapes, including pavers, retaining walls, and custom stonework. With years of experience, top-tier tools, and unmatched attention to detail, we ensure that every project exceeds expectations.</p>
        </div>
      </main>

      <footer className="bg-[#4e7938] text-white text-sm p-6 text-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center text-left sm:text-center">
    <div>
      <h3 className="font-semibold mb-2">Company</h3>
      <ul>
        <li><Link href="/about"><span className="hover:underline cursor-pointer">About Us</span></Link></li>
        <li><a href="mailto:info@jimenezlandscaping.com" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Legal</h3>
      <ul>
        <li><Link href="/privacy"><span className="hover:underline cursor-pointer">Privacy Policy</span></Link></li>
        <li><Link href="/terms"><span className="hover:underline cursor-pointer">Terms of Service</span></Link></li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Follow Us</h3>
      <ul>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div className="mt-4 text-gray-200">&copy; {new Date().getFullYear()} Jimenez Landscaping, LLC</div>
</footer>
    </div>
  );
}
