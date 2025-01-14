import Link from "next/link"
import { Button } from "../components/ui/button"
import "../components/ui/get-started-btn.css" ;


export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img className="w-8 h-8 rounded-full mr-2" src="/logoAi.png" alt="" />
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
          <Button variant="ghost" className="nlg">
            <Link href="/auth/signin">
            Login
            </Link>
          </Button>
          <Button className="nsup">
          <Link href="/auth/signup">
             <span></span>
              <span></span>
              <span></span>
              <span></span>
            Get Started Free
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
