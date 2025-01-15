'use client'

import { useEffect, useRef } from 'react'

interface VantaBackgroundProps {
  children?: React.ReactNode
}
declare global {
  interface Window {
    VANTA: {
      NET: (options: Record<string, unknown>) => { destroy: () => void }
    }
    THREE: unknown
  }
}

export { };


export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffectRef = useRef<any>(null)

  useEffect(() => {
    const loadScripts = async () => {
      if (typeof window === 'undefined') return;

      // Ensure Three.js is loaded
      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        threeScript.async = true;
        document.body.appendChild(threeScript);
        await new Promise((resolve) => {
          threeScript.onload = resolve;
        });
      }

      // Ensure VANTA is loaded
      if (!window.VANTA) {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
        vantaScript.async = true;
        document.body.appendChild(vantaScript);
        await new Promise((resolve) => {
          vantaScript.onload = resolve;
        });
      }

      // Reinitialize VANTA effect
      if (vantaRef.current && !vantaEffectRef.current) {
        vantaEffectRef.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3f81,
          backgroundColor: 0x0,
          spacing: 16.0,
          points: 11.0,
          maxDistance: 18.0,
        });
      }
    };

    loadScripts();

    // Cleanup VANTA effect when component unmounts
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, [vantaRef]);


  return (
    <div ref={vantaRef} className="relative flex-1">
      {children}
    </div>
  )
}
