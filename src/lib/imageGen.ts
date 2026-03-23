import { GoogleGenAI } from "@google/genai";

export async function generateConstructionImage(
  prompt: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateImages({
    model: "imagen-4.0-generate-001",
    prompt,
    config: {
      numberOfImages: 1,
      aspectRatio: "16:9",
    },
  });

  const imageBytes = response.generatedImages?.[0]?.image?.imageBytes;
  if (!imageBytes) {
    throw new Error("No image returned from Imagen API");
  }

  return `data:image/jpeg;base64,${imageBytes}`;
}
