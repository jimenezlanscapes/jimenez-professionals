
import { useState } from 'react';

export default function YardVisualizer() {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runVisualizer = async () => {
    setLoading(true);
    const res = await fetch('/api/visualizer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: imageUrl })
    });
    const data = await res.json();
    setResult(data.output);
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Yard Visualizer</h1>
      <input type="text" placeholder="Enter image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }} />
      <button onClick={runVisualizer} disabled={!imageUrl || loading}>
        {loading ? 'Transforming...' : 'Visualize'}
      </button>
      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Transformed Image:</h2>
          <img src={result} alt="AI generated yard" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}
