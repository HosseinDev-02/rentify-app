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

const setTitleDesc = (title) => {
    switch (title) {
        case "مکانی":
            return "موقعیت";
        case "قرارداد":
            return "نوع";
        case "ملک":
            return "نوع";
        default:
            return "";
    }
};

export default function DropdownMenu(props) {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    return (
        <div className="relative w-full flex justify-center">
            <button
                onClick={() => setShow((prevState) => !prevState)}
                className={`text-[#73767C] cursor-pointer ${props.className}`}
                type="button"
                {...props}
            >
                <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1">
                        <span className="hidden md:inline">
                            {setTitleDesc(props.title)}
                        </span>
                        <span className="text-nowrap text-ellipsis">
                            {props.title}
                        </span>
                    </div>
                    <span>
                        <ChevronDown strokeWidth={3} size={12} />
                    </span>
                </div>
                <span className="font-IranYekan-Medium md:text-lg text-primary-shade-4">
                    {selectedItem || props.defaultValue}
                </span>
            </button>
            {/* menu */}
            {show && (
                <div className="absolute right-0 z-10 top-full bg-white w-40 rounded-xl overflow-hidden">
                    <ul className="flex flex-col *:py-3 *:px-4 font-IranYekan-Medium text-sm *:hover:bg-neutral-400 *:transition-colors *:duration-300 *:cursor-pointer">
                        <li
                            onClick={() => {
                                setShow(false);
                                setSelectedItem("انتخاب کنید");
                            }}
                        >
                            انتخاب کنید
                        </li>
                        {props.items
                            ? props.items.map((item) => (
                                  <li
                                      onClick={() => {
                                          setShow(false);
                                          setSelectedItem(item.title);
                                      }}
                                      key={item.id}
                                  >
                                      {item.title}
                                  </li>
                              ))
                            : items.map((item) => (
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
