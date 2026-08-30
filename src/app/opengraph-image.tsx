import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Abdur Rehman — Full-Stack Developer & AI Solutions Engineer';
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
          backgroundColor: '#0b0f19',
          backgroundImage:
            'radial-gradient(circle at 50% 0%, #1e293b 0%, transparent 75%), radial-gradient(circle at 100% 100%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(13, 148, 136, 0.08) 0%, transparent 50%)',
          padding: '52px 64px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle Ambient Light Gradients */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '150px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.18) 0%, rgba(249, 115, 22, 0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '100px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, rgba(13, 148, 136, 0) 70%)',
          }}
        />

        {/* Top Bar: Brand & Status */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                color: '#ffffff',
                fontSize: '20px',
                fontWeight: 900,
                boxShadow: '0 8px 20px -4px rgba(249, 115, 22, 0.4)',
              }}
            >
              AR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
                Abdur Rehman
              </span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8' }}>
                Full-Stack &amp; AI Solutions Engineer
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              backgroundColor: 'rgba(13, 148, 136, 0.12)',
              border: '1px solid rgba(13, 148, 136, 0.35)',
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
            <span>Available for Opportunities</span>
          </div>
        </div>

        {/* Middle Main Content: Balanced Card Box */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '32px 36px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: 'rgba(249, 115, 22, 0.15)',
                color: '#fb923c',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              MERN Stack · Next.js 14 · Cloud (GCP)
            </span>
          </div>

          <h1
            style={{
              fontSize: '38px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.8px',
            }}
          >
            Building High-Performance Web Apps &amp; <span style={{ color: '#f97316' }}>AI Solutions</span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#94a3b8',
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            Experienced full-stack engineer specialized in scalable SaaS architectures, clean APIs, real-time workflows, and production AI platforms.
          </p>
        </div>

        {/* Bottom Bar: Tech Chips & Verified Domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {['React / Next.js', 'Node.js', 'MongoDB', 'AI Agents', 'GCP Deployment'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#cbd5e1',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#f97316',
              letterSpacing: '-0.2px',
            }}
          >
            portfolio-abdur-rehman.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
