"use client";
import React, { useState } from "react";

const infosMenuItems = [
    'اطلاعات اصلی',
    'تجهیزات و امکانات',
    'توضیحات',
    'نقشه طبقه',
    'موقعیت مکانی',
    'تور مجازی'
]

export default function AdvNavigation() {
    const [selectedItem, setSelectedItem] = useState('اطلاعات اصلی')
    return (
        <div className="border-b border-b-[#D7D8DA] mt-15">
            <ul className="flex flex-wrap gap-8 font-IranYekan-Medium text-[#73767C]">
                {infosMenuItems.map((item) => (
                    <li onClick={() => setSelectedItem(item)} className={`relative transition-all duration-200 cursor-pointer pb-3 h-full ${selectedItem === item ? 'text-primary after:absolute after:bg-primary after:right-0 after:left-0 after:bottom-0 after:h-0.75 after:rounded-tr-xl after:rounded-tl-xl' : ''}`} key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
