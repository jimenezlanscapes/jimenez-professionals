
import React from "react";

export default function CustomConcreteSlabs() {
  const images = [
    "/assets/concrete1.jpg",
    "/assets/concrete2.jpg"
  ];

  return (
    <div className="bg-[#f0f8f0] min-h-screen text-[#3e4c35] font-sans">
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#4e7938]">Jimenez Landscaping, LLC</span>
        </div>
        <nav className="flex space-x-6 text-sm font-semibold">
          <a href="/" className="text-[#4e7938] hover:text-[#76a05b]">Home</a>
          <a href="/#services" className="text-[#4e7938] hover:text-[#76a05b]">Services</a>
          <a href="#login" className="text-[#4e7938] hover:text-[#76a05b]">Client Login</a>
          <a href="mailto:info@jimenezlandscaping.com?subject=Request%20for%20Quote" className="bg-[#8db580] text-white px-4 py-1 rounded hover:bg-[#a0c49b]">Get a Quote</a>
        </nav>
      </header>

      <main className="px-6 md:px-16 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4e7938]">Custom Concrete Slabs</h1>
        <p className="text-lg mb-6 max-w-3xl">We design and install high-quality concrete slabs tailored to your space—perfect for patios, walkways, sheds, hot tub bases, and more. Every slab is poured and finished with precision to ensure strength, drainage, and durability.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Concrete Slab ${idx + 1}`} className="rounded-lg shadow-md" />
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:info@jimenezlandscaping.com?subject=Quote%20Request%20for%20Custom%20Concrete%20Slabs" className="bg-[#4e7938] hover:bg-[#3c5d2f] text-white px-6 py-3 rounded-full font-bold">
            Request a Free Quote
          </a>
        </div>
      </main>

      <footer className="bg-[#4e7938] text-white text-sm p-6 text-center">
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
        <div className="mt-4 text-gray-200">&copy; {new Date().getFullYear()} Jimenez Landscaping, LLC</div>
      </footer>
    </div>
  );
}
