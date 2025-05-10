import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const value = parseInt(searchParams.get('value') || '50', 10);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#f1f5f9',
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 'bold', color: '#2563eb', marginBottom: 24 }}>
          Potmeter Value
        </div>
        <div style={{ fontSize: 96, fontWeight: 'bold', color: '#2563eb' }}>{value}%</div>
        <div style={{ width: 400, height: 32, background: '#e5e7eb', borderRadius: 16, marginTop: 32 }}>
          <div
            style={{
              width: `${value}%`,
              height: '100%',
              background: '#2563eb',
              borderRadius: 16,
              transition: 'width 0.3s',
            }}
          ></div>
        </div>
      </div>
    ),
    {
      width: 600,
      height: 400,
    }
  );
}
