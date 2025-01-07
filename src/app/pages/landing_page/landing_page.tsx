import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Templates } from "@/components/template"
import { Footer } from "@/components/footer"



export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Footer />
    </main>
  )
}
