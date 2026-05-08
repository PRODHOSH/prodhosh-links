import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/profile-photo.jpg`}
            alt="icon"
            width="32"
            height="32"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
