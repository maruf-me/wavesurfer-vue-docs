import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #4F4A85 0%, #383351 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          position: 'relative',
        }}
      >
        {/* Waveform bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1, height: 20 }}>
          <div style={{ width: 2, height: 8, backgroundColor: 'white', borderRadius: 1 }} />
          <div style={{ width: 2, height: 12, backgroundColor: 'white', borderRadius: 1 }} />
          <div style={{ width: 2, height: 16, backgroundColor: 'white', borderRadius: 1 }} />
          <div style={{ width: 2, height: 20, backgroundColor: 'white', borderRadius: 1 }} />
          <div style={{ width: 2, height: 14, backgroundColor: 'white', borderRadius: 1 }} />
          <div style={{ width: 2, height: 10, backgroundColor: 'white', borderRadius: 1 }} />
          <div style={{ width: 2, height: 6, backgroundColor: 'white', borderRadius: 1 }} />
        </div>
        
        {/* Vue.js V symbol */}
        <div
          style={{
            position: 'absolute',
            top: 2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderBottom: '8px solid #42B883',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
