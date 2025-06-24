import React, { useEffect, useState } from "react";

export default function HomePage() {
  const quotes = [
    "Landscaping Excellence in The Villages, FL",
    "Bringing Natural Beauty to Every Backyard",
    "Green Spaces, Masterfully Crafted",
    "Transforming Yards into Paradise",
    "Nature Meets Design in Every Job",
    "Precision Landscaping with a Personal Touch",
    "Curb Appeal That Turns Heads",
    "Your Dream Landscape Starts Here",
    "Creating Outdoor Spaces You'll Love"
  ];

  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[index]);
  }, []);

  return (
    <div className="bg-[#f0f8f0] min-h-screen text-[#3e4c35] font-sans">
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#4e7938]">Jimenez Landscaping, LLC</span>
        </div>
        <nav className="flex space-x-6 text-sm font-semibold">
          <a href="#home" className="text-[#4e7938] hover:text-[#76a05b]">Home</a>
          <a href="#services" className="text-[#4e7938] hover:text-[#76a05b]">Services</a>
          <a href="#login" className="text-[#4e7938] hover:text-[#76a05b]">Client Login</a>
          <a
  href="mailto:info@jimenezlandscaping.com?subject=Request%20for%20Quote"
  className="bg-[#8db580] text-white px-4 py-1 rounded hover:bg-[#a0c49b]"
>
  Get a Quote
</a>

        </nav>
      </header>

      <main className="relative">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-10 text-center px-6 py-32 bg-cover bg-center"
             style={{ backgroundImage: 'url("/assets/hero-background.jpg")' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg animate-fadeIn">
            {randomQuote}
          </h1>
          <p className="text-lg text-white mb-8 drop-shadow-md">
            Transforming your outdoor spaces with precision, professionalism, and passion.
          </p>
          <a href="/quote" className="bg-[#4e7938] hover:bg-[#76a05b] text-white px-6 py-3 rounded font-semibold text-lg inline-block">
            Get a Free Quote
          </a>
        </div>
      </main>

      <section id="services" className="mt-20 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
        <a href="/services/quarterly-maintenance">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Quarterly Maintenance</h3>
            <p className="text-sm text-[#3e4c35]">Scheduled service to keep your landscape in pristine condition all year long.</p>
          </div>
        </a>
        <a href="/services/stonewall-installation">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">🧱</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Stonewall Installation & Repair</h3>
            <p className="text-sm text-[#3e4c35]">Durable, beautiful stone features that frame your property with style.</p>
          </div>
        </a>
        <a href="/services/rock-mulch-refresh">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">🪨</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Rock & Mulch Refresh</h3>
            <p className="text-sm text-[#3e4c35]">Fresh materials for a polished, clean, and vivid landscape bed.</p>
          </div>
        </a>
        <a href="/services/planting-removal">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">🌺</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Planting & Removal</h3>
            <p className="text-sm text-[#3e4c35]">Expert planting and careful removal for optimal landscape balance.</p>
          </div>
        </a>
        <a href="/services/sod-installation">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Sod Installation</h3>
            <p className="text-sm text-[#3e4c35]">Instant lawns laid with care and lasting quality.</p>
          </div>
        </a>
        <a href="/services/palm-tree-trimming">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">🌴</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Palm & Tree Trimming</h3>
            <p className="text-sm text-[#3e4c35]">Shaping and maintaining palms and trees with expert care.</p>
          </div>
        </a>
        <a href="/services/powerwashing">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">🧼</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Soft & Hard Powerwash</h3>
            <p className="text-sm text-[#3e4c35]">Thorough exterior cleaning for all surfaces with soft and pressure options.</p>
          </div>
        </a>
      
        <a href="/services/custom-concrete-slabs">
          <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
            <div className="text-4xl mb-3">🧱</div>
            <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Custom Concrete Slabs</h3>
            <p className="text-sm text-[#3e4c35]">Durable, tailor-made concrete slab installations for patios, sheds, and walkways.</p>
          </div>
        </a>

      </section>

      
    <footer className="bg-green-900 text-white text-sm p-6 text-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center text-left sm:text-center">
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
      <h3 className="font-semibold mb-2">Social Media</h3>
      <ul>
        <li><a href="https://facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div className="mt-4 text-gray-400">&copy; {new Date().getFullYear()} Jimenez Landscaping, LLC</div>
</footer>
    <footer className="bg-[#f0f8f0] text-[#4e7938] text-center py-8 border-t border-[#8aa765] mt-10">
        <p className="mb-4 text-sm">Scan the QR code to access our client portal:</p>
        <img src="/assets/qr-code.png" alt="Client Portal QR Code" className="mx-auto w-24 h-24 object-contain" />
      </footer>
    </div>
  );
}
