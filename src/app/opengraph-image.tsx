import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4F4A85 0%, #383351 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Main waveform visualization */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 200, marginBottom: 40 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              style={{
                width: 16,
                height: Math.max(20, Math.random() * 180 + 20),
                backgroundColor: 'white',
                borderRadius: 8,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
        
        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          WaveSurfer for Vue 3
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            marginBottom: 40,
            maxWidth: 800,
          }}
        >
          Powerful audio visualization and playback component for Vue 3 applications
        </div>
        
        {/* Tech stack badges */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div
            style={{
              backgroundColor: '#42B883',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Vue 3
          </div>
          <div
            style={{
              backgroundColor: '#3178C6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            TypeScript
          </div>
          <div
            style={{
              backgroundColor: '#FF6B35',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            WaveSurfer.js
          </div>
        </div>
        
        {/* Author */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: 24,
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          by Meer Sagor
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
