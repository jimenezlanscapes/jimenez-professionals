import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
    
  <img src="/assets//services/images/quarterly-maintenance/69696225_1280200608820931_5992017112120426496_n.jpg" alt="Service Image" className="rounded shadow-md hover:scale-105 transition-transform duration-200" />
  <img src="/assets//services/images/quarterly-maintenance/FB_IMG_1749842211625.jpg" alt="Service Image" className="rounded shadow-md hover:scale-105 transition-transform duration-200" />
  <img src="/assets//services/images/quarterly-maintenance/FB_IMG_1749842237829.jpg" alt="Service Image" className="rounded shadow-md hover:scale-105 transition-transform duration-200" />
  <img src="/assets//services/images/quarterly-maintenance/IMG_20250603_122132.jpg" alt="Service Image" className="rounded shadow-md hover:scale-105 transition-transform duration-200" />
  <img src="/assets//services/images/quarterly-maintenance/IMG_20250616_160826.jpg" alt="Service Image" className="rounded shadow-md hover:scale-105 transition-transform duration-200" />
<img src="/assets/quarterly-maintenance/69696225_1280200608820931_5992017112120426496_n.jpg" alt="69696225_1280200608820931_5992017112120426496_n.jpg" style={width: "100%", marginBottom: "1rem"} />
<img src="/assets/quarterly-maintenance/FB_IMG_1749842211625.jpg" alt="FB_IMG_1749842211625.jpg" style={width: "100%", marginBottom: "1rem"} />
<img src="/assets/quarterly-maintenance/FB_IMG_1749842237829.jpg" alt="FB_IMG_1749842237829.jpg" style={width: "100%", marginBottom: "1rem"} />
<img src="/assets/quarterly-maintenance/IMG_20250603_122132.jpg" alt="IMG_20250603_122132.jpg" style={width: "100%", marginBottom: "1rem"} />
<img src="/assets/quarterly-maintenance/IMG_20250616_160826.jpg" alt="IMG_20250616_160826.jpg" style={width: "100%", marginBottom: "1rem"} />
  <img src="/assets/quarterly-maintenance/69696225_1280200608820931_5992017112120426496_n.jpg" alt="quarterly-maintenance" style={width: "100%", marginBottom: "1rem"} />
  <img src="/assets/quarterly-maintenance/FB_IMG_1749842211625.jpg" alt="quarterly-maintenance" style={width: "100%", marginBottom: "1rem"} />
  <img src="/assets/quarterly-maintenance/FB_IMG_1749842237829.jpg" alt="quarterly-maintenance" style={width: "100%", marginBottom: "1rem"} />
  <img src="/assets/quarterly-maintenance/IMG_20250603_122132.jpg" alt="quarterly-maintenance" style={width: "100%", marginBottom: "1rem"} />
  <img src="/assets/quarterly-maintenance/IMG_20250616_160826.jpg" alt="quarterly-maintenance" style={width: "100%", marginBottom: "1rem"} />
</div>

export default function QuarterlyMaintenance() {{
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
        <h1 className="text-4xl md:text-5xl font-bold text-[#4e7938] mb-6">📅 Quarterly Maintenance</h1>
        <div className="text-lg leading-relaxed mb-6">
Keep your landscape pristine all year round with our expertly scheduled maintenance visits. Each quarter, our team visits your property to:

<ul class='list-disc list-inside mb-6 space-y-2'>
  <li>Trim shrubs, bushes, and small trees to maintain clean lines</li>
  <li>Refresh mulch or rock beds to maintain visual appeal</li>
  <li>Pull weeds and edge garden beds to ensure a tidy look</li>
  <li>Inspect irrigation systems for proper operation</li>
  <li>Replace seasonal flowers and check for plant health</li>
</ul>

Our quarterly plans are perfect for homeowners who want a well-kept yard without the hassle. Let us take care of your property every season.
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
  <Image src="/assets//assets/quarterly/bush-cube.jpg" alt="Trimmed cube shrub" width={600} height={400} className="rounded shadow" />
  <Image src="/assets//assets/quarterly/shrub-row.jpg" alt="Neatly trimmed shrub row" width={600} height={400} className="rounded shadow" />
  <Image src="/assets//assets/quarterly/round-shrubs.jpg" alt="Perfectly round bushes" width={600} height={400} className="rounded shadow" />
  <Image src="/assets//assets/quarterly/tree-form.jpg" alt="Tall topiary trim" width={600} height={400} className="rounded shadow" />
</div>

        <Link href="/quote">
          <span className="inline-block bg-[#4e7938] hover:bg-[#76a05b] text-white px-6 py-3 rounded font-semibold text-lg cursor-pointer">
            Get a Custom Quote
          </span>
        </Link>
      </main>

      <footer className="bg-[#f0f8f0] text-center py-8 border-t border-[#8aa765]">
        <p className="text-sm mb-2">Scan the QR code to access our client portal:</p>
        <Image src="/assets//assets/qr-code.png" alt="QR Code" width={96} height={96} className="mx-auto" />
      </footer>
    </div>
  );
}}