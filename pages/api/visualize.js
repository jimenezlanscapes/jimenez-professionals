
import Replicate from "replicate";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = "/tmp";
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Failed to parse form data" });

    const instruction = fields.instruction;
    const inputImagePath = files.image[0].filepath;

    const inputImageData = fs.readFileSync(inputImagePath, { encoding: "base64" });

    try {
      const output = await replicate.run("timothybrooks/instruct-pix2pix:latest", {
        input: {
          image: `data:image/png;base64,${inputImageData}`,
          prompt: instruction,
          num_inference_steps: 20,
          guidance_scale: 7.5
        },
      });

      res.status(200).json({ output });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate image" });
    }
  });
}
