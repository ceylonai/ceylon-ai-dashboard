import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Providers } from './providers'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ceylon AI",
  description: "AI App Builder empowers users to create, simulate, and deploy AI-powered apps effortlessly.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-gray-950 dark:bg-gray-900`}>
        <Providers>
            {children}
            <div className="fixed bottom-4 right-4 z-50">
                <ThemeSwitcher />
            </div>
        </Providers>
        </body>
        </html>
    )
}

