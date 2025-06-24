import Layout from "./Layout"

export default function Dashboard() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-10 bg-white shadow border rounded-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Welcome to Your Client Dashboard</h1>
        <p className="text-gray-700">This area will show your upcoming services, payment status, and account info.</p>
      </div>
    </Layout>
  )
}
