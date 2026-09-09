import React from 'react';
import { motion } from 'motion/react';

interface SurfboardMenuIconProps {
  isOpen: boolean;
  className?: string;
}

// Highly defined surfboard side profile:
// - Upcurved pointed nose at left with authentic rocker
// - Visible foam thickness along the body tapering to nose & tail
// - Unmistakable hydrodynamic swept dual-fins (main skeg + front fin) extending down at tail
const SURFBOARD_PATH = 
  "M 4 4.0 " +
  "C 18 2.6, 50 2.2, 80 2.5 " +
  "C 98 2.8, 110 3.6, 116 4.8 " +
  "C 116.5 5.8, 115.5 7.2, 113 7.8 " +
  "C 109 8.0, 106 8.0, 103 8.0 " +
  "C 103.5 10.5, 105.0 14.5, 108.0 18.2 " +
  "C 105.5 17.5, 101.0 14.0, 96.0 8.2 " +
  "C 94.0 8.3, 91.5 8.4, 89.0 8.5 " +
  "C 89.5 10.5, 91.0 12.8, 92.8 14.8 " +
  "C 91.0 14.0, 87.5 11.5, 84.5 8.6 " +
  "C 60 8.8, 36 8.2, 18 6.6 " +
  "C 10 5.6, 5 4.8, 4 4.0 Z";

export default function SurfboardMenuIcon({ 
  isOpen, 
  className = "w-11 h-6 sm:w-13 sm:h-7" 
}: SurfboardMenuIconProps) {
  return (
    <svg 
      viewBox="0 0 120 70" 
      className={`${className} overflow-visible transition-colors duration-200 select-none pointer-events-none`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top Surfboard */}
      <motion.g
        animate={
          isOpen 
            ? { y: 26, rotate: 45 } 
            : { y: 0, rotate: 0 }
        }
        style={{ transformOrigin: '60px 35px' }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <path d={SURFBOARD_PATH} transform="translate(0, 2)" />
      </motion.g>

      {/* Middle Surfboard */}
      <motion.g
        animate={
          isOpen 
            ? { opacity: 0, x: -10, scale: 0.8 } 
            : { opacity: 1, x: 0, scale: 1 }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <path d={SURFBOARD_PATH} transform="translate(0, 24)" />
      </motion.g>

      {/* Bottom Surfboard */}
      <motion.g
        animate={
          isOpen 
            ? { y: -18, rotate: -45 } 
            : { y: 0, rotate: 0 }
        }
        style={{ transformOrigin: '60px 35px' }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <path d={SURFBOARD_PATH} transform="translate(0, 46)" />
      </motion.g>
    </svg>
  );
}
