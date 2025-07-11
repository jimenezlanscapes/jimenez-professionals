import React from "react";

export default function QuarterlyMaintenance() {
  const images = [
    "/services/images/quarterly-maintenance/69696225_1280200608820931_5992017112120426496_n.jpg",
    "/services/images/quarterly-maintenance/FB_IMG_1749842211625.jpg",
    "/services/images/quarterly-maintenance/FB_IMG_1749842237829.jpg",
    "/services/images/quarterly-maintenance/IMG_20250603_122132.jpg",
    "/services/images/quarterly-maintenance/IMG_20250616_160826.jpg"
  ];

  return (
    <div className="bg-[#f0f8f0] min-h-screen text-[#3e4c35] font-sans">
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#4e7938]">Jimenez Landscaping, LLC</span>
        </div>
        <nav className="flex space-x-6 text-sm font-semibold">
          <a href="/" className="hover:text-[#4e7938]">Home</a>
          <a href="/#services" className="hover:text-[#4e7938]">Services</a>
          <a href="/about.html" className="hover:text-[#4e7938]">About</a>
          <a href="/contact.html" className="hover:text-[#4e7938]">Contact</a>
        </nav>
      </header>

      <main className="px-6 md:px-16 py-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Quarterly Yard Maintenance</h1>
        <p className="text-lg mb-6">
          Keep your landscape fresh and polished all year long. Our quarterly service ensures bushes are trimmed,
          weeds are pulled, trees are shaped, and mulch is topped off or refreshed. We handle all the little details
          that keep your yard looking its best throughout the seasons.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Quarterly maintenance ${idx + 1}`} className="rounded-lg shadow-md" />
          ))}
        </div>

        <div className="text-center">
          <a href="/contact.html" className="bg-[#4e7938] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3c5d2f]">
            Request a Quote
          </a>
        </div>
      </main>

      <footer className="py-10 text-center">
        <img src="/assets/qr-code.png" alt="Jimenez QR Code" className="mx-auto w-32 h-32 mt-6" />
        <p className="mt-4 text-sm text-gray-600">Scan to visit our full site and book today!</p>
      </footer>
    </div>
  );
}
