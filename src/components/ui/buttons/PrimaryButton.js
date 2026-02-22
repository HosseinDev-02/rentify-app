import Link from "next/link";
import React from "react";

export default function PrimaryButton({ title, icon, className, href, onClick }) {
    if (href) {
        return (
            <Link
                className={`h-12 rounded-lg flex items-center justify-center bg-primary px-2 font-IranYekan-Medium text-white gap-2 cursor-pointer ${className}`}
                href={href}
            >
                {icon && <span className="flex">{icon}</span>}
                <span>{title}</span>
            </Link>
        );
    } else {
        return (
            <button onClick={onClick}
                className={`h-12 rounded-lg flex items-center justify-center bg-primary px-2 font-IranYekan-Medium text-white gap-2 cursor-pointer ${className}`}
            >
                {icon && <span className="flex">{icon}</span>}
                <span>{title}</span>
            </button>
        );
    }
}
