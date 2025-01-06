import { Button } from "../components/ui/button"
import "../components/ui/get-started-btn.css";

export function Hero() {
  return (
    <section className="h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex relative">
          <div className="absolute inset-0 bg-gradient-to-r mt-16 from-purple-600/40 to-pink-600/20 blur-3xl" />
          <div className="relative flex-1 bg-black bg-opacity-50 rounded-lg p-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-16 font-bold text-white max-w-4xl italic">
                Empower Your AI App Creation Journey
            </h1>
            <p className="mt-10 text-lg text-gray-400 max-w-2xl">
                AI App Builder empowers users to create, simulate, and deploy AI-powered apps effortlessly. Our intuitive drag-and-drop tool enables seamless custom app development, performance optimization, and multi-platform deployment within a user-friendly online environment.
            </p>
            {/* sup = signup(get started button) */}
            <Button className="mt-46 sup">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Get Started Free
            </Button>
          </div>
        </div>
      </div>


    </section>
  )
}

