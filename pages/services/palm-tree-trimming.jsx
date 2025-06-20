import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PalmTreeTrimming() {{
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f8f0] text-[#3e4c35] font-sans">
      <header className="flex justify-between items-center px-8 py-6 bg-[#4e7938] text-white shadow">
        <div className="text-xl font-bold">Jimenez Landscaping, LLC</div>
        <nav className="flex space-x-6 text-sm font-semibold">
          <Link href="/"><span className="hover:underline cursor-pointer">Home</span></Link>
          <Link href="/#services"><span className="hover:underline cursor-pointer">Services</span></Link>
          <Link href="/contact"><span className="hover:underline cursor-pointer">Contact</span></Link>
        </nav>
      </header>

      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4e7938] mb-6">🌴 Palm & Tree Trimming</h1>
        <div className="text-lg leading-relaxed mb-6">
Keep your palms and trees healthy, safe, and beautiful with professional trimming and canopy lifting.

Benefits:
<ul class='list-disc list-inside mb-6 space-y-2'>
  <li>Improved light penetration and air flow</li>
  <li>Removal of dead fronds and safety hazards</li>
  <li>Palm skinning and shaping for aesthetic value</li>
  <li>Storm preparation and cleanup available</li>
</ul>
</div>
        <Link href="/quote">
          <span className="inline-block bg-[#4e7938] hover:bg-[#76a05b] text-white px-6 py-3 rounded font-semibold text-lg cursor-pointer">
            Get a Custom Quote
          </span>
        </Link>
      </main>

      <footer className="bg-[#f0f8f0] text-center py-8 border-t border-[#8aa765]">
        <p className="text-sm mb-2">Scan the QR code to access our client portal:</p>
        <Image src="/assets/qr-code.png" alt="QR Code" width={96} height={96} className="mx-auto" />
      </footer>
    </div>
  );
}}