'use client'

import Link from "next/link"
import { Button } from "../components/ui/button"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter()

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="rounded-full mr-2"
              src="/logoAi.png"
              alt="Logo"
              width={42}
              height={42}
            />
            <span className="text-white font-semibold">Ceylon AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 ml-12">
            <Link href="#" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Services
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="nlg"
            onClick={() => router.push('/auth/signin')}
          >
            Login
          </Button>
          <Button
            className="nsup bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => router.push('/auth/signup')}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </nav>
  )
}

