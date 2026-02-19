import { XIcon } from "lucide-react";
import React from "react";

export default function Input({
    label,
    icon,
    placeholder,
    type,
    className,
    name,
    resetIcon,
}) {
    return (
        <div className="flex items-center relative">
            {label && (
                <label
                    className="text-[#D7D8DA] text-xs absolute right-4 z-10 px-1 -top-2 bg-white"
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <div className="flex items-center gap-4 w-full">
                {/* <span className="text-[#45484B] text-sm">از</span> */}
                {/* {icon} */}
                <div className="flex h-10 rounded-[10px] border border-[#C4C4C4] p-2 w-full">
                    <span className="flex items-center text-[#C4C4C4]">
                        {icon}
                    </span>
                    <input
                        name={name}
                        className={`w-full h-full pr-1 pl-8 font-IranSansWeb-Regular focus-visible:outline-0 placeholder:text-black ${
                            resetIcon ? "pl-8" : "pl-2"
                        } ${className}`}
                        type={type}
                        placeholder={placeholder}
                    />
                    {resetIcon && (
                        <span className="flex items-center justify-center text-[#C4C4C4]">
                            <XIcon className="" size={20} />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
