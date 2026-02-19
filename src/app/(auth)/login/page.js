import LoginForm from "@/components/ui/auth/LoginForm";
import Image from "next/image";
import React from "react";

export default function Login() {
    return (
        <div className="flex items-center justify-center lg:grid grid-cols-2 lg:grid-cols-12 bg-primary-tint-6 p-4 w-full h-screen">
            {/* login form */}
            <LoginForm />
            {/* login page picture */}
            <div className="lg:col-span-7 xl:col-span-8 relative hidden lg:flex items-center justify-center w-full h-full">
                <Image
                    src="/images/login.png"
                    alt="login_image"
                    width={636}
                    height={392}
                    className="w-90 lg:w-120 xl:w-159 h-60 lg:h-80 xl:h-98"
                />
            </div>
        </div>
    );
}
