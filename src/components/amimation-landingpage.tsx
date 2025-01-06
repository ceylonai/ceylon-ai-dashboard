'use client'

import { useEffect, useRef } from 'react'

interface VantaBackgroundProps {
  children?: React.ReactNode
}
declare global {
    interface Window {
      VANTA: any;
      THREE: any;
    }
  }
  
  export {};
  

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffectRef = useRef<any>(null)

  useEffect(() => {
    // Load scripts dynamically
    const loadScripts = async () => {
      if (typeof window === 'undefined') return

      // Load Three.js first
      if (!window.THREE) {
        const threeScript = document.createElement('script')
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        threeScript.async = true
        document.body.appendChild(threeScript)

        await new Promise((resolve) => {
          threeScript.onload = resolve
        })
      }

      // Then load VANTA
      if (!window.VANTA) {
        const vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'
        vantaScript.async = true
        document.body.appendChild(vantaScript)

        await new Promise((resolve) => {
          vantaScript.onload = resolve
        })
      }

      // Initialize VANTA effect
      if (vantaRef.current && !vantaEffectRef.current) {
        vantaEffectRef.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xff3f81,
          backgroundColor: 0x0,
          spacing: 16.00,
          points: 11.00,
          maxDistance: 18.00
        })
      }
    }

    loadScripts()

    // Cleanup
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy()
      }
    }
  }, [])

  return (
    <div ref={vantaRef} className="relative flex-1">
      {children}
    </div>
  )
}
