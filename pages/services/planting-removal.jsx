import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PlantingRemoval() {{
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
        <h1 className="text-4xl md:text-5xl font-bold text-[#4e7938] mb-6">🌺 Planting & Removal</h1>
        <div className="text-lg leading-relaxed mb-6">
Whether you're creating a new garden or cleaning up an overgrown area, we handle all your planting and removal needs with care and expertise.

Services include:
<ul class='list-disc list-inside mb-6 space-y-2'>
  <li>Seasonal planting for vibrant, fresh curb appeal</li>
  <li>Removal of dead or unwanted plants, shrubs, or trees</li>
  <li>Soil preparation and fertilization</li>
  <li>Strategic layout for sunlight and growth</li>
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