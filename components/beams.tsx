"use client"

export default function Beams() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="beamGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
        <linearGradient id="beamGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(34,211,238,0.15)" />
          <stop offset="50%" stopColor="rgba(59,130,246,0.3)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0.15)" />
        </linearGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* Animated beams */}
      <g filter="url(#blur)">
        {/* Beam 1 */}
        <polygon points="100,0 200,0 800,600 700,600" fill="url(#beamGradient1)" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="8s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Beam 2 */}
        <polygon points="250,0 350,0 650,600 550,600" fill="url(#beamGradient2)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Beam 3 */}
        <polygon points="400,0 500,0 500,600 400,600" fill="url(#beamGradient1)" opacity="0.4">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="7s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Beam 4 */}
        <polygon points="550,0 650,0 350,600 250,600" fill="url(#beamGradient2)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="9s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Beam 5 */}
        <polygon points="700,0 800,0 200,600 100,600" fill="url(#beamGradient1)" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="8.5s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Beam 6 */}
        <polygon points="850,0 950,0 150,600 50,600" fill="url(#beamGradient2)" opacity="0.4">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="7.5s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Beam 7 */}
        <polygon points="1000,0 1100,0 100,600 0,600" fill="url(#beamGradient1)" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="9.5s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Beam 8 */}
        <polygon points="1050,0 1150,0 50,600 -50,600" fill="url(#beamGradient2)" opacity="0.45">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="8s"
            repeatCount="indefinite"
          />
        </polygon>
      </g>

      {/* Additional subtle animated beams for depth */}
      <g filter="url(#blur)" opacity="0.3">
        <polygon points="150,0 250,0 750,600 650,600" fill="url(#beamGradient1)">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="11s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon points="600,0 700,0 300,600 200,600" fill="url(#beamGradient2)">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -600"
            to="0 600"
            dur="12s"
            repeatCount="indefinite"
          />
        </polygon>
      </g>
    </svg>
  )
}
