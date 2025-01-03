import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl italic">
              Lorem Ipsum is not simply random
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
            </p>
            <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

