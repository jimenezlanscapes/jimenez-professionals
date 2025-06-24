import React from "react";

export default function SodinstallationPage() {
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
        <h1 className="text-3xl font-bold text-[#4e7938] mb-6">Sod Installation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        </div>
      </main>

      <footer className="bg-[#f0f8f0] text-[#4e7938] text-center py-8 border-t border-[#8aa765] mt-10">
        <p className="mb-4 text-sm">Scan the QR code to access our client portal:</p>
        <img src="/assets/qr-code.png" alt="Client Portal QR Code" className="mx-auto w-24 h-24 object-contain" />
      </footer>
    </div>
  );
}
