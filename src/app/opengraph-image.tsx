import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Abdur Rehman — Full-Stack Architect & AI Solutions Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#070a13',
          backgroundImage:
            'radial-gradient(circle at 50% 10%, rgba(30, 41, 59, 0.6) 0%, transparent 70%), radial-gradient(circle at 90% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 45%), radial-gradient(circle at 10% 80%, rgba(13, 148, 136, 0.15) 0%, transparent 45%)',
          padding: '48px 56px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Giant Watermark Background Typography "DEVELOPER" */}
        <div
          style={{
            position: 'absolute',
            top: '110px',
            left: '0',
            right: '0',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '150px',
            fontWeight: 900,
            letterSpacing: '24px',
            color: 'rgba(255, 255, 255, 0.035)',
            textTransform: 'uppercase',
            zIndex: 1,
            userSelect: 'none',
          }}
        >
          DEVELOPER
        </div>

        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '80px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.22) 0%, rgba(249, 115, 22, 0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-70px',
            left: '60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.18) 0%, rgba(13, 148, 136, 0) 70%)',
          }}
        />

        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 900,
                boxShadow: '0 8px 20px -4px rgba(249, 115, 22, 0.5)',
              }}
            >
              AR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
                Abdur Rehman
              </span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8' }}>
                Full-Stack Architect &amp; AI Solutions Engineer
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: 'rgba(13, 148, 136, 0.15)',
              border: '1px solid rgba(13, 148, 136, 0.4)',
              color: '#2dd4bf',
              fontSize: '12px',
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#2dd4bf',
              }}
            />
            <span>Open for Strategic Roles &amp; Projects</span>
          </div>
        </div>

        {/* Middle Main Content: Hero Headline & Description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 10,
            marginTop: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: '999px',
                backgroundColor: 'rgba(249, 115, 22, 0.15)',
                border: '1px solid rgba(249, 115, 22, 0.35)',
                color: '#fb923c',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              ⚡ PRODUCTION MERN · NEXT.JS 14 · GCP CLOUD
            </span>
          </div>

          <h1
            style={{
              fontSize: '48px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.08,
              margin: 0,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
            }}
          >
            FULL-STACK ARCHITECT <br />
            <span style={{ color: '#f97316' }}>&amp; AI SOLUTIONS ENGINEER</span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#cbd5e1',
              lineHeight: 1.45,
              margin: 0,
              maxWidth: '920px',
            }}
          >
            “Specializing in high-performance Full-Stack development across the MERN Stack, Next.js 14, and GCP Cloud Architecture. I architect scalable microservices, resilient APIs, and intelligent AI workflows.”
          </p>
        </div>

        {/* Bottom Bar: Tech Stack Pills & Deliverable Stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              'Next.js 14 & React',
              'Node.js & Express',
              'AI Agents & LLMs',
              'GCP Cloud & Docker',
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#e2e8f0',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#94a3b8',
            }}
          >
            <span style={{ color: '#fb923c' }}>⚡ 15+ Deliverables</span>
            <span>•</span>
            <span style={{ color: '#ffffff' }}>🌐 Global Platforms</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
