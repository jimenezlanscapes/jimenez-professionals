
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { image } = req.body;

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "a9758cbf0f2b40d6b79aeb02a1a75b0d2ebc1c6fbe20828623650c488e9f3d4e",
      input: {
        image: image,
        prompt: "Replace the grass lawn with white gravel and paver walkway. Add mulch and decorative edging.",
        guidance_scale: 7.5,
        num_inference_steps: 50
      }
    })
  });

  const prediction = await response.json();
  res.status(200).json({ output: prediction?.urls?.get || null });
}
