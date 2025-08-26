import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function TwitterImage() {
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
        {/* Twitter-style background with subtle pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          }}
        />
        
        {/* Central waveform with Vue.js integration */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          {/* Vue.js logo */}
          <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#42B883',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 40,
              boxShadow: '0 8px 32px rgba(66, 184, 131, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              V
            </div>
          </div>
          
          {/* Waveform bars */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 120 }}>
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                style={{
                  width: 12,
                  height: Math.max(20, Math.random() * 100 + 20),
                  backgroundColor: 'white',
                  borderRadius: 6,
                  opacity: 0.9,
                  boxShadow: '0 2px 8px rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Main title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: 16,
            textShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}
        >
          WaveSurfer for Vue 3
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            marginBottom: 40,
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Audio visualization & playback component with TypeScript support
        </div>
        
        {/* Feature highlights */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 40 }}>
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: 8,
              fontSize: 18,
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            🎵 Audio Player
          </div>
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: 8,
              fontSize: 18,
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            📊 Waveform
          </div>
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: 8,
              fontSize: 18,
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            🔌 Plugins
          </div>
        </div>
        
        {/* Bottom info */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            right: 40,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            by @meersagor
          </div>
          <div
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            #Vue3 #Audio #WaveSurfer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
