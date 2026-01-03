import Link from "next/link";
import React from "react";

export default function PrimaryButton({ title, icon, className, href }) {
    if (href) {
        return (
            <Link
                className={`h-12 rounded-lg flex items-center justify-center bg-primary px-2 font-IranYekan-Medium text-white gap-2 ${className}`}
                href={href}
            >
                {icon && <span className="flex">{icon}</span>}
                <span>{title}</span>
            </Link>
        );
    } else {
        return (
            <button
                className={`h-12 rounded-lg flex items-center justify-center bg-primary px-2 font-IranYekan-Medium text-white gap-2 ${className}`}
            >
                {icon && <span className="flex">{icon}</span>}
                <span>{title}</span>
            </button>
        );
    }
}
