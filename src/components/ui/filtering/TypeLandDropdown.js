"use client";
import { landTypes } from "@/utils/filters";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function TypeLandDropdown() {
    const [showContent, setShowContent] = useState(false);
    const [selectedItem, setSelectedItem] = useState("آپارتمان");
    return (
        <div className="relative">
            <button
                onClick={() => setShowContent((prevState) => !prevState)}
                className="bg-primary-tint-6 flex items-center justify-center gap-1 rounded-full py-2 px-3 text-sm text-primary cursor-pointer"
            >
                <span>{selectedItem}</span>
                <ChevronDown size={20} />
            </button>
            {showContent && (
                <div className="absolute right-0 z-10 top-full bg-white w-40 rounded-xl overflow-hidden">
                    <ul className="flex flex-col *:py-3 *:px-4 font-IranYekan-Medium text-sm *:hover:bg-neutral-400 *:transition-colors *:duration-300">
                        {landTypes.map((item) => (
                            <li
                            className={`${selectedItem === item.title ? 'text-white bg-primary pointer-events-none' : 'cursor-pointer'}`}
                                onClick={() => {
                                    setSelectedItem(item.title);
                                    setShowContent(false);
                                }}
                                key={item.id}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
