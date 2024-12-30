'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY }); // Remove the offset
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{ // Use style for direct manipulation
        x: position.x,
        y: position.y,
      }}
      // Remove or drastically reduce transition
      transition={{
        duration: 0.01, // Very small duration for minimal smoothing
        ease: "linear" // Linear easing for direct movement
      }}
    />
  );
}