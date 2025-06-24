
export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-700">Jimenez Landscaping</div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-4xl font-bold text-green-800 mb-4">Coming Soon</h1>
          <p className="text-gray-700 text-lg">Our sign-up feature is under construction. Please check back soon!</p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-sm p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="mailto:info@jimenezlandscaping.com" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
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
        <div className="text-center mt-4 text-gray-400">&copy; {new Date().getFullYear()} Jimenez Landscaping, LLC</div>
      </footer>
    </div>
  );
}
