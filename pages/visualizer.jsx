
import React, { useState } from "react";

export default function Visualizer() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [instruction, setInstruction] = useState("replace lawn with fresh sod");
  const [resultUrl, setResultUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image || !instruction) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("instruction", instruction);

    const res = await fetch("/api/visualize", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResultUrl(data.output);
    setLoading(false);
  };

  return (
    <div className="bg-[#f0f8f0] min-h-screen p-8 font-sans text-[#3e4c35]">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#4e7938]">Instant Yard Visualizer™</h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
        <input
          type="text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="e.g. replace lawn with mulch"
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <button
          onClick={handleSubmit}
          disabled={!image || loading}
          className="bg-[#4e7938] hover:bg-[#76a05b] text-white px-6 py-2 rounded font-semibold disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Visual"}
        </button>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {previewUrl && (
            <div>
              <p className="text-center font-semibold mb-2">Original</p>
              <img src={previewUrl} alt="Original" className="rounded border" />
            </div>
          )}
          {resultUrl && (
            <div>
              <p className="text-center font-semibold mb-2">Visualized</p>
              <img src={resultUrl} alt="Result" className="rounded border" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
