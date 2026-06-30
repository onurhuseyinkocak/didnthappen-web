import { NextResponse } from "next/server";

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="#23352f"/>
  <path d="M18 32.5 28 42 47 21" fill="none" stroke="#f9f4ea" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="46" cy="46" r="5" fill="#9fb9a8"/>
</svg>`;

export function GET() {
  return new NextResponse(icon, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
