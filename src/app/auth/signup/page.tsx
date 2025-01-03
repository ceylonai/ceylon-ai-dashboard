import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUp() {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center px-8 py-12 md:px-12">
                <div className="w-full max-w-sm space-y-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Sign up</h1>
                        <p className="text-gray-500">
                            Create an account to unlock tailored content and stay connected with your community.
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
                            Sign up with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            <Image
                                src="/github-mark.png"
                                alt="Apple"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Sign up with Apple
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
                            <Input type="text" placeholder="Full Name"/>
                            <Input type="email" placeholder="Email"/>
                            <Input type="password" placeholder="Password"/>
                            <Input type="password" placeholder="Confirm Password"/>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms"/>
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I agree to the{" "}
                                    <Link href="/terms" className="text-purple-600 hover:underline">
                                        terms and conditions
                                    </Link>
                                </label>
                            </div>
                            <Button className="w-full bg-black text-white hover:bg-black/90">
                                Sign up
                            </Button>
                        </div>
                    </div>
                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-purple-600 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative bg-[#2D1B69] text-white">
                <div className="absolute top-6 right-6">
                    <Image
                        src="/ceylonAiLogo.png"
                        alt="Ceylon AI Logo"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
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

