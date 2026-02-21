"use client";
import React, { useContext, useState } from "react";
import { AdvDetailContext } from "./AdvDetailProvider";

export default function FloorPlanNavigation() {
    const { featuresType, setFeaturesType } = useContext(AdvDetailContext);
    return (
        <div className="max-w-98 w-full">
            <div className="bg-[#F2F3F3] rounded-2xl h-12 flex items-center p-1">
                <span
                    onClick={() => setFeaturesType("recreational")}
                    className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${
                        featuresType === "recreational"
                            ? "bg-white text-black"
                            : "bg-[#F2F3F3] text-[#7E8288]"
                    }`}
                >
                    تفریحی
                </span>
                <span
                    onClick={() => setFeaturesType("transportation")}
                    className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${
                        featuresType === "transportation"
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
