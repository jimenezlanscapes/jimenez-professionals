import React, { useMemo } from "react";

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

  const randomQuote = useMemo(() => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
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
          <a href="/signup" className="bg-[#8db580] text-white px-4 py-1 rounded hover:bg-[#a0c49b]">Sign Up</a>
        </nav>
      </header>

      <main className="text-center px-6 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-[#4e7938] animate-fadeIn">
          {randomQuote}
        </h1>
        <p className="text-lg text-[#3e4c35] mb-8">
          Transforming your outdoor spaces with precision, professionalism, and passion.
        </p>
        <a href="quote.html" className="bg-[#4e7938] hover:bg-[#76a05b] text-white px-6 py-3 rounded font-semibold text-lg inline-block">
          Get a Free Quote
        </a>
      </main>

      <section id="services" className="mt-20 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
        <a href="/services/sod.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🌱</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Sod Installation & Replacement</h3>
    <p className="text-sm text-[#3e4c35]">Lush, green lawns installed and maintained with care.</p>
  </div>
</a>
<a href="/services/mulch-rock.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🪨</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Mulch & Rock Bed Installation</h3>
    <p className="text-sm text-[#3e4c35]">Beautify beds with durable, decorative materials.</p>
  </div>
</a>
<a href="/services/shrubs.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">✂️</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Shrub Trimming & Pruning</h3>
    <p className="text-sm text-[#3e4c35]">Healthy growth and polished aesthetics guaranteed.</p>
  </div>
</a>
<a href="/services/tree-trimming.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🌳</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Tree Trimming & Canopy Lifting</h3>
    <p className="text-sm text-[#3e4c35]">Safe, professional trimming to enhance your yard.</p>
  </div>
</a>
<a href="/services/weed-control.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🚫</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Weed Control & Prevention</h3>
    <p className="text-sm text-[#3e4c35]">Keep your landscape clean and weed-free year-round.</p>
  </div>
</a>
<a href="/services/fertilization.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🌾</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Seasonal Fertilization</h3>
    <p className="text-sm text-[#3e4c35]">Boost plant health with expert nutrient application.</p>
  </div>
</a>
<a href="/services/irrigation.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">💧</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Irrigation System Setup & Repairs</h3>
    <p className="text-sm text-[#3e4c35]">Smart watering systems installed and maintained.</p>
  </div>
</a>
<a href="/services/design.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🖼️</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Landscape Design & 3D Planning</h3>
    <p className="text-sm text-[#3e4c35]">Bring your dream yard to life with stunning visuals.</p>
  </div>
</a>
<a href="/services/cleanup.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🧹</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Yard Cleanups (Spring/Fall/Storm)</h3>
    <p className="text-sm text-[#3e4c35]">Get your property back in shape fast.</p>
  </div>
</a>
<a href="/services/curbing.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🧱</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Decorative Curbing & Concrete Borders</h3>
    <p className="text-sm text-[#3e4c35]">Define your beds with style and durability.</p>
  </div>
</a>
<a href="/services/lighting.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">💡</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Outdoor Lighting (Path, Accent, Uplighting)</h3>
    <p className="text-sm text-[#3e4c35]">Enhance safety and ambiance with lighting design.</p>
  </div>
</a>
<a href="/services/palm.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🌴</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Palm Tree Installation & Maintenance</h3>
    <p className="text-sm text-[#3e4c35]">Tropical beauty with expert palm care.</p>
  </div>
</a>
<a href="/services/boulders.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🪨</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Boulder & Feature Rock Placement</h3>
    <p className="text-sm text-[#3e4c35]">Natural accents that stand the test of time.</p>
  </div>
</a>
<a href="/services/turf.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🏟️</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Artificial Turf Installation</h3>
    <p className="text-sm text-[#3e4c35]">Low-maintenance grass that looks great year-round.</p>
  </div>
</a>
<a href="/services/garden.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🌷</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Custom Garden Bed Builds</h3>
    <p className="text-sm text-[#3e4c35]">Unique designs tailored to your home and taste.</p>
  </div>
</a>
<a href="/services/gravel.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🛻</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Gravel & Shell Driveway Upgrades</h3>
    <p className="text-sm text-[#3e4c35]">Classic Florida style driveways built to last.</p>
  </div>
</a>
<a href="/services/reshaping.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🪒</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Landscape Bed Re-Shaping & Re-Edging</h3>
    <p className="text-sm text-[#3e4c35]">Clean lines and professional touch-ups.</p>
  </div>
</a>
<a href="/services/flowers.html">
  <div className="bg-[#cde7c5] p-6 rounded-lg text-center shadow">
    <div className="text-4xl mb-3">🌺</div>
    <h3 className="text-xl font-bold mb-2 text-[#4e7938]">Color Rotation Programs (Seasonal Flower Installs)</h3>
    <p className="text-sm text-[#3e4c35]">Fresh curb appeal with vibrant, seasonal blooms.</p>
  </div>
</a>
      </section>

      <footer className="bg-[#f0f8f0] text-[#4e7938] text-center py-8 border-t border-[#8aa765] mt-10">
        <p className="mb-4 text-sm">Scan the QR code to access our client portal:</p>
        <img src="/assets/qr-code.png" alt="Client Portal QR Code" className="mx-auto w-24 h-24 object-contain" />
      </footer>
    </div>
  );
}
