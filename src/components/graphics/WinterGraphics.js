import React from 'react';
import './WinterGraphics.css';

function WinterGraphics({ weather }) {
  return (
    <svg viewBox="0 0 400 300" width="400" height="300" className="winter-graphics">
      <defs>
        <linearGradient id="winterSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4A4E69', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#9A9AA7', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="snowGlow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <rect width="400" height="300" fill="url(#winterSky)" />

      <g opacity="0.8">
        <ellipse cx="80" cy="60" rx="40" ry="25" fill="#FFFFFF" />
        <ellipse cx="120" cy="55" rx="35" ry="25" fill="#E8E8E8" />
        <ellipse cx="40" cy="50" rx="30" ry="20" fill="#E8E8E8" />

        <ellipse cx="280" cy="80" rx="45" ry="28" fill="#FFFFFF" />
        <ellipse cx="330" cy="75" rx="40" ry="25" fill="#E8E8E8" />
        <ellipse cx="240" cy="70" rx="35" ry="22" fill="#E8E8E8" />
      </g>

      <g className="snowflake-animation">
        <g className="snowflake snowflake-1">
          <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
          <line x1="50" y1="35" x2="50" y2="65" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="35" y1="50" x2="65" y2="50" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="38" y1="38" x2="62" y2="62" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="62" y1="38" x2="38" y2="62" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>

        <g className="snowflake snowflake-2">
          <circle cx="150" cy="40" r="3" fill="#FFFFFF" />
          <line x1="150" y1="25" x2="150" y2="55" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="135" y1="40" x2="165" y2="40" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="138" y1="28" x2="162" y2="52" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="162" y1="28" x2="138" y2="52" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>

        <g className="snowflake snowflake-3">
          <circle cx="300" cy="60" r="3" fill="#FFFFFF" />
          <line x1="300" y1="45" x2="300" y2="75" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="285" y1="60" x2="315" y2="60" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="288" y1="48" x2="312" y2="72" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="312" y1="48" x2="288" y2="72" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>

        <g className="snowflake snowflake-4">
          <circle cx="100" cy="80" r="2.5" fill="#FFFFFF" opacity="0.8" />
          <line x1="100" y1="67" x2="100" y2="93" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
          <line x1="87" y1="80" x2="113" y2="80" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
        </g>

        <g className="snowflake snowflake-5">
          <circle cx="350" cy="100" r="2.5" fill="#FFFFFF" opacity="0.8" />
          <line x1="350" y1="87" x2="350" y2="113" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
          <line x1="337" y1="100" x2="363" y2="100" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
        </g>
      </g>

      <ellipse cx="200" cy="280" rx="150" ry="30" fill="#FFFFFF" opacity="0.9" />
      <rect x="0" y="270" width="400" height="30" fill="#F5F5F5" />

      <g opacity="0.7">
        <polygon points="80,270 90,270 85,250" fill="#B0E0E6" />
        <polygon points="150,270 160,270 155,250" fill="#B0E0E6" />
        <polygon points="250,270 260,270 255,250" fill="#B0E0E6" />
        <polygon points="320,270 330,270 325,255" fill="#B0E0E6" />
      </g>
    </svg>
  );
}

export default WinterGraphics;
