import React from "react";

export default function PalmtreetrimmingPage() {
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
        <h1 className="text-3xl font-bold text-[#4e7938] mb-6">Palm Tree Trimming</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/assets/palm-tree-trimming/FB_IMG_1750192454630.jpg" alt="FB_IMG_1750192454630" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/IMG_20250414_134929882.jpg" alt="IMG_20250414_134929882" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/IMG_20250414_154619958.jpg" alt="IMG_20250414_154619958" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/IMG_20250508_141725197.jpg" alt="IMG_20250508_141725197" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/IMG_20250613_150301.jpg" alt="IMG_20250613_150301" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/Screenshot_20250513-130026.png" alt="Screenshot_20250513-130026" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/Screenshot_20250513-131359.png" alt="Screenshot_20250513-131359" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/Screenshot_20250612-193522.png" alt="Screenshot_20250612-193522" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/Screenshot_20250612-193559.png" alt="Screenshot_20250612-193559" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/Screenshot_20250612-193605.png" alt="Screenshot_20250612-193605" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/Screenshot_20250613-122934.png" alt="Screenshot_20250613-122934" className="w-full rounded shadow mb-4" />
            <img src="/assets/palm-tree-trimming/Screenshot_20250613-152230.png" alt="Screenshot_20250613-152230" className="w-full rounded shadow mb-4" />
        </div>
      </main>

      <footer className="bg-[#f0f8f0] text-[#4e7938] text-center py-8 border-t border-[#8aa765] mt-10">
        <p className="mb-4 text-sm">Scan the QR code to access our client portal:</p>
        <img src="/assets/qr-code.png" alt="Client Portal QR Code" className="mx-auto w-24 h-24 object-contain" />
      </footer>
    </div>
  );
}
