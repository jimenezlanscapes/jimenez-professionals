import { useState } from "react"
import Layout from "./Layout"

const VISUALS = {
  sod: "/visualizer_assets/sod.png",
  gravel: "/visualizer_assets/gravel.png",
  pavers: "/visualizer_assets/pavers.png",
  mulch: "/visualizer_assets/mulch.png",
  shell: "/visualizer_assets/shell.png",
  candykorn: "/visualizer_assets/candykorn.png",
  jellybeans: "/visualizer_assets/jellybeans.png",
  fence: "/visualizer_assets/fence.png",
}

export default function YardVisualizer() {
  const [selection, setSelection] = useState("sod")

  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Instant Yard Visualizer™</h1>
        <p className="text-gray-700 mb-6 text-center">Choose a surface type to preview how it might look in your yard.</p>

        <div className="mb-4">
          <label className="block font-medium mb-1">Choose Surface Type</label>
          <select
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {Object.keys(VISUALS).map((key) => (
              <option key={key} value={key}>{key.replace(/(^|_)([a-z])/g, (_, __, l) => l.toUpperCase())}</option>
            ))}
          </select>
        </div>

        <div className="mt-6 border rounded overflow-hidden">
          <img src={VISUALS[selection]} alt={selection} className="w-full object-cover" />
        </div>
      </div>
    </Layout>
  )
}
