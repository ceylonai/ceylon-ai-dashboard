'use client';
import { Navbar } from "../../../components/navbar"
import { Hero } from "../../../components/hero"
import { Features } from "../../../components/features"
import { Templates } from "../../../components/template"
import { Footer } from "../../../components/footer"
import VantaBackground from "../../../components/amimation-landingpage"


export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VantaBackground>
      <Hero />
      </VantaBackground>
      <Features />
      <Templates />
      <Footer />
    </main>
  )
}
