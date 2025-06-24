import { useState } from "react"
import { supabase } from "../supabaseClient"

export default function SignUp() {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password, ...profile } = formData

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: profile,
      },
    })

    if (error) {
      setMessage("Error: " + error.message)
    } else {
      setMessage("Signup successful! Check your email to confirm.")
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Your Jimenez Landscaping Account</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="full_name" onChange={handleChange} required autoComplete="name" className="p-2 border" aria-label="Full Name" />
        <input type="text" name="username" onChange={handleChange} required autoComplete="username" className="p-2 border" aria-label="Username" />
        <input type="text" name="address" onChange={handleChange} required autoComplete="street-address" className="p-2 border" aria-label="Street Address" />
        <input type="text" name="city" onChange={handleChange} required autoComplete="address-level2" className="p-2 border" aria-label="City" />
        <input type="text" name="state" onChange={handleChange} required autoComplete="address-level1" className="p-2 border" aria-label="State" />
        <input type="text" name="zip" onChange={handleChange} required autoComplete="postal-code" className="p-2 border" aria-label="Zip Code" />
        <input type="email" name="email" onChange={handleChange} required autoComplete="email" className="p-2 border" aria-label="Email" />
        <input type="password" name="password" onChange={handleChange} required autoComplete="new-password" className="p-2 border" aria-label="Password" />
        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded mt-2">Sign Up</button>
        </div>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  )
}
