import React from 'react';
import './SummerGraphics.css';

function SummerGraphics({ weather }) {
  return (
    <svg viewBox="0 0 400 300" width="400" height="300" className="summer-graphics">
      <defs>
        <linearGradient id="summerSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E0F6FF', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="400" height="300" fill="url(#summerSky)" />

      <g className="sun-animation">
        <circle cx="350" cy="50" r="50" fill="#FFD700" filter="url(#glow)" />
        <circle cx="350" cy="50" r="35" fill="#FFA500" opacity="0.7" />
        <circle cx="350" cy="50" r="25" fill="#FF6347" opacity="0.5" />

        <line x1="350" y1="-20" x2="350" y2="-50" stroke="#FFD700" strokeWidth="3" />
        <line x1="350" y1="120" x2="350" y2="150" stroke="#FFD700" strokeWidth="3" />
        <line x1="420" y1="50" x2="450" y2="50" stroke="#FFD700" strokeWidth="3" />
        <line x1="280" y1="50" x2="250" y2="50" stroke="#FFD700" strokeWidth="3" />

        <line x1="400" y1="0" x2="420" y2="-20" stroke="#FFD700" strokeWidth="2" />
        <line x1="300" y1="100" x2="280" y2="120" stroke="#FFD700" strokeWidth="2" />
        <line x1="400" y1="100" x2="420" y2="120" stroke="#FFD700" strokeWidth="2" />
        <line x1="300" y1="0" x2="280" y2="-20" stroke="#FFD700" strokeWidth="2" />
      </g>

      <g className="heat-wave-animation">
        <path d="M 0 200 Q 50 195 100 200 T 200 200 T 300 200 T 400 200" stroke="#FF6347" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 0 230 Q 50 225 100 230 T 200 230 T 300 230 T 400 230" stroke="#FF4500" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M 0 260 Q 50 255 100 260 T 200 260 T 300 260 T 400 260" stroke="#FF6347" strokeWidth="2" fill="none" opacity="0.4" />
      </g>

      <rect x="0" y="270" width="400" height="30" fill="#DEB887" />
      <g opacity="0.3">
        <rect x="20" y="280" width="40" height="15" fill="#8B7355" />
        <rect x="100" y="285" width="50" height="10" fill="#8B7355" />
        <rect x="200" y="280" width="35" height="15" fill="#8B7355" />
        <rect x="300" y="282" width="45" height="12" fill="#8B7355" />
      </g>

      <g>
        <rect x="50" y="220" width="15" height="50" fill="#228B22" />
        <circle cx="45" cy="240" r="8" fill="#228B22" />
        <circle cx="65" cy="250" r="8" fill="#228B22" />
        <circle cx="40" cy="260" r="8" fill="#228B22" />
        <circle cx="70" cy="235" r="8" fill="#228B22" />
      </g>
    </svg>
  );
}

export default SummerGraphics;
