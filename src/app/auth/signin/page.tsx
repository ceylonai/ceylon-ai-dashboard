import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function SignIn() {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center px-8 py-12 md:px-12">
                <div className="w-full max-w-sm space-y-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Sign in</h1>
                        <p className="text-gray-500">
                            Log in to unlock tailored content and stay connected with your community.
                        </p>
                    </div>
                    <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                            <Image
                                src="/googlelogo.png"
                                alt="Google"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Sign in with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            <Image
                                src="/github-mark.png"
                                alt="Apple"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Sign in with GitHub
                        </Button>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-500">OR</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Input type="email" placeholder="Email"/>
                            <Input type="password" placeholder="Password"/>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember"/>
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Keep me signed in
                                    </label>
                                </div>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-purple-600 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Button className="w-full bg-black text-white hover:bg-black/90">
                                Sign in
                            </Button>
                        </div>
                    </div>
                    <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="text-purple-600 hover:underline">
                            Sign up
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
                <div className="absolute inset-0 bg-black bg-opacity-50"/>
                {/* Overlay for better text visibility */}
                <div className="absolute top-6 right-6 z-10">
                    <Image
                        src="/ceylonAilogo.png"
                        alt="Ceylon AI Logo"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div
                    className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center text-white">
                    <h2 className="text-5xl font-bold tracking-tighter">
                        Design workflows
                        <br/>
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

