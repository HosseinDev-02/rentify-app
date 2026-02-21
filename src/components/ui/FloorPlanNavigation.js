"use client";
import React, { useState } from "react";

export default function FloorPlanNavigation() {
    const [type, setType] = useState('recreational');
    return (
        <div className="max-w-98 w-full">
            <div className="bg-[#F2F3F3] rounded-2xl h-12 flex items-center p-1">
                <span
                    onClick={() => setType("recreational")}
                    className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${
                        type === "recreational"
                            ? "bg-white text-black"
                            : "bg-[#F2F3F3] text-[#7E8288]"
                    }`}
                >
                    تفریحی
                </span>
                <span
                    onClick={() => setType("transportation")}
                    className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${
                        type === "transportation"
                            ? "bg-white text-black"
                            : "bg-[#F2F3F3] text-[#7E8288]"
                    }`}
                >
                    حمل و نقل
                </span>
            </div>
        </div>
    );
}
