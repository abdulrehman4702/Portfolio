import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Abdur Rehman — Full-Stack Architect & AI Solutions Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Read transparent profile image buffer via import.meta.url for 100% reliable edge rendering
  let profileBase64 = '';
  try {
    const imgUrl = new URL('../../public/images/profile-transparent.png', import.meta.url);
    const res = await fetch(imgUrl);
    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString('base64');
      profileBase64 = `data:image/png;base64,${base64}`;
    }
  } catch (e) {
    console.error('Error reading profile image for OG:', e);
  }

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
            'radial-gradient(circle at 50% 15%, rgba(30, 41, 59, 0.7) 0%, transparent 70%), radial-gradient(circle at 85% 25%, rgba(249, 115, 22, 0.16) 0%, transparent 45%), radial-gradient(circle at 15% 75%, rgba(13, 148, 136, 0.16) 0%, transparent 45%)',
          padding: '28px 48px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Atmospheric Backlight Glows */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, rgba(13, 148, 136, 0.12) 50%, transparent 70%)',
          }}
        />

        {/* 1. CENTER STAGE: GIANT FULL-WIDTH "DEVELOPER" + REAL CUTOUT PROFILE IMAGE */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '330px',
            width: '100%',
          }}
        >
          {/* Giant Full-Width Watermark "DEVELOPER" */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              transform: 'translateY(-50%)',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '155px',
              fontWeight: 900,
              letterSpacing: '26px',
              color: 'rgba(255, 255, 255, 0.05)',
              textTransform: 'uppercase',
              zIndex: 1,
              userSelect: 'none',
            }}
          >
            DEVELOPER
          </div>

          {/* Left Floating Card */}
          <div
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: '12px 18px',
              borderRadius: '16px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.4)',
              maxWidth: '220px',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#f97316',
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                Full-Stack Core
              </span>
            </div>
            <span style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.3 }}>
              React, Next.js 14, Node.js, TypeScript &amp; MongoDB
            </span>
          </div>

          {/* Center Cutout Portrait */}
          {profileBase64 ? (
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                height: '330px',
                width: '280px',
                zIndex: 5,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileBase64}
                alt="Abdur Rehman"
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: '#ffffff',
                fontSize: '56px',
                fontWeight: 900,
                zIndex: 5,
              }}
            >
              AR
            </div>
          )}

          {/* Right Floating Card */}
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '4px',
              padding: '12px 18px',
              borderRadius: '16px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.4)',
              maxWidth: '220px',
              zIndex: 10,
              textAlign: 'right',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                AI &amp; Cloud Infra
              </span>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#2dd4bf',
                }}
              />
            </div>
            <span style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.3 }}>
              GCP Deployments, AI Agent Pipelines &amp; Docker
            </span>
          </div>
        </div>

        {/* 2. TECH HIGHLIGHTS PILL ROW */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            zIndex: 10,
            marginTop: '2px',
          }}
        >
          {[
            { name: 'Next.js 14 & React', color: '#f97316' },
            { name: 'Node.js & Express APIs', color: '#10b981' },
            { name: 'AI Agents & LLMs', color: '#a855f7' },
            { name: 'GCP Cloud & Microservices', color: '#14b8a6' },
          ].map((pill) => (
            <div
              key={pill.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 14px',
                borderRadius: '999px',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '12px',
                fontWeight: 700,
                color: '#e2e8f0',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: pill.color,
                }}
              />
              <span>{pill.name}</span>
            </div>
          ))}
        </div>

        {/* 3. BOTTOM ROW: Social Badges (Left) | Bold Headline (Right) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            zIndex: 10,
            marginTop: '6px',
          }}
        >
          {/* Social Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '10px',
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#e2e8f0',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              <span style={{ color: '#0A66C2', fontWeight: 900 }}>in</span>
              <span>LinkedIn</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '10px',
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#e2e8f0',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              <span>GitHub</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '10px',
                backgroundColor: 'rgba(249, 115, 22, 0.15)',
                border: '1px solid rgba(249, 115, 22, 0.4)',
                color: '#fb923c',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              <span>Resume</span>
            </div>
          </div>

          {/* Big Bold Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 900,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '-0.5px',
                lineHeight: 1,
              }}
            >
              FULL-STACK ARCHITECT
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: '#f97316',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginTop: '3px',
              }}
            >
              &amp; AI SOLUTIONS ENGINEER
            </span>
          </div>
        </div>

        {/* 4. BOTTOM BIO QUOTE & STATS ROW */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: '12.5px', color: '#94a3b8', maxWidth: '820px' }}>
            “Specializing in high-performance Full-Stack development across MERN Stack, Next.js 14, and GCP Cloud Architecture.”
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', fontWeight: 700 }}>
            <span style={{ color: '#fb923c' }}>⚡ 15+ Deliverables</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#2dd4bf' }}>🔒 Multi-Tenant Security</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
