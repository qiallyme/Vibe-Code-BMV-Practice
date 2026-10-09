import React from 'react';
import { SignShape, SignColor } from '../types';

interface TrafficSignProps {
  signType: string;
  blank?: boolean;
  shape?: SignShape;
  color?: SignColor;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
}

export const TrafficSign: React.FC<TrafficSignProps> = ({
  signType,
  blank = true,
  shape,
  color,
  size = 'md',
  className = '',
  showBadge = true,
}) => {
  // Dimension scale
  const sizeMap = {
    sm: { width: 120, height: 120 },
    md: { width: 200, height: 200 },
    lg: { width: 260, height: 260 },
    xl: { width: 320, height: 320 },
  };

  const { width, height } = sizeMap[size];

  // Colors according to MUTCD standard
  const MUTCD_RED = '#C91414';
  const MUTCD_YELLOW = '#F5B800';
  const MUTCD_ORANGE = '#F15A24';
  const MUTCD_GREEN = '#007A3D';
  const MUTCD_BLUE = '#0055A5';
  const MUTCD_BROWN = '#6E4324';
  const MUTCD_FLUORESCENT_YG = '#D4EE11';
  const BLACK = '#18181B';
  const WHITE = '#FFFFFF';

  const renderSignGraphic = () => {
    switch (signType) {
      // 1. STOP SIGN (Red Octagon)
      case 'stop': {
        const points = '60,10 140,10 190,60 190,140 140,190 60,190 10,140 10,60';
        const innerPoints = '62,15 138,15 185,62 185,138 138,185 62,185 15,138 15,62';
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points={points} fill={WHITE} />
            <polygon points={innerPoints} fill={MUTCD_RED} stroke={WHITE} strokeWidth="5" />
            {blank ? (
              <g>
                {/* Blank indicator outline */}
                <rect x="40" y="80" width="120" height="40" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="6,4" rx="6" />
                <text x="100" y="105" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="16" fontFamily="sans-serif" fontWeight="bold">
                  [ ? ? ? ? ]
                </text>
              </g>
            ) : (
              <text x="100" y="122" textAnchor="middle" fill={WHITE} fontSize="44" fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" letterSpacing="2">
                STOP
              </text>
            )}
          </svg>
        );
      }

      // 2. YIELD SIGN (Downward Equilateral Triangle)
      case 'yield': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="10,25 190,25 100,185" fill={MUTCD_RED} stroke={MUTCD_RED} strokeWidth="2" strokeLinejoin="round" />
            <polygon points="36,40 164,40 100,152" fill={WHITE} strokeLinejoin="round" />
            <polygon points="62,56 138,56 100,122" fill={WHITE} />
            {blank ? (
              <g>
                <rect x="55" y="65" width="90" height="32" fill="none" stroke="rgba(201,20,20,0.3)" strokeWidth="2" strokeDasharray="5,4" rx="4" />
                <text x="100" y="86" textAnchor="middle" fill="rgba(201,20,20,0.6)" fontSize="14" fontFamily="sans-serif" fontWeight="bold">
                  [ ? ? ? ? ? ]
                </text>
              </g>
            ) : (
              <text x="100" y="88" textAnchor="middle" fill={MUTCD_RED} fontSize="28" fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" letterSpacing="1">
                YIELD
              </text>
            )}
          </svg>
        );
      }

      // 3. NO PASSING ZONE (Pennant / Triangle pointing right)
      case 'no_passing': {
        return (
          <svg viewBox="0 0 240 160" width={width * 1.2} height={height * 0.8} className="drop-shadow-md">
            <polygon points="15,15 225,80 15,145" fill={BLACK} strokeLinejoin="round" />
            <polygon points="20,22 212,80 20,138" fill={MUTCD_YELLOW} stroke={WHITE} strokeWidth="2" strokeLinejoin="round" />
            <polygon points="26,30 198,80 26,130" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <rect x="35" y="60" width="110" height="40" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,3" rx="4" />
                <text x="90" y="85" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="14" fontFamily="sans-serif" fontWeight="bold">
                  [ ? ? ? ? ? ? ? ]
                </text>
              </g>
            ) : (
              <g fill={BLACK} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" textAnchor="start">
                <text x="36" y="64" fontSize="16" letterSpacing="1">NO</text>
                <text x="36" y="86" fontSize="16" letterSpacing="1">PASSING</text>
                <text x="36" y="108" fontSize="16" letterSpacing="1">ZONE</text>
              </g>
            )}
          </svg>
        );
      }

      // 4. RAILROAD ADVANCE WARNING (Yellow Circle with X)
      case 'railroad': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <circle cx="100" cy="100" r="92" fill={BLACK} />
            <circle cx="100" cy="100" r="88" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" />
            {/* Bold Cross X */}
            <line x1="38" y1="38" x2="162" y2="162" stroke={BLACK} strokeWidth="16" strokeLinecap="square" />
            <line x1="162" y1="38" x2="38" y2="162" stroke={BLACK} strokeWidth="16" strokeLinecap="square" />
            {blank ? (
              <g>
                <circle cx="48" cy="100" r="16" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="4,3" />
                <circle cx="152" cy="100" r="16" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="4,3" />
                <text x="48" y="105" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="13" fontWeight="bold">?</text>
                <text x="152" y="105" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="13" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="38">
                <text x="50" y="112" textAnchor="middle">R</text>
                <text x="150" y="112" textAnchor="middle">R</text>
              </g>
            )}
          </svg>
        );
      }

      // 5. SCHOOL ZONE / SCHOOL CROSSING (Pentagon)
      case 'school_zone': {
        // Pentagon / House shape pointing up
        const pentagonPoints = '100,15 185,80 185,185 15,185 15,80';
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points={pentagonPoints} fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,22 178,82 178,178 22,178 22,82" fill={MUTCD_FLUORESCENT_YG} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <rect x="50" y="90" width="100" height="50" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" rx="4" />
                <text x="100" y="120" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="14" fontFamily="sans-serif" fontWeight="bold">
                  [ SCHOOL ]
                </text>
              </g>
            ) : (
              // Pedestrian adults and children walking with school bag
              <g fill={BLACK}>
                {/* Adult */}
                <circle cx="80" cy="75" r="9" />
                <path d="M72 88 L88 88 L85 125 L92 155 L82 155 L78 130 L74 155 L64 155 L72 110 Z" />
                <rect x="62" y="105" width="12" height="15" rx="2" />
                {/* Child */}
                <circle cx="120" cy="90" r="7.5" />
                <path d="M113 102 L127 102 L124 132 L130 155 L122 155 L119 135 L116 155 L108 155 L113 118 Z" />
                <rect x="123" y="112" width="10" height="12" rx="2" />
              </g>
            )}
          </svg>
        );
      }

      // 6. SLIPPERY WHEN WET (Yellow Diamond)
      case 'slippery_when_wet': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Car silhouette */}
                <path d="M76 96 L86 78 L114 78 L124 96 L134 100 L134 108 L66 108 L66 100 Z" />
                <circle cx="82" cy="110" r="6" />
                <circle cx="118" cy="110" r="6" />
                {/* Wavy skid marks */}
                <path d="M78 118 Q65 130 85 142 T65 160" fill="none" stroke={BLACK} strokeWidth="4" strokeLinecap="round" />
                <path d="M122 118 Q142 130 122 142 T142 160" fill="none" stroke={BLACK} strokeWidth="4" strokeLinecap="round" />
              </g>
            )}
          </svg>
        );
      }

      // 7. TRAFFIC SIGNAL AHEAD (Yellow Diamond)
      case 'signal_ahead': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <rect x="80" y="55" width="40" height="90" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" rx="4" />
                <text x="100" y="105" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="16" fontWeight="bold">?</text>
              </g>
            ) : (
              <g>
                {/* Traffic light housing */}
                <rect x="82" y="52" width="36" height="96" rx="6" fill={BLACK} stroke={WHITE} strokeWidth="1" />
                {/* Hoods */}
                <path d="M78 66 L82 66" stroke={BLACK} strokeWidth="3" />
                <path d="M118 66 L122 66" stroke={BLACK} strokeWidth="3" />
                {/* Lights: Red, Yellow, Green */}
                <circle cx="100" cy="68" r="10" fill={MUTCD_RED} stroke={BLACK} strokeWidth="1.5" />
                <circle cx="100" cy="100" r="10" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="1.5" />
                <circle cx="100" cy="132" r="10" fill={MUTCD_GREEN} stroke={BLACK} strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );
      }

      // 8. DIVIDED HIGHWAY BEGINS (Yellow Diamond)
      case 'divided_highway_begins': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Island / divider median at top */}
                <path d="M92 50 Q100 42 108 50 L108 80 Q100 86 92 80 Z" fill={BLACK} />
                {/* Left arrow going up and around */}
                <path d="M70 65 L60 65 L76 46 L92 65 L82 65 Q82 95 82 145 L70 145 Z" />
                {/* Right arrow going down */}
                <path d="M118 60 L130 60 Q130 115 130 125 L140 125 L124 146 L108 125 L118 125 Z" />
              </g>
            )}
          </svg>
        );
      }

      // 9. DIVIDED HIGHWAY ENDS (Yellow Diamond)
      case 'divided_highway_ends': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Island / divider median at bottom */}
                <path d="M92 120 Q100 112 108 120 L108 150 Q100 156 92 150 Z" fill={BLACK} />
                {/* Left arrow going up */}
                <path d="M70 75 L60 75 L76 56 L92 75 L82 75 Q82 105 82 145 L70 145 Z" />
                {/* Right arrow going down */}
                <path d="M118 60 L130 60 Q130 105 130 135 L140 135 L124 154 L108 135 L118 135 Z" />
              </g>
            )}
          </svg>
        );
      }

      // 10. LANE ENDS / MERGE LEFT (Yellow Diamond)
      case 'lane_ends': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g stroke={BLACK} strokeWidth="12" strokeLinecap="square">
                {/* Left straight line */}
                <line x1="75" y1="50" x2="75" y2="150" />
                {/* Right merging line */}
                <path d="M130 150 L130 105 Q125 75 95 65" fill="none" />
              </g>
            )}
          </svg>
        );
      }

      // 11. TWO-WAY TRAFFIC (Yellow Diamond)
      case 'two_way_traffic': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Left arrow pointing UP */}
                <polygon points="76,50 60,74 70,74 70,145 82,145 82,74 92,74" />
                {/* Right arrow pointing DOWN */}
                <polygon points="124,150 140,126 130,126 130,55 118,55 118,126 108,126" />
              </g>
            )}
          </svg>
        );
      }

      // 12. PEDESTRIAN CROSSING (Yellow Diamond)
      case 'pedestrian': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                <circle cx="100" cy="62" r="11" />
                <path d="M88 80 L112 80 L108 116 L124 148 L110 152 L98 122 L86 150 L72 144 L90 102 Z" />
              </g>
            )}
          </svg>
        );
      }

      // 13. DEER CROSSING (Yellow Diamond)
      case 'deer_crossing': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Leaping deer silhouette */}
                <path d="M60 120 Q70 95 100 95 L125 80 L135 60 L140 60 L135 75 L145 70 L140 85 L125 95 L115 110 L135 140 L125 145 L105 118 L90 122 L80 148 L70 145 L78 115 Z" />
                {/* Antlers */}
                <path d="M136 60 Q145 45 152 48 M140 54 Q135 44 144 42" stroke={BLACK} strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>
            )}
          </svg>
        );
      }

      // 14. SHARP TURN / CURVE RIGHT (Yellow Diamond)
      case 'sharp_turn_right': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* 90-degree right arrow */}
                <path d="M85 148 L103 148 L103 102 L128 102 L128 116 L154 92 L128 68 L128 82 L85 82 Z" />
              </g>
            )}
          </svg>
        );
      }

      // 15. WINDING ROAD (Yellow Diamond)
      case 'winding_road': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g stroke={BLACK} strokeWidth="16" strokeLinecap="square" fill="none">
                <path d="M100 152 Q80 135 100 118 T100 78 L100 58" />
                <polygon points="100,42 85,62 115,62" fill={BLACK} stroke="none" />
              </g>
            )}
          </svg>
        );
      }

      // 16. STEEP DOWNGRADE / HILL (Yellow Diamond)
      case 'steep_downgrade': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Slope wedge */}
                <polygon points="50,140 150,140 150,110" />
                {/* Truck on tilt */}
                <g transform="translate(70, 75) rotate(16)">
                  <rect x="0" y="0" width="40" height="20" />
                  <rect x="42" y="8" width="16" height="12" />
                  <circle cx="10" cy="22" r="5" fill={BLACK} />
                  <circle cx="30" cy="22" r="5" fill={BLACK} />
                  <circle cx="50" cy="22" r="5" fill={BLACK} />
                </g>
              </g>
            )}
          </svg>
        );
      }

      // 17. DO NOT ENTER (Square with Red Circle & White Bar)
      case 'do_not_enter': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <rect x="10" y="10" width="180" height="180" rx="16" fill={WHITE} stroke={BLACK} strokeWidth="4" />
            <circle cx="100" cy="100" r="76" fill={MUTCD_RED} />
            <rect x="38" y="86" width="124" height="28" rx="2" fill={WHITE} />
            {blank ? (
              <g>
                <text x="100" y="58" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="14" fontWeight="bold">
                  [ ? ? ]
                </text>
                <text x="100" y="148" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="14" fontWeight="bold">
                  [ ? ? ? ? ? ]
                </text>
              </g>
            ) : (
              <g fill={WHITE} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" textAnchor="middle">
                <text x="100" y="62" fontSize="22" letterSpacing="1">DO NOT</text>
                <text x="100" y="152" fontSize="22" letterSpacing="1">ENTER</text>
              </g>
            )}
          </svg>
        );
      }

      // 18. WRONG WAY (Red Horizontal Rectangle)
      case 'wrong_way': {
        return (
          <svg viewBox="0 0 240 150" width={width * 1.2} height={height * 0.75} className="drop-shadow-md">
            <rect x="10" y="10" width="220" height="130" rx="12" fill={MUTCD_RED} stroke={WHITE} strokeWidth="6" />
            {blank ? (
              <g>
                <rect x="30" y="35" width="180" height="80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="6,4" rx="6" />
                <text x="120" y="80" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="18" fontWeight="bold">
                  [ ? ? ? ? ?   ? ? ? ]
                </text>
              </g>
            ) : (
              <g fill={WHITE} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" textAnchor="middle">
                <text x="120" y="65" fontSize="30" letterSpacing="2">WRONG</text>
                <text x="120" y="110" fontSize="30" letterSpacing="2">WAY</text>
              </g>
            )}
          </svg>
        );
      }

      // 19. SPEED LIMIT (White Vertical Rectangle)
      case 'speed_limit': {
        return (
          <svg viewBox="0 0 150 200" width={width * 0.75} height={height} className="drop-shadow-md">
            <rect x="8" y="8" width="134" height="184" rx="10" fill={WHITE} stroke={BLACK} strokeWidth="6" />
            <text x="75" y="44" textAnchor="middle" fill={BLACK} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">
              SPEED
            </text>
            <text x="75" y="68" textAnchor="middle" fill={BLACK} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">
              LIMIT
            </text>
            {blank ? (
              <g>
                <rect x="25" y="82" width="100" height="85" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="3" strokeDasharray="6,4" rx="8" />
                <text x="75" y="138" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="40" fontWeight="bold">
                  ??
                </text>
              </g>
            ) : (
              <text x="75" y="152" textAnchor="middle" fill={BLACK} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="72">
                55
              </text>
            )}
          </svg>
        );
      }

      // 20. ONE WAY (Black Horizontal Rectangle with White Arrow)
      case 'one_way': {
        return (
          <svg viewBox="0 0 240 110" width={width * 1.3} height={height * 0.6} className="drop-shadow-md">
            <rect x="8" y="8" width="224" height="94" rx="8" fill={BLACK} stroke={WHITE} strokeWidth="4" />
            {/* White arrow pointing right */}
            <path d="M30 40 L160 40 L160 22 L210 55 L160 88 L160 70 L30 70 Z" fill={WHITE} />
            {blank ? (
              <text x="100" y="62" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="16" fontWeight="bold">
                [ ? ? ?   ? ? ? ]
              </text>
            ) : (
              <text x="100" y="63" textAnchor="middle" fill={BLACK} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">
                ONE WAY
              </text>
            )}
          </svg>
        );
      }

      // 21. NO U-TURN (White Square with Slash)
      case 'no_u_turn': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <rect x="10" y="10" width="180" height="180" rx="14" fill={WHITE} stroke={BLACK} strokeWidth="4" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(201,20,20,0.3)" strokeWidth="4" strokeDasharray="6,4" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="rgba(201,20,20,0.3)" strokeWidth="4" strokeDasharray="6,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="16" fontWeight="bold">
                  [ PROHIBITED ]
                </text>
              </g>
            ) : (
              <g>
                {/* U-Turn Arrow */}
                <path d="M124 140 L124 95 Q124 65 98 65 Q72 65 72 95 L72 108 L58 108 L80 134 L102 108 L88 108 L88 95 Q88 78 98 78 Q108 78 108 95 L108 140 Z" fill={BLACK} />
                {/* Red prohibition circle and slash */}
                <circle cx="100" cy="100" r="72" fill="none" stroke={MUTCD_RED} strokeWidth="16" />
                <line x1="48" y1="48" x2="152" y2="152" stroke={MUTCD_RED} strokeWidth="16" />
              </g>
            )}
          </svg>
        );
      }

      // 22. NO LEFT TURN
      case 'no_left_turn': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <rect x="10" y="10" width="180" height="180" rx="14" fill={WHITE} stroke={BLACK} strokeWidth="4" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(201,20,20,0.3)" strokeWidth="4" strokeDasharray="6,4" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="rgba(201,20,20,0.3)" strokeWidth="4" strokeDasharray="6,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="16" fontWeight="bold">
                  [ PROHIBITED ]
                </text>
              </g>
            ) : (
              <g>
                {/* Left turn arrow */}
                <path d="M110 145 L126 145 L126 95 L85 95 L85 110 L55 85 L85 60 L85 75 L110 75 Z" fill={BLACK} />
                {/* Red prohibition circle and slash */}
                <circle cx="100" cy="100" r="72" fill="none" stroke={MUTCD_RED} strokeWidth="16" />
                <line x1="48" y1="48" x2="152" y2="152" stroke={MUTCD_RED} strokeWidth="16" />
              </g>
            )}
          </svg>
        );
      }

      // 23. NO RIGHT TURN
      case 'no_right_turn': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <rect x="10" y="10" width="180" height="180" rx="14" fill={WHITE} stroke={BLACK} strokeWidth="4" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(201,20,20,0.3)" strokeWidth="4" strokeDasharray="6,4" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="rgba(201,20,20,0.3)" strokeWidth="4" strokeDasharray="6,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="16" fontWeight="bold">
                  [ PROHIBITED ]
                </text>
              </g>
            ) : (
              <g>
                {/* Right turn arrow */}
                <path d="M90 145 L74 145 L74 95 L115 95 L115 110 L145 85 L115 60 L115 75 L90 75 Z" fill={BLACK} />
                <circle cx="100" cy="100" r="72" fill="none" stroke={MUTCD_RED} strokeWidth="16" />
                <line x1="48" y1="48" x2="152" y2="152" stroke={MUTCD_RED} strokeWidth="16" />
              </g>
            )}
          </svg>
        );
      }

      // 24. KEEP RIGHT (White Vertical Rectangle)
      case 'keep_right': {
        return (
          <svg viewBox="0 0 150 200" width={width * 0.75} height={height} className="drop-shadow-md">
            <rect x="8" y="8" width="134" height="184" rx="10" fill={WHITE} stroke={BLACK} strokeWidth="6" />
            {blank ? (
              <g>
                <circle cx="75" cy="100" r="30" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="75" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="16" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Median obstruction island */}
                <path d="M50 80 Q56 72 62 80 L62 140 Q56 148 50 140 Z" fill={BLACK} />
                {/* Curving arrow to right of median */}
                <path d="M72 145 L86 145 Q86 100 102 85 L102 96 L122 75 L102 54 L102 65 Q72 85 72 145 Z" />
              </g>
            )}
          </svg>
        );
      }

      // 25. FLAGGER AHEAD (Orange Diamond)
      case 'flagger_ahead': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_ORANGE} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Worker with hardhat */}
                <circle cx="105" cy="62" r="10" />
                <path d="M96 55 L118 55 L120 62 L94 62 Z" /> {/* Hard hat brim */}
                <path d="M96 76 L118 76 L118 120 L124 152 L110 152 L106 126 L102 152 L88 152 L96 110 Z" />
                {/* Flag extended horizontally */}
                <line x1="70" y1="88" x2="110" y2="88" stroke={BLACK} strokeWidth="4" />
                <polygon points="50,88 70,72 70,104" fill={BLACK} />
              </g>
            )}
          </svg>
        );
      }

      // 26. WORKERS AHEAD / ROAD WORK (Orange Diamond)
      case 'road_work_ahead': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_ORANGE} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={BLACK}>
                {/* Person digging with shovel */}
                <circle cx="118" cy="60" r="9" />
                <path d="M108 72 L128 72 L112 110 L125 145 L112 148 L98 116 L78 140 L68 132 L92 98 Z" />
                <line x1="85" y1="110" x2="140" y2="145" stroke={BLACK} strokeWidth="4" />
                <polygon points="135,140 148,150 142,156 128,145" />
              </g>
            )}
          </svg>
        );
      }

      // 27. STOP AHEAD (Yellow Diamond with Stop Octagon & Arrow)
      case 'stop_ahead': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g>
                {/* Red Octagon */}
                <polygon points="85,85 115,85 130,100 130,130 115,145 85,145 70,130 70,100" fill={MUTCD_RED} stroke={WHITE} strokeWidth="2" />
                {/* Upward forward arrow */}
                <path d="M100 45 L80 68 L92 68 L92 85 L108 85 L108 68 L120 68 Z" fill={BLACK} />
              </g>
            )}
          </svg>
        );
      }

      // 28. YIELD AHEAD (Yellow Diamond with Yield Triangle & Arrow)
      case 'yield_ahead': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={BLACK} strokeLinejoin="round" />
            <polygon points="100,16 184,100 100,184 16,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" strokeLinejoin="round" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeDasharray="5,4" />
                <text x="100" y="106" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="18" fontWeight="bold">?</text>
              </g>
            ) : (
              <g>
                {/* Downward triangle */}
                <polygon points="70,95 130,95 100,145" fill={MUTCD_RED} />
                <polygon points="80,100 120,100 100,135" fill={WHITE} />
                {/* Upward arrow */}
                <path d="M100 45 L80 68 L92 68 L92 88 L108 88 L108 68 L120 68 Z" fill={BLACK} />
              </g>
            )}
          </svg>
        );
      }

      // 29. HOSPITAL (Blue Square with White H)
      case 'hospital': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <rect x="12" y="12" width="176" height="176" rx="16" fill={MUTCD_BLUE} stroke={WHITE} strokeWidth="4" />
            {blank ? (
              <g>
                <rect x="60" y="60" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeDasharray="6,4" rx="6" />
                <text x="100" y="108" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="24" fontWeight="bold">?</text>
              </g>
            ) : (
              <text x="100" y="142" textAnchor="middle" fill={WHITE} fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="120">
                H
              </text>
            )}
          </svg>
        );
      }

      // 30. RECREATIONAL / CAMPGROUND (Brown Square)
      case 'recreation': {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <rect x="12" y="12" width="176" height="176" rx="16" fill={MUTCD_BROWN} stroke={WHITE} strokeWidth="4" />
            {blank ? (
              <g>
                <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeDasharray="6,4" />
                <text x="100" y="108" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="24" fontWeight="bold">?</text>
              </g>
            ) : (
              <g fill={WHITE}>
                {/* Tent symbol */}
                <polygon points="100,50 40,150 160,150" />
                <polygon points="100,65 58,145 100,145" fill={MUTCD_BROWN} />
              </g>
            )}
          </svg>
        );
      }

      // Default fallback: Blank Shape representation
      default: {
        return (
          <svg viewBox="0 0 200 200" width={width} height={height} className="drop-shadow-md">
            <polygon points="100,10 190,100 100,190 10,100" fill={MUTCD_YELLOW} stroke={BLACK} strokeWidth="4" />
            <text x="100" y="108" textAnchor="middle" fill={BLACK} fontSize="28" fontWeight="bold">
              ?
            </text>
          </svg>
        );
      }
    }
  };

  const accessibleSignLabel = blank
    ? `Official Indiana BMV Blank Traffic Sign: ${shape || 'road sign'} in ${color || 'standard'} color. Symbols and text are blanked out for identification.`
    : `Official Traffic Sign: ${signType.replace(/_/g, ' ')} sign in ${color || 'standard'} color.`;

  return (
    <div
      role="img"
      aria-label={accessibleSignLabel}
      className={`flex flex-col items-center justify-center ${className}`}
    >
      <div className="relative p-2 bg-slate-100/80 rounded-2xl border border-slate-200/80 shadow-inner flex items-center justify-center">
        {renderSignGraphic()}
      </div>

      <span className="sr-only">{accessibleSignLabel}</span>

      {showBadge && (
        <div className="mt-2 text-xs font-semibold tracking-wider uppercase text-slate-500" aria-hidden="true">
          {blank ? (
            <span className="text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              BMV Blank Test Sign
            </span>
          ) : (
            <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Completed Sign
            </span>
          )}
        </div>
      )}
    </div>
  );
};
