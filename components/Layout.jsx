import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-green-800 text-white py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Jimenez Landscaping, LLC</h1>
          <div className="space-x-4">
            <Link href="/"><span className="hover:underline">Home</span></Link>
            <Link href="/services"><span className="hover:underline">Services</span></Link>
            <Link href="/login"><span className="hover:underline">Client Login</span></Link>
            <Link href="/signup"><span className="hover:underline">Sign Up</span></Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
