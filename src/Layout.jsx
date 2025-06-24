export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-green-800 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Jimenez Landscaping, LLC</h1>
          <div className="space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/login" className="hover:underline">Client Login</a>
          </div>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  )
}
