import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '20%',
          position: 'relative',
        }}
      >
        {/* Large waveform bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 80 }}>
          <div style={{ width: 8, height: 32, backgroundColor: 'white', borderRadius: 4 }} />
          <div style={{ width: 8, height: 48, backgroundColor: 'white', borderRadius: 4 }} />
          <div style={{ width: 8, height: 64, backgroundColor: 'white', borderRadius: 4 }} />
          <div style={{ width: 8, height: 80, backgroundColor: 'white', borderRadius: 4 }} />
          <div style={{ width: 8, height: 56, backgroundColor: 'white', borderRadius: 4 }} />
          <div style={{ width: 8, height: 40, backgroundColor: 'white', borderRadius: 4 }} />
          <div style={{ width: 8, height: 24, backgroundColor: 'white', borderRadius: 4 }} />
        </div>
        
        {/* Vue.js V symbol */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '16px solid transparent',
            borderRight: '16px solid transparent',
            borderBottom: '32px solid #42B883',
          }}
        />
        
        {/* App name */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          WaveSurfer
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
