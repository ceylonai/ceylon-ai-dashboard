import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Signup() {
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
                                src="/google.svg"
                                alt="Google"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Sign up with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            <Image
                                src="/apple.svg"
                                alt="Apple"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Sign up with Apple
                        </Button>
                    </div>
                </div>
            </div>


        </div>

)
}

