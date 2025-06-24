import Layout from "./Layout"

export default function Login() {
  return (
    <Layout>
      <div className="max-w-md mx-auto mt-20 bg-white border shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">Client Login</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" name="email" className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input type="password" name="password" className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-md">Log In</button>
        </form>
      </div>
    </Layout>
  )
}
