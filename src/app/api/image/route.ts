import { generateConstructionImage } from "@/lib/imageGen";
import { type NextRequest, NextResponse } from "next/server";

const PROMPTS: Record<string, string> = {
  hero: "modern residential construction project Anaheim California golden hour photorealistic aerial view, dramatic lighting, beautiful architecture",
  crew: "professional construction crew working on home renovation Orange County California, diverse team, safety gear, bright sunny day",
  kitchen:
    "luxury kitchen remodel finished result modern design Southern California, white cabinets, marble countertops, gold hardware, bright natural light",
  frame:
    "new home construction wood frame structure blue sky Southern California, clean framing, craftsmanship, wide angle shot",
  bathroom:
    "bathroom renovation modern tiles and fixtures finished result, spa-like, clean white and grey tones, bright lighting",
  commercial:
    "commercial construction building exterior Anaheim California, modern architecture, glass and steel, professional photography",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") ?? "hero";
  const prompt = PROMPTS[type] ?? PROMPTS.hero;

  try {
    const dataUrl = await generateConstructionImage(prompt);
    const base64 = dataUrl.replace("data:image/jpeg;base64,", "");
    const buffer = Buffer.from(base64, "base64");

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    // Return a dark placeholder gradient as SVG when API is unavailable
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a"/>
          <stop offset="100%" style="stop-color:#1e3a5f"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`;

    return new NextResponse(svg, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  }
}
