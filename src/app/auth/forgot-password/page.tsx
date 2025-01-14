'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from 'lucide-react'

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center px-8 py-12 md:px-12 bg-white dark:bg-gray-900">
                <div className="w-full max-w-sm space-y-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Forgot Password</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Enter your email address
                        </p>
                    </div>
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                                Send Reset Link
                            </Button>
                        </form>
                    ) : (
                        <Alert variant="default" className="bg-green-100 dark:bg-green-900">
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <AlertTitle className="text-green-800 dark:text-green-200">Success</AlertTitle>
                            <AlertDescription className="text-green-700 dark:text-green-300">
                                If an account exists for {email}, you will receive a password reset email shortly.
                            </AlertDescription>
                        </Alert>
                    )}
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Remember your password?{" "}
                        <Link href="/auth/signin" className="text-purple-600 hover:underline dark:text-purple-400">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative">
                <Image
                    src="/ceylon-ai-background.jpg"
                    alt="Ceylon AI Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute top-6 right-6 z-10">
                    <Image
                        src="/ceylonAilogo.png"
                        alt="Ceylon AI Logo"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center text-white">
                    <h2 className="text-5xl font-bold tracking-tighter">
                        Design workflows
                        <br />
                        With Ceylon AI
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        From tasks and workflows to apps and systems, build and automate
                        anything in one powerful visual platform.
                    </p>
                </div>
            </div>
        </div>
    )
}
