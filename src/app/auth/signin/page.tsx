import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
        </div>
    )
}
