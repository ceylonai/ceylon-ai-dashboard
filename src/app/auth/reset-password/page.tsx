'use client'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ResetPassword() {

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-black text-center">Reset Password</h1>
                <p className="text-sm text-black text-center">
                    Enter your new password below.
                </p>

                <form className="space-y-4">
                    <div>
                        <Input
                            type="password"
                            placeholder="New Password"
                            required
                            className="w-full border-black "
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            className="w-full border-black "
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-black hover:bg-purple-600 text-white"
                    >
                        Reset Password
                    </Button>
                </form>
            </div>
        </div>

    );
}
