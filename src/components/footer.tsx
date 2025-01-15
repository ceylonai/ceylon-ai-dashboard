'use client';
import Link from "next/link"

export function Footer() {
  const sections = [
    {
      title: "LIFT MEDIA",
      links: ["Media", "Quienes somos", "Contacto", "Política de Privacidad"],
    },
    {
      title: "LEGAL",
      links: ["Condiciones generales", "Política de Cookies", "Privada"],
    },
    {
      title: "CONTACT",
      links: ["123 456 789", "WhatsApp", "hello@ceylon.com"],
    },
  ]

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <Link href="#" className="text-gray-400 hover:text-white">
            Twitter
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            LinkedIn
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Facebook
          </Link>
        </div>
        <div className="text-center text-gray-400 text-sm">
          © 2024 Ceylon AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

