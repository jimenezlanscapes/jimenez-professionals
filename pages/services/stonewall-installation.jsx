import React from "react";

export default function StonewallinstallationPage() {
  return (
    <div className="bg-[#f0f8f0] min-h-screen text-[#3e4c35] font-sans">
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#4e7938]">Jimenez Landscaping, LLC</span>
        </div>
        <nav className="flex space-x-6 text-sm font-semibold">
          <a href="/" className="text-[#4e7938] hover:text-[#76a05b]">Home</a>
          <a href="/#services" className="text-[#4e7938] hover:text-[#76a05b]">Services</a>
          <a href="/login" className="text-[#4e7938] hover:text-[#76a05b]">Client Login</a>
        </nav>
      </header>

      <main className="px-8 py-12">
        <h1 className="text-3xl font-bold text-[#4e7938] mb-6">Stonewall Installation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/assets/stonewall-installation/IMG_20250616_133509.jpg" alt="IMG_20250616_133509" className="w-full rounded shadow mb-4" />
            <img src="/assets/stonewall-installation/IMG_20250616_133546.jpg" alt="IMG_20250616_133546" className="w-full rounded shadow mb-4" />
            <img src="/assets/stonewall-installation/Screenshot_20250613-151852.png" alt="Screenshot_20250613-151852" className="w-full rounded shadow mb-4" />
            <img src="/assets/stonewall-installation/Screenshot_20250613-151929.png" alt="Screenshot_20250613-151929" className="w-full rounded shadow mb-4" />
            <img src="/assets/stonewall-installation/Screenshot_20250613-151943.png" alt="Screenshot_20250613-151943" className="w-full rounded shadow mb-4" />
        </div>
      </main>

      <footer className="bg-[#f0f8f0] text-[#4e7938] text-center py-8 border-t border-[#8aa765] mt-10">
        <p className="mb-4 text-sm">Scan the QR code to access our client portal:</p>
        <img src="/assets/qr-code.png" alt="Client Portal QR Code" className="mx-auto w-24 h-24 object-contain" />
      </footer>
    </div>
  );
}
