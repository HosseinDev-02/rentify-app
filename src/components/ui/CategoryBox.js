import { ChevronLeft, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CategoryBox({ title, count, href, className }) {
    return (
        <div className={`p-2 rounded-2xl w-full h-50 md:h-60 lg:h-80 xl:h-94 flex items-end bg-cover bg-center ${className}`}>
            <Link href={href} className="flex items-center justify-center md:justify-between rounded-lg px-2 md:px-4 py-2 md:py-3.5 bg-white w-full">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h5 className="text-lg font-IranYekan-Bold">{title}</h5>
                    <div className="text-[#989BA0]">
                    +
                        <span>{count}</span>
                        ملک
                    </div>
                </div>
                <span className="w-12 h-12 rounded-full bg-primary hidden md:flex items-center justify-center text-white">
                    <MoveLeft strokeWidth={3} size={12} />
                </span>
            </Link>
        </div>
    );
}
