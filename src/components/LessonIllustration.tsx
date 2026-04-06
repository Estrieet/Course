import React from 'react';

interface Props { lessonId: number; }

const defs = (
  <defs>
    <linearGradient id="vg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#8b5cf6" />
      <stop offset="100%" stopColor="#ec4899" />
    </linearGradient>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0f0f1a" />
      <stop offset="100%" stopColor="#1e1b2e" />
    </linearGradient>
  </defs>
);

const svgs: Record<number, React.ReactElement> = {

  /* 1 — What is a Computer? */
  1: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Desktop monitor */}
      <rect x="30" y="30" width="130" height="90" rx="8" fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
      <rect x="42" y="40" width="106" height="68" rx="4" fill="#1e1b4b" />
      <rect x="78" y="120" width="34" height="12" rx="3" fill="#6d28d9" />
      <rect x="60" y="131" width="70" height="5" rx="2" fill="#4c1d95" />
      {/* Screen glow */}
      <rect x="42" y="40" width="106" height="68" rx="4" fill="url(#vg)" opacity="0.12" />
      <text x="95" y="80" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontFamily="sans-serif">Desktop</text>
      {/* Laptop */}
      <rect x="188" y="55" width="110" height="72" rx="6" fill="none" stroke="#ec4899" strokeWidth="2.5" />
      <rect x="198" y="63" width="90" height="56" rx="3" fill="#1e1b2e" />
      <rect x="188" y="127" width="110" height="8" rx="4" fill="#ec4899" opacity="0.6" />
      <rect x="198" y="63" width="90" height="56" rx="3" fill="url(#vg)" opacity="0.1" />
      <text x="243" y="95" textAnchor="middle" fill="#f9a8d4" fontSize="11" fontFamily="sans-serif">Laptop</text>
      {/* Phone */}
      <rect x="326" y="50" width="42" height="72" rx="8" fill="none" stroke="#a78bfa" strokeWidth="2.5" />
      <rect x="330" y="60" width="34" height="52" rx="2" fill="#1e1b2e" />
      <circle cx="347" cy="118" r="3" fill="#8b5cf6" />
      <rect x="330" y="60" width="34" height="52" rx="2" fill="url(#vg)" opacity="0.1" />
      <text x="347" y="88" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontFamily="sans-serif">Phone</text>
      {/* Labels */}
      <text x="200" y="170" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="sans-serif">Computers come in many shapes and sizes</text>
    </svg>
  ),

  /* 2 — Computer Hardware */
  2: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Motherboard outline */}
      <rect x="20" y="25" width="230" height="155" rx="8" fill="#0d0d1a" stroke="#334155" strokeWidth="1.5" />
      {/* CPU */}
      <rect x="45" y="50" width="60" height="60" rx="4" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
      <rect x="55" y="60" width="40" height="40" rx="2" fill="url(#vg)" opacity="0.6" />
      <text x="75" y="84" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">CPU</text>
      {/* CPU pins */}
      {[48,56,64,72,80,88].map((x, i) => (
        <line key={i} x1={x} y1="110" x2={x} y2="118" stroke="#8b5cf6" strokeWidth="1.5" />
      ))}
      {/* RAM sticks */}
      <rect x="130" y="48" width="18" height="70" rx="2" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="152" y="48" width="18" height="70" rx="2" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="174" y="48" width="18" height="70" rx="2" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="161" y="132" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontFamily="sans-serif">RAM</text>
      {/* HDD */}
      <rect x="45" y="130" width="80" height="35" rx="4" fill="#1a1a2e" stroke="#a78bfa" strokeWidth="1.5" />
      <circle cx="100" cy="147" r="10" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      <circle cx="100" cy="147" r="3" fill="#8b5cf6" />
      <text x="70" y="168" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="sans-serif">Hard Drive</text>
      {/* Circuit traces */}
      <polyline points="75,110 75,128 85,128 85,130" fill="none" stroke="#334155" strokeWidth="1" />
      <polyline points="139,118 130,118 130,130 125,130" fill="none" stroke="#334155" strokeWidth="1" />
      {/* Legend */}
      <rect x="265" y="30" width="120" height="145" rx="8" fill="#0d0d1a" stroke="#1e293b" strokeWidth="1" />
      <text x="325" y="50" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">COMPONENTS</text>
      {[
        { color: '#8b5cf6', label: 'CPU — Brain' },
        { color: '#38bdf8', label: 'RAM — Memory' },
        { color: '#a78bfa', label: 'HDD — Storage' },
        { color: '#ec4899', label: 'GPU — Graphics' },
        { color: '#34d399', label: 'PSU — Power' },
      ].map((item, i) => (
        <g key={i}>
          <circle cx="280" cy={68 + i * 22} r="5" fill={item.color} />
          <text x="292" cy={68 + i * 22} y={72 + i * 22} fill="#cbd5e1" fontSize="10" fontFamily="sans-serif">{item.label}</text>
        </g>
      ))}
    </svg>
  ),

  /* 3 — Computer Software */
  3: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Layer stack */}
      {[
        { y: 140, w: 300, color: '#4c1d95', label: 'Hardware', sub: 'CPU · RAM · Storage' },
        { y: 105, w: 260, color: '#5b21b6', label: 'Operating System', sub: 'Windows · macOS · Linux' },
        { y: 70, w: 220, color: '#7c3aed', label: 'Applications', sub: 'Word · Chrome · Email' },
        { y: 35, w: 180, color: 'url(#vg)', label: 'You', sub: 'The user' },
      ].map((layer, i) => (
        <g key={i}>
          <rect x={(400 - (i === 3 ? 180 : layer.w)) / 2} y={layer.y} width={i === 3 ? 180 : layer.w} height="30" rx="6" fill={layer.color} />
          <text x="200" y={layer.y + 13} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">{layer.label}</text>
          <text x="200" y={layer.y + 25} textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="sans-serif">{layer.sub}</text>
        </g>
      ))}
      {/* Arrow */}
      <line x1="200" y1="33" x2="200" y2="18" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arr)" />
      <text x="200" y="175" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="sans-serif">Software layers sit on top of hardware</text>
    </svg>
  ),

  /* 4 — Turning On/Off */
  4: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Glow */}
      <circle cx="200" cy="95" r="70" fill="#8b5cf6" opacity="0.08" />
      <circle cx="200" cy="95" r="55" fill="#8b5cf6" opacity="0.08" />
      {/* Power button ring */}
      <circle cx="200" cy="95" r="45" fill="none" stroke="url(#vg)" strokeWidth="4" strokeDasharray="220 30" strokeLinecap="round" />
      {/* Power line */}
      <line x1="200" y1="52" x2="200" y2="80" stroke="url(#vg)" strokeWidth="5" strokeLinecap="round" />
      {/* Circle outline */}
      <circle cx="200" cy="95" r="36" fill="#1e1b2e" stroke="#334155" strokeWidth="2" />
      {/* Steps */}
      <g>
        <rect x="30" y="155" width="100" height="30" rx="8" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
        <text x="80" y="174" textAnchor="middle" fill="#86efac" fontSize="11" fontFamily="sans-serif">Power ON</text>
      </g>
      <g>
        <rect x="270" y="155" width="100" height="30" rx="8" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
        <text x="320" y="174" textAnchor="middle" fill="#fca5a5" fontSize="11" fontFamily="sans-serif">Shut Down</text>
      </g>
      <text x="200" y="100" textAnchor="middle" fill="#8b5cf6" fontSize="28" fontWeight="bold" fontFamily="sans-serif">⏻</text>
      <line x1="130" y1="165" x2="165" y2="105" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="270" y1="165" x2="235" y2="105" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  ),

  /* 5 — Using the Mouse */
  5: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Mouse body */}
      <rect x="155" y="50" width="70" height="100" rx="35" fill="#1e1b2e" stroke="#8b5cf6" strokeWidth="2.5" />
      {/* Left click */}
      <path d="M155,85 Q155,50 190,50 L190,85 Z" fill="#8b5cf6" opacity="0.7" />
      <text x="175" y="73" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="sans-serif">Left</text>
      <text x="175" y="83" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="sans-serif">Click</text>
      {/* Right click */}
      <path d="M225,85 Q225,50 190,50 L190,85 Z" fill="#ec4899" opacity="0.7" />
      <text x="207" y="73" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="sans-serif">Right</text>
      <text x="207" y="83" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="sans-serif">Click</text>
      {/* Scroll wheel */}
      <rect x="183" y="88" width="14" height="22" rx="7" fill="#6d28d9" />
      <line x1="190" y1="92" x2="190" y2="106" stroke="#c4b5fd" strokeWidth="1.5" />
      {/* Mouse divider */}
      <line x1="190" y1="50" x2="190" y2="88" stroke="#334155" strokeWidth="1.5" />
      {/* Cursor */}
      <polygon points="290,60 290,110 305,96 315,115 321,113 311,93 328,93" fill="white" opacity="0.9" />
      {/* Action labels */}
      <text x="80" y="80" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontFamily="sans-serif">Select &</text>
      <text x="80" y="93" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontFamily="sans-serif">Open</text>
      <line x1="115" y1="87" x2="154" y2="72" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 2" />
      <text x="325" y="150" textAnchor="middle" fill="#f9a8d4" fontSize="10" fontFamily="sans-serif">Menu</text>
      <line x1="303" y1="118" x2="315" y2="143" stroke="#ec4899" strokeWidth="1" strokeDasharray="3 2" />
      <text x="200" y="175" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="sans-serif">Left click selects · Right click opens menu · Scroll to zoom</text>
    </svg>
  ),

  /* 6 — Using the Keyboard */
  6: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Keyboard body */}
      <rect x="30" y="55" width="340" height="110" rx="10" fill="#0f0f1a" stroke="#334155" strokeWidth="2" />
      {/* Key rows */}
      {/* Row 1: numbers */}
      {Array.from({length: 13}, (_, i) => (
        <rect key={`r1-${i}`} x={42 + i * 24} y={67} width="18" height="16" rx="3" fill="#1e1b2e" stroke="#334155" strokeWidth="1" />
      ))}
      {/* Row 2: QWERTY */}
      {['Q','W','E','R','T','Y','U','I','O','P'].map((k, i) => (
        <g key={`r2-${i}`}>
          <rect x={50 + i * 24} y={87} width="18" height="16" rx="3" fill={['E','R','T'].includes(k) ? '#2d1b69' : '#1e1b2e'} stroke={['E','R','T'].includes(k) ? '#8b5cf6' : '#334155'} strokeWidth="1" />
          <text x={59 + i * 24} y={99} textAnchor="middle" fill={['E','R','T'].includes(k) ? '#c4b5fd' : '#64748b'} fontSize="8" fontFamily="sans-serif">{k}</text>
        </g>
      ))}
      {/* Row 3: ASDF */}
      {['A','S','D','F','G','H','J','K','L'].map((k, i) => (
        <g key={`r3-${i}`}>
          <rect x={54 + i * 24} y={107} width="18" height="16" rx="3" fill={['A','S'].includes(k) ? '#1e1b4b' : '#1e1b2e'} stroke={['A','S'].includes(k) ? '#ec4899' : '#334155'} strokeWidth="1" />
          <text x={63 + i * 24} y={119} textAnchor="middle" fill={['A','S'].includes(k) ? '#f9a8d4' : '#64748b'} fontSize="8" fontFamily="sans-serif">{k}</text>
        </g>
      ))}
      {/* Space bar */}
      <rect x={100} y={127} width={200} height={18} rx="4" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x={200} y={140} textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="sans-serif">SPACE</text>
      {/* Shift keys highlighted */}
      <rect x={36} y={107} width="15" height="16" rx="3" fill="#2d1b69" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x={43} y={119} textAnchor="middle" fill="#c4b5fd" fontSize="6" fontFamily="sans-serif">SHIFT</text>
      {/* Enter highlighted */}
      <rect x={334} y={87} width="26" height="36" rx="3" fill="#2d1b69" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x={347} y={108} textAnchor="middle" fill="#c4b5fd" fontSize="7" fontFamily="sans-serif">ENTER</text>
      {/* Labels */}
      <text x={200} y={180} textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Type letters, numbers and commands using the keyboard</text>
    </svg>
  ),

  /* 7 — Files and Folders */
  7: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Root folder */}
      <rect x="170" y="20" width="60" height="42" rx="5" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
      <rect x="170" y="15" width="28" height="10" rx="3" fill="#8b5cf6" />
      <text x="200" y="46" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="sans-serif">My Files</text>
      {/* Branch lines */}
      <line x1="200" y1="62" x2="200" y2="78" stroke="#334155" strokeWidth="1.5" />
      <line x1="95" y1="78" x2="305" y2="78" stroke="#334155" strokeWidth="1.5" />
      <line x1="95" y1="78" x2="95" y2="90" stroke="#334155" strokeWidth="1.5" />
      <line x1="200" y1="78" x2="200" y2="90" stroke="#334155" strokeWidth="1.5" />
      <line x1="305" y1="78" x2="305" y2="90" stroke="#334155" strokeWidth="1.5" />
      {/* Sub folders */}
      {[
        { x: 65, label: 'Documents', color: '#ec4899' },
        { x: 170, label: 'Pictures', color: '#a78bfa' },
        { x: 275, label: 'Downloads', color: '#34d399' },
      ].map((f, i) => (
        <g key={i}>
          <rect x={f.x} y={90} width={60} height={38} rx="5" fill="#1e1b2e" stroke={f.color} strokeWidth="1.5" />
          <rect x={f.x} y={85} width={26} height={9} rx="3" fill={f.color} />
          <text x={f.x + 30} y={113} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">{f.label}</text>
        </g>
      ))}
      {/* Files under Documents */}
      <line x1="95" y1="128" x2="95" y2="140" stroke="#334155" strokeWidth="1" />
      <line x1="72" y1="140" x2="118" y2="140" stroke="#334155" strokeWidth="1" />
      {[72, 92, 112].map((x, i) => (
        <g key={i}>
          <line x1={x + 5} y1="140" x2={x + 5} y2="148" stroke="#334155" strokeWidth="1" />
          <rect x={x} y={148} width="20" height="24" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <text x={x + 10} y={164} textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">.doc</text>
        </g>
      ))}
      <text x={200} y={182} textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Folders organise files into groups, like drawers in a filing cabinet</text>
    </svg>
  ),

  /* 8 — Desktop and Icons */
  8: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Monitor */}
      <rect x="50" y="20" width="300" height="150" rx="10" fill="#0a0a14" stroke="#334155" strokeWidth="2" />
      {/* Taskbar */}
      <rect x="50" y="155" width="300" height="15" rx="0" fill="#1e1b2e" />
      <circle cx="70" cy="162" r="5" fill="url(#vg)" />
      <rect x="130" y="158" width="60" height="8" rx="2" fill="#334155" />
      <rect x="200" y="158" width="40" height="8" rx="2" fill="#334155" />
      <rect x="330" y="158" width="14" height="8" rx="2" fill="#334155" />
      {/* Desktop icons grid */}
      {[
        { x: 75, y: 35, color: '#8b5cf6', label: 'Browser' },
        { x: 120, y: 35, color: '#ec4899', label: 'Mail' },
        { x: 165, y: 35, color: '#34d399', label: 'Files' },
        { x: 210, y: 35, color: '#f59e0b', label: 'Photos' },
        { x: 255, y: 35, color: '#38bdf8', label: 'Music' },
        { x: 300, y: 35, color: '#a78bfa', label: 'Docs' },
        { x: 75, y: 80, color: '#64748b', label: 'Trash' },
        { x: 120, y: 80, color: '#ec4899', label: 'Chat' },
        { x: 165, y: 80, color: '#8b5cf6', label: 'Games' },
      ].map((icon, i) => (
        <g key={i}>
          <rect x={icon.x - 16} y={icon.y} width="32" height="28" rx="6" fill={icon.color} opacity="0.85" />
          <text x={icon.x} y={icon.y + 38} textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">{icon.label}</text>
        </g>
      ))}
      {/* Open window */}
      <rect x="165" y="95" width="160" height="55" rx="6" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      <rect x="165" y="95" width="160" height="14" rx="6" fill="#2d1b69" />
      <text x="245" y="106" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="sans-serif">Open Window</text>
      <circle cx="175" cy="102" r="3" fill="#ef4444" opacity="0.8" />
      <circle cx="185" cy="102" r="3" fill="#f59e0b" opacity="0.8" />
      <circle cx="195" cy="102" r="3" fill="#22c55e" opacity="0.8" />
    </svg>
  ),

  /* 9 — What is the Internet? */
  9: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Globe */}
      <circle cx="200" cy="100" r="70" fill="none" stroke="#8b5cf6" strokeWidth="2" />
      <ellipse cx="200" cy="100" rx="30" ry="70" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
      <ellipse cx="200" cy="100" rx="70" ry="25" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
      <line x1="130" y1="100" x2="270" y2="100" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="30" x2="200" y2="170" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
      {/* Nodes around globe */}
      {[
        { cx: 130, cy: 60 }, { cx: 270, cy: 60 },
        { cx: 270, cy: 140 }, { cx: 130, cy: 140 },
        { cx: 200, cy: 30 }, { cx: 200, cy: 170 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="6" fill="url(#vg)" />
          <line x1={n.cx} y1={n.cy} x2="200" y2="100" stroke="#ec4899" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        </g>
      ))}
      {/* Center */}
      <circle cx="200" cy="100" r="10" fill="url(#vg)" />
      <text x="200" y="185" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="sans-serif">Millions of computers connected worldwide</text>
    </svg>
  ),

  /* 10 — Web Browser */
  10: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Browser window */}
      <rect x="30" y="20" width="340" height="165" rx="10" fill="#0f0f1a" stroke="#334155" strokeWidth="2" />
      {/* Title bar */}
      <rect x="30" y="20" width="340" height="32" rx="10" fill="#1e1b2e" />
      <rect x="30" y="36" width="340" height="16" fill="#1e1b2e" />
      {/* Traffic lights */}
      <circle cx="52" cy="36" r="6" fill="#ef4444" opacity="0.8" />
      <circle cx="68" cy="36" r="6" fill="#f59e0b" opacity="0.8" />
      <circle cx="84" cy="36" r="6" fill="#22c55e" opacity="0.8" />
      {/* Tabs */}
      <rect x="100" y="22" width="90" height="22" rx="5" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1" />
      <text x="145" y="37" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="sans-serif">Example Page</text>
      <rect x="196" y="25" width="70" height="18" rx="4" fill="#0f0f1a" stroke="#334155" strokeWidth="1" />
      <text x="231" y="37" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="sans-serif">New Tab</text>
      {/* URL bar */}
      <rect x="50" y="58" width="300" height="22" rx="11" fill="#1e293b" stroke="#334155" strokeWidth="1" />
      <circle cx="67" cy="69" r="5" fill="#22c55e" opacity="0.7" />
      <text x="80" y="73" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">https://www.example.com</text>
      {/* Page content skeleton */}
      <rect x="50" y="95" width="200" height="12" rx="3" fill="#1e293b" />
      <rect x="50" y="113" width="290" height="8" rx="2" fill="#1e293b" opacity="0.6" />
      <rect x="50" y="126" width="260" height="8" rx="2" fill="#1e293b" opacity="0.6" />
      <rect x="50" y="139" width="180" height="8" rx="2" fill="#1e293b" opacity="0.6" />
      <rect x="270" y="95" width="80" height="60" rx="6" fill="#2d1b69" />
      <text x="310" y="129" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="sans-serif">Image</text>
    </svg>
  ),

  /* 11 — Searching the Internet */
  11: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Search bar */}
      <rect x="50" y="25" width="280" height="36" rx="18" fill="#1e1b2e" stroke="#8b5cf6" strokeWidth="2" />
      <text x="105" y="48" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">How to use a computer...</text>
      {/* Magnifying glass */}
      <circle cx="320" cy="43" r="12" fill="none" stroke="url(#vg)" strokeWidth="2.5" />
      <line x1="329" y1="52" x2="340" y2="63" stroke="url(#vg)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Results */}
      {[
        { y: 78, title: 'Beginner Guide to Computers — Learn.org', url: 'learn.org/computers' },
        { y: 115, title: 'What Is a Computer? Definition & Types', url: 'techinfo.com/basics' },
        { y: 152, title: 'Computer Basics for Seniors — EasyTech', url: 'easytech.com/seniors' },
      ].map((r, i) => (
        <g key={i}>
          <text x="50" y={r.y} fill="#a78bfa" fontSize="11" fontFamily="sans-serif" textDecoration="underline">{r.title}</text>
          <text x="50" y={r.y + 14} fill="#22c55e" fontSize="9" fontFamily="sans-serif">{r.url}</text>
          <rect x="50" y={r.y + 18} width="280" height="1" fill="#1e293b" />
        </g>
      ))}
    </svg>
  ),

  /* 12 — Email Basics */
  12: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Envelope */}
      <rect x="100" y="50" width="200" height="120" rx="8" fill="#1e1b2e" stroke="#8b5cf6" strokeWidth="2" />
      <polyline points="100,50 200,115 300,50" fill="none" stroke="#8b5cf6" strokeWidth="2" />
      <polyline points="100,170 160,115" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
      <polyline points="300,170 240,115" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
      {/* At symbol */}
      <circle cx="200" cy="105" r="22" fill="none" stroke="url(#vg)" strokeWidth="2" />
      <circle cx="200" cy="105" r="10" fill="url(#vg)" opacity="0.6" />
      <text x="197" y="109" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">@</text>
      {/* Labels */}
      <text x="55" y="80" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">From:</text>
      <text x="55" y="96" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">To:</text>
      <text x="55" y="112" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Subject:</text>
      <text x="200" y="175" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="sans-serif">Email sends messages instantly across the world</text>
    </svg>
  ),

  /* 13 — Online Safety */
  13: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Shield */}
      <path d="M200,20 L270,50 L270,110 Q270,155 200,175 Q130,155 130,110 L130,50 Z" fill="#1e1b4b" stroke="url(#vg)" strokeWidth="2.5" />
      <path d="M200,35 L258,60 L258,112 Q258,148 200,164 Q142,148 142,112 L142,60 Z" fill="url(#vg)" opacity="0.15" />
      {/* Check */}
      <polyline points="168,100 190,122 234,78" fill="none" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Danger icons around */}
      {[
        { x: 40, y: 60, text: '🦠', label: 'Virus' },
        { x: 40, y: 120, text: '🎣', label: 'Phishing' },
        { x: 330, y: 60, text: '🔓', label: 'Weak PW' },
        { x: 330, y: 120, text: '👤', label: 'Scammer' },
      ].map((d, i) => (
        <g key={i}>
          <text x={d.x} y={d.y} textAnchor="middle" fill="#ef4444" fontSize="18" opacity="0.6">{d.text}</text>
          <text x={d.x} y={d.y + 14} textAnchor="middle" fill="#f87171" fontSize="8" fontFamily="sans-serif">{d.label}</text>
          <line x1={d.x + (d.x < 200 ? 22 : -22)} y1={d.y - 5} x2={d.x < 200 ? 128 : 272} y2={100} stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        </g>
      ))}
    </svg>
  ),

  /* 14 — Social Media */
  14: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Profile nodes */}
      {[
        { cx: 200, cy: 100, r: 22, main: true },
        { cx: 100, cy: 60, r: 16 },
        { cx: 300, cy: 60, r: 16 },
        { cx: 80, cy: 145, r: 14 },
        { cx: 320, cy: 145, r: 14 },
        { cx: 200, cy: 168, r: 14 },
      ].map((n, i) => (
        <g key={i}>
          {!n.main && <line x1={n.cx} y1={n.cy} x2={200} y2={100} stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />}
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.main ? 'url(#vg)' : '#1e1b4b'} stroke={n.main ? 'none' : '#8b5cf6'} strokeWidth="1.5" />
          <circle cx={n.cx} cy={n.cy - (n.main ? 5 : 4)} r={n.main ? 7 : 5} fill="white" opacity="0.5" />
          <ellipse cx={n.cx} cy={n.cy + (n.main ? 13 : 10)} rx={n.main ? 12 : 9} ry={n.main ? 6 : 5} fill="white" opacity="0.3" />
        </g>
      ))}
      {/* Like / comment bubbles */}
      <rect x="220" y="70" width="40" height="18" rx="9" fill="#1e1b4b" stroke="#ec4899" strokeWidth="1" />
      <text x="240" y="83" textAnchor="middle" fill="#f9a8d4" fontSize="9" fontFamily="sans-serif">♥ Like</text>
      <rect x="135" y="115" width="50" height="18" rx="9" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1" />
      <text x="160" y="128" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="sans-serif">💬 Reply</text>
      <text x="200" y="190" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Social media connects people and lets you share content</text>
    </svg>
  ),

  /* 15 — Word Processing */
  15: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Document */}
      <rect x="80" y="20" width="240" height="165" rx="6" fill="#0f0f1a" stroke="#334155" strokeWidth="1.5" />
      {/* Toolbar */}
      <rect x="80" y="20" width="240" height="24" rx="6" fill="#1e1b2e" />
      <rect x="80" y="36" width="240" height="8" fill="#1e1b2e" />
      {['B','I','U','—','≡','≡'].map((t, i) => (
        <g key={i}>
          <rect x={94 + i * 28} y={24} width="20" height="16" rx="3" fill="#2d1b69" />
          <text x={104 + i * 28} y={36} textAnchor="middle" fill="#c4b5fd" fontSize="9" fontWeight="bold" fontFamily="sans-serif">{t}</text>
        </g>
      ))}
      {/* Text lines */}
      <rect x="100" y="58" width="160" height="10" rx="2" fill="url(#vg)" opacity="0.7" />
      {[70, 85, 100, 115, 130].map((y, i) => (
        <rect key={i} x={100} y={y + 8} width={180 - (i === 4 ? 80 : 0)} height="6" rx="2" fill="#334155" opacity="0.7" />
      ))}
      <rect x="100" y="155" width="100" height="6" rx="2" fill="#334155" opacity="0.4" />
      {/* Cursor blink */}
      <line x1="280" y1="78" x2="280" y2="90" stroke="#8b5cf6" strokeWidth="2" />
      {/* Page curl */}
      <path d="M300,20 L300,40 L320,20 Z" fill="#1e1b2e" />
      <path d="M300,40 L320,40 L320,20" fill="none" stroke="#334155" strokeWidth="1" />
    </svg>
  ),

  /* 16 — Spreadsheets */
  16: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Grid */}
      <rect x="30" y="20" width="220" height="160" rx="6" fill="#0f0f1a" stroke="#334155" strokeWidth="1.5" />
      {/* Header row */}
      <rect x="30" y="20" width="220" height="22" rx="6" fill="#1e1b2e" />
      <rect x="30" y="34" width="220" height="8" fill="#1e1b2e" />
      {['', 'A', 'B', 'C', 'D'].map((h, i) => (
        <text key={i} x={54 + i * 44} y={35} textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{h}</text>
      ))}
      {/* Rows */}
      {[
        ['1', 'Jan', '500', '320', '180'],
        ['2', 'Feb', '620', '410', '210'],
        ['3', 'Mar', '580', '390', '190'],
        ['4', 'Apr', '700', '450', '250'],
      ].map((row, ri) => (
        <g key={ri}>
          <rect x="30" y={42 + ri * 22} width="220" height="22" fill={ri % 2 ? '#0d0d1a' : '#0a0a12'} />
          {row.map((cell, ci) => (
            <text key={ci} x={54 + ci * 44} y={57 + ri * 22} textAnchor="middle"
              fill={ci === 0 ? '#64748b' : ci === 1 ? '#c4b5fd' : '#e2e8f0'}
              fontSize="9" fontFamily="sans-serif">{cell}</text>
          ))}
        </g>
      ))}
      {/* Sum row */}
      <rect x="30" y="130" width="220" height="22" fill="#1e1b4b" />
      {['Σ', '', '2400', '1570', '830'].map((v, i) => (
        <text key={i} x={54 + i * 44} y={145} textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{v}</text>
      ))}
      {/* Bar chart */}
      <rect x="270" y="20" width="110" height="160" rx="6" fill="#0f0f1a" stroke="#334155" strokeWidth="1" />
      <text x="325" y="38" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Sales Chart</text>
      {[
        { h: 70, color: '#8b5cf6', label: 'Jan' },
        { h: 88, color: '#a78bfa', label: 'Feb' },
        { h: 80, color: '#ec4899', label: 'Mar' },
        { h: 100, color: 'url(#vg)', label: 'Apr' },
      ].map((bar, i) => (
        <g key={i}>
          <rect x={281 + i * 24} y={155 - bar.h} width="18" height={bar.h} rx="3" fill={bar.color} />
          <text x={290 + i * 24} y={168} textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="sans-serif">{bar.label}</text>
        </g>
      ))}
    </svg>
  ),

  /* 17 — Online Shopping */
  17: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Product cards */}
      {[
        { x: 25, color: '#8b5cf6', name: 'Laptop', price: '$499' },
        { x: 110, color: '#ec4899', name: 'Headset', price: '$79' },
        { x: 195, color: '#34d399', name: 'Tablet', price: '$299' },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={20} width="75" height="120" rx="8" fill="#1e1b2e" stroke="#334155" strokeWidth="1.5" />
          <rect x={p.x} y={20} width="75" height="55" rx="8" fill={p.color} opacity="0.2" />
          <rect x={p.x} y={55} width="75" height="20" fill={p.color} opacity="0.2" />
          <text x={p.x + 37} y={55} textAnchor="middle" fill={p.color} fontSize="20" fontFamily="sans-serif">□</text>
          <text x={p.x + 37} y={92} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">{p.name}</text>
          <text x={p.x + 37} y={106} textAnchor="middle" fill={p.color} fontSize="11" fontWeight="bold" fontFamily="sans-serif">{p.price}</text>
          <rect x={p.x + 8} y={112} width="60" height="20" rx="10" fill={p.color} opacity="0.8" />
          <text x={p.x + 37} y={126} textAnchor="middle" fill="#fff" fontSize="9" fontFamily="sans-serif">Add to Cart</text>
        </g>
      ))}
      {/* Cart */}
      <rect x="295" y="20" width="85" height="120" rx="8" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="337" y="40" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontWeight="bold" fontFamily="sans-serif">🛒 Cart</text>
      <line x1="303" y1="48" x2="372" y2="48" stroke="#334155" strokeWidth="1" />
      {['Laptop', 'Headset'].map((item, i) => (
        <text key={i} x="305" y={62 + i * 16} fill="#94a3b8" fontSize="8" fontFamily="sans-serif">• {item}</text>
      ))}
      <line x1="303" y1="98" x2="372" y2="98" stroke="#334155" strokeWidth="1" />
      <text x="305" y="112" fill="#64748b" fontSize="8" fontFamily="sans-serif">Total:</text>
      <text x="370" y="112" textAnchor="end" fill="#8b5cf6" fontSize="10" fontWeight="bold" fontFamily="sans-serif">$578</text>
      <rect x="305" y="118" width="68" height="16" rx="8" fill="url(#vg)" />
      <text x="339" y="130" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="sans-serif">Checkout</text>
      {/* Lock */}
      <text x="200" y="165" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="sans-serif">🔒 Secure checkout — look for https://</text>
    </svg>
  ),

  /* 18 — Online Banking */
  18: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Bank building */}
      <rect x="130" y="100" width="140" height="70" fill="#1e1b2e" stroke="#8b5cf6" strokeWidth="2" />
      {/* Columns */}
      {[150, 175, 200, 225, 245].map((x, i) => (
        <rect key={i} x={x} y={105} width="10" height="60" fill="#2d1b69" />
      ))}
      {/* Roof */}
      <polygon points="120,100 200,50 280,100" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
      {/* Steps */}
      <rect x="130" y="168" width="140" height="8" rx="2" fill="#2d1b69" />
      <rect x="120" y="175" width="160" height="8" rx="2" fill="#1e1b4b" />
      {/* Shield overlay */}
      <path d="M200,65 L220,75 L220,95 Q220,110 200,115 Q180,110 180,95 L180,75 Z" fill="none" stroke="url(#vg)" strokeWidth="2" />
      <polyline points="191,90 199,98 213,82" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Text */}
      <text x="200" y="35" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">ONLINE BANKING</text>
      <text x="200" y="185" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Always use official bank websites and strong passwords</text>
    </svg>
  ),

  /* 19 — Digital Photos */
  19: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Camera */}
      <rect x="120" y="55" width="160" height="110" rx="12" fill="#1e1b2e" stroke="#8b5cf6" strokeWidth="2" />
      <rect x="145" y="45" width="60" height="18" rx="6" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      {/* Lens */}
      <circle cx="200" cy="115" r="40" fill="#0a0a14" stroke="#8b5cf6" strokeWidth="2" />
      <circle cx="200" cy="115" r="30" fill="#0f0f1a" stroke="#6d28d9" strokeWidth="1.5" />
      <circle cx="200" cy="115" r="20" fill="url(#vg)" opacity="0.4" />
      <circle cx="200" cy="115" r="10" fill="url(#vg)" opacity="0.7" />
      <circle cx="192" cy="107" r="4" fill="white" opacity="0.3" />
      {/* Shutter button */}
      <circle cx="255" cy="70" r="10" fill="#8b5cf6" />
      {/* Photo thumbnails */}
      {[
        { x: 22, color: '#8b5cf6' },
        { x: 55, color: '#ec4899' },
        { x: 88, color: '#34d399' },
      ].map((t, i) => (
        <rect key={i} x={t.x} y={60} width="26" height="26" rx="4" fill={t.color} opacity="0.4" stroke={t.color} strokeWidth="1" />
      ))}
      {[
        { x: 295, color: '#f59e0b' },
        { x: 328, color: '#38bdf8' },
        { x: 361, color: '#a78bfa' },
      ].map((t, i) => (
        <rect key={i} x={t.x} y={60} width="26" height="26" rx="4" fill={t.color} opacity="0.4" stroke={t.color} strokeWidth="1" />
      ))}
    </svg>
  ),

  /* 20 — Video and Music */
  20: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Video player */}
      <rect x="25" y="30" width="180" height="120" rx="8" fill="#0f0f1a" stroke="#8b5cf6" strokeWidth="2" />
      <rect x="25" y="130" width="180" height="20" rx="0" fill="#1e1b2e" />
      <rect x="30" y="135" width="100" height="6" rx="3" fill="#334155" />
      <rect x="30" y="135" width="55" height="6" rx="3" fill="url(#vg)" />
      {/* Play button */}
      <circle cx="115" cy="85" r="28" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="108,72 108,98 135,85" fill="url(#vg)" />
      {/* Waveform */}
      <rect x="220" y="30" width="155" height="120" rx="8" fill="#0f0f1a" stroke="#ec4899" strokeWidth="2" />
      <text x="297" y="55" textAnchor="middle" fill="#f9a8d4" fontSize="10" fontFamily="sans-serif">🎵 Now Playing</text>
      {[10,25,40,18,55,38,22,48,30,16,42,28,50,35,20,45].map((h, i) => (
        <rect key={i} x={228 + i * 9} y={120 - h} width="6" height={h} rx="2" fill="#ec4899" opacity={0.4 + i * 0.03} />
      ))}
      {/* Headphones */}
      <path d="M240,140 Q240,165 255,168 L255,160 Q248,158 248,150 L248,145 Z" fill="#ec4899" opacity="0.7" />
      <path d="M360,140 Q360,165 345,168 L345,160 Q352,158 352,150 L352,145 Z" fill="#ec4899" opacity="0.7" />
      <path d="M248,145 Q300,125 352,145" fill="none" stroke="#ec4899" strokeWidth="2.5" />
    </svg>
  ),

  /* 21 — Computer Maintenance */
  21: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Computer */}
      <rect x="110" y="40" width="180" height="110" rx="8" fill="#0f0f1a" stroke="#334155" strokeWidth="2" />
      <rect x="120" y="50" width="160" height="88" rx="4" fill="#1e1b2e" />
      <rect x="155" y="150" width="90" height="12" rx="3" fill="#1e1b2e" />
      {/* Dust particles */}
      {[[130,60],[260,55],[145,120],[255,115],[200,45]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#f59e0b" opacity="0.6" />
      ))}
      {/* Progress bar */}
      <rect x="135" y="90" width="130" height="12" rx="6" fill="#0d0d1a" stroke="#334155" strokeWidth="1" />
      <rect x="135" y="90" width="95" height="12" rx="6" fill="url(#vg)" />
      <text x="200" y="100" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif">Cleaning... 73%</text>
      <text x="200" y="118" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Disk Cleanup Running</text>
      {/* Wrench */}
      <g transform="translate(310,60) rotate(-35)">
        <rect x="-5" y="-30" width="10" height="50" rx="4" fill="#8b5cf6" />
        <circle cx="0" cy="-30" r="10" fill="none" stroke="#8b5cf6" strokeWidth="3" />
        <rect x="-5" y="18" width="10" height="14" rx="2" fill="#8b5cf6" />
      </g>
      {/* Checklist */}
      {[
        { done: true, text: 'Delete temp files' },
        { done: true, text: 'Update software' },
        { done: false, text: 'Run virus scan' },
        { done: false, text: 'Defrag drive' },
      ].map((item, i) => (
        <g key={i}>
          <circle cx="30" cy={50 + i * 22} r="7" fill={item.done ? '#14532d' : '#1e1b2e'} stroke={item.done ? '#22c55e' : '#334155'} strokeWidth="1.5" />
          {item.done && <text x="30" y={55 + i * 22} textAnchor="middle" fill="#22c55e" fontSize="8">✓</text>}
          <text x="44" y={55 + i * 22} fill={item.done ? '#86efac' : '#94a3b8'} fontSize="9" fontFamily="sans-serif">{item.text}</text>
        </g>
      ))}
    </svg>
  ),

  /* 22 — Troubleshooting */
  22: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Flowchart */}
      {/* Start */}
      <rect x="160" y="15" width="80" height="28" rx="14" fill="url(#vg)" />
      <text x="200" y="33" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="sans-serif">Problem?</text>
      <line x1="200" y1="43" x2="200" y2="58" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arr)" />
      {/* Diamond */}
      <polygon points="200,58 240,80 200,102 160,80" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="200" y="84" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="sans-serif">Restart?</text>
      {/* Yes branch */}
      <line x1="240" y1="80" x2="300" y2="80" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="300" y="66" width="70" height="28" rx="6" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
      <text x="335" y="84" textAnchor="middle" fill="#86efac" fontSize="9" fontFamily="sans-serif">✓ Fixed!</text>
      {/* No branch */}
      <line x1="200" y1="102" x2="200" y2="115" stroke="#ef4444" strokeWidth="1.5" />
      <polygon points="200,115 240,137 200,159 160,137" fill="#1e1b2e" stroke="#ec4899" strokeWidth="1.5" />
      <text x="200" y="141" textAnchor="middle" fill="#f9a8d4" fontSize="9" fontFamily="sans-serif">Google it?</text>
      {/* Yes */}
      <line x1="240" y1="137" x2="290" y2="137" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="290" y="123" width="80" height="28" rx="6" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
      <text x="330" y="141" textAnchor="middle" fill="#86efac" fontSize="9" fontFamily="sans-serif">✓ Solution</text>
      {/* No */}
      <line x1="200" y1="159" x2="200" y2="172" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="150" y="172" width="100" height="22" rx="11" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="200" y="187" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="sans-serif">Ask for help</text>
      {/* Labels */}
      <text x="268" y="72" fill="#22c55e" fontSize="8" fontFamily="sans-serif">YES</text>
      <text x="205" y="110" fill="#ef4444" fontSize="8" fontFamily="sans-serif">NO</text>
      <text x="268" y="130" fill="#22c55e" fontSize="8" fontFamily="sans-serif">YES</text>
      <text x="205" y="167" fill="#f59e0b" fontSize="8" fontFamily="sans-serif">NO</text>
    </svg>
  ),

  /* 23 — Cloud Storage */
  23: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Cloud */}
      <ellipse cx="200" cy="75" rx="90" ry="45" fill="#1e1b4b" stroke="url(#vg)" strokeWidth="2" />
      <circle cx="145" cy="90" r="30" fill="#1e1b4b" stroke="url(#vg)" strokeWidth="2" />
      <circle cx="255" cy="90" r="30" fill="#1e1b4b" stroke="url(#vg)" strokeWidth="2" />
      <rect x="145" y="85" width="110" height="38" fill="#1e1b4b" />
      <text x="200" y="80" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Cloud Storage</text>
      {/* Upload/Download arrows */}
      <line x1="200" y1="128" x2="200" y2="155" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="195,140 205,140 200,128" fill="#8b5cf6" />
      <polygon points="195,148 205,148 200,160" fill="#ec4899" />
      {/* Devices */}
      {[
        { x: 30, y: 130, w: 60, h: 45, label: 'Laptop' },
        { x: 170, y: 158, w: 60, h: 30, label: 'Phone' },
        { x: 310, y: 130, w: 60, h: 45, label: 'Desktop' },
      ].map((d, i) => (
        <g key={i}>
          <rect x={d.x} y={d.y} width={d.w} height={d.h} rx="5" fill="#1e1b2e" stroke="#334155" strokeWidth="1.5" />
          <text x={d.x + d.w / 2} y={d.y + d.h / 2 + 4} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{d.label}</text>
          <line x1={d.x + d.w / 2} y1={d.y} x2="200" y2="128" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        </g>
      ))}
    </svg>
  ),

  /* 24 — Mobile Devices */
  24: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Phone */}
      <rect x="80" y="20" width="90" height="160" rx="14" fill="#1e1b2e" stroke="#8b5cf6" strokeWidth="2.5" />
      <rect x="88" y="34" width="74" height="120" rx="4" fill="#0a0a14" />
      <circle cx="125" cy="178" r="6" fill="#334155" />
      <rect x="112" y="24" width="26" height="4" rx="2" fill="#334155" />
      {/* App grid on phone */}
      {[
        '#8b5cf6','#ec4899','#34d399','#f59e0b',
        '#38bdf8','#a78bfa','#fb7185','#22c55e',
      ].map((c, i) => (
        <rect key={i} x={92 + (i % 4) * 18} y={38 + Math.floor(i / 4) * 20} width="14" height="14" rx="4" fill={c} opacity="0.8" />
      ))}
      {/* Tablet */}
      <rect x="210" y="30" width="150" height="140" rx="10" fill="#1e1b2e" stroke="#ec4899" strokeWidth="2" />
      <rect x="218" y="40" width="134" height="110" rx="4" fill="#0a0a14" />
      <circle cx="285" cy="175" r="6" fill="#334155" />
      {/* App icons on tablet */}
      {[
        { x: 225, y: 48, color: '#8b5cf6', label: 'Maps' },
        { x: 265, y: 48, color: '#ec4899', label: 'Music' },
        { x: 305, y: 48, color: '#34d399', label: 'Camera' },
        { x: 225, y: 95, color: '#f59e0b', label: 'Mail' },
        { x: 265, y: 95, color: '#38bdf8', label: 'Notes' },
        { x: 305, y: 95, color: '#a78bfa', label: 'Shop' },
      ].map((app, i) => (
        <g key={i}>
          <rect x={app.x} y={app.y} width="32" height="30" rx="8" fill={app.color} opacity="0.75" />
          <text x={app.x + 16} y={app.y + 42} textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">{app.label}</text>
        </g>
      ))}
    </svg>
  ),

  /* 25 — Digital Citizenship */
  25: (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      {defs}
      <rect width="400" height="200" fill="url(#bg)" rx="16" />
      {/* Globe */}
      <circle cx="200" cy="95" r="55" fill="#0a0a14" stroke="#8b5cf6" strokeWidth="1.5" />
      <ellipse cx="200" cy="95" rx="22" ry="55" fill="none" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="200" cy="95" rx="55" ry="20" fill="none" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4" />
      {/* People around globe */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 200 + 78 * Math.cos(rad);
        const cy = 95 + 78 * Math.sin(rad);
        const colors = ['#8b5cf6','#ec4899','#34d399','#f59e0b','#38bdf8','#a78bfa'];
        return (
          <g key={i}>
            <line x1={200 + 57 * Math.cos(rad)} y1={95 + 57 * Math.sin(rad)} x2={cx - 8 * Math.cos(rad)} y2={cy - 8 * Math.sin(rad)} stroke={colors[i]} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
            <circle cx={cx} cy={cy} r="10" fill={colors[i]} opacity="0.8" />
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#fff" fontSize="10">👤</text>
          </g>
        );
      })}
      {/* Values */}
      {[
        { x: 50, y: 25, text: 'Respect' },
        { x: 320, y: 25, text: 'Privacy' },
        { x: 20, y: 170, text: 'Honesty' },
        { x: 330, y: 170, text: 'Safety' },
      ].map((v, i) => (
        <text key={i} x={v.x} y={v.y} textAnchor="middle" fill="#c4b5fd" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{v.text}</text>
      ))}
      <text x="200" y="185" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="sans-serif">Being a responsible and respectful member of the digital world</text>
    </svg>
  ),
};

const LessonIllustration: React.FC<Props> = ({ lessonId }) => {
  const svg = svgs[lessonId];
  if (!svg) return null;
  return (
    <div className="w-full overflow-hidden rounded-[1.5rem] animate-fade-in">
      {React.cloneElement(svg as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-full h-auto' })}
    </div>
  );
};

export default LessonIllustration;
