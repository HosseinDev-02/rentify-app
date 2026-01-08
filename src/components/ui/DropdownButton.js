import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

export default function DropdownButton({ title, handler, className, isOpen }) {
    return (
        <button
            onClick={handler}
            className={`text-sm font-IranYekan-Medium flex items-center justify-between w-full h-14 cursor-pointer bg-white ${className}`}
        >
            <span>{title}</span>
            <span className="flex items-center justify-center w-6 h-6">
                {isOpen ? (
                    <ChevronUp size={16} strokeWidth={3} />
                ) : (
                    <ChevronDown size={16} strokeWidth={3} />
                )}
            </span>
        </button>
    );
}
