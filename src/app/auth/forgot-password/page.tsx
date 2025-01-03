'use client'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {

    return (
        <div
            className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg ring-1 ring-purple-200">
                <h1 className="text-3xl font-extrabold text-black text-center">Forgot Password</h1>
                <p className="text-sm text-black text-center">
                    Enter your email address, and we’ll send you a link to reset your password. Or choose another
                    recovery option.
                </p>
                <form className="space-y-6">
                    <div>
                        <Input
                            type="email"
                            placeholder="Email address"
                            required
                            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>
                        <Button
                            type="submit"
                            className="w-full py-2 px-4 bg-black text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >reset password
                        </Button>
                </form>
            </div>
        </div>

    );
}
