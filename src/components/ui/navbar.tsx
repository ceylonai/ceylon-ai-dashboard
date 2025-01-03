import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-600" />
            <span className="text-white font-semibold">Ceylon AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
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
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started Free
          </Button>
        </div>
      </div>
    </nav>
  )
}
