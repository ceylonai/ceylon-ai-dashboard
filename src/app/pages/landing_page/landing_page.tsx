import { Navbar } from "../../../components/ui/navbar"
import { Hero } from "../../../components/ui/hero"
import { Features } from "../../../components/ui/features"
import { Templates } from "../../../components/ui/template"
import { Footer } from "../../../components/ui/footer"



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
