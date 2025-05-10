import { NextRequest, NextResponse } from 'next/server';

// Helper to get the current potmeter value (for demo, use in-memory or static value)
let potmeterValue = 50; // In production, use a DB or persistent store.

export async function POST(req: NextRequest) {
  // Parse frame action from Farcaster (button press)
  const body = await req.json();
  const { untrustedData } = body;
  const action = untrustedData?.buttonIndex;

  if (action === 1) {
    potmeterValue = Math.max(0, potmeterValue - 10);
  } else if (action === 2) {
    potmeterValue = Math.min(100, potmeterValue + 10);
  }

  return NextResponse.json({
    // Frame metadata per Farcaster spec
    image: `${req.nextUrl.origin}/frame-image?value=${potmeterValue}`,
    buttons: [
      { label: '-', action: 'post' },
      { label: '+', action: 'post' }
    ],
    postUrl: `${req.nextUrl.origin}/api/frame`,
    state: { potmeterValue },
    // Add other frame fields as needed
  });
}

export async function GET(req: NextRequest) {
  // Initial frame load
  return NextResponse.json({
    image: `${req.nextUrl.origin}/frame-image?value=${potmeterValue}`,
    buttons: [
      { label: '-', action: 'post' },
      { label: '+', action: 'post' }
    ],
    postUrl: `${req.nextUrl.origin}/api/frame`,
    state: { potmeterValue },
  });
}
