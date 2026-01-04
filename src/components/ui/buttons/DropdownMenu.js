"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const items = [
    {
        id: 1,
        title: "تهران-نیاوران",
    },
    {
        id: 2,
        title: "تهران-سعادت آباد",
    },
    {
        id: 3,
        title: "تهران-قیطریه",
    },
    {
        id: 4,
        title: "تهران-صادقیه",
    },
];

export default function DropdownMenu(props) {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    return (
        <div className="relative w-full">
            <div>
                <button
                    onClick={() => setShow((prevState) => !prevState)}
                    className={`flex items-center cursor-pointer gap-3 text-[#73767C] ${props.className}`}
                    type="button"
                    {...props}
                >
                    <span>{props.title}</span>
                    <span>
                        <ChevronDown strokeWidth={3} size={12} />
                    </span>
                </button>
                <span className="font-IranYekan-Medium text-lg text-primary-shade-4">
                    {selectedItem || props.defaultValue}
                </span>
            </div>
            {/* menu */}
            {show && (
                <div className="absolute left-0 right-0 top-6 bg-white w-full rounded-xl overflow-hidden">
                    <ul className="flex flex-col *:py-3 *:px-4 font-IranYekan-Medium text-sm *:hover:bg-neutral-400 *:transition-colors *:duration-300 *:cursor-pointer">
                        {items.map((item) => (
                            <li
                                onClick={() => {
                                    setShow(false);
                                    setSelectedItem(item.title);
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
