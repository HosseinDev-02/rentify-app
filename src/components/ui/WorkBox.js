import Image from "next/image";
import React from "react";

export default function WorkBox({ title, desc, image, index }) {
    return (
        <div className="flex flex-col items-center gap-4 w-46 relative z-20 bg-[#F6F6F6]">
            {/* box icon */}
            <div className="relative w-24 lg:w-28 h-24 lg:h-28 rounded-full flex items-center justify-center text-white bg-[#353739]">
                <Image className="w-10 lg:w-12.5 h-10 lg:h-12.5" alt={title} width={50} height={50} src={image}/>
                <span className="absolute -left-3.5 lg:-left-4.5 top-0 bottom-0 my-auto rounded-full flex items-center justify-center bg-primary-shade-2 w-7 lg:w-9 h-7 lg:h-9 text-sm lg:text-lg font-IranSansWeb-Regular border border-[#F6F6F6]">
                    {index + 1}
                </span>
            </div>
            {/* box content */}
            <div className="flex flex-col items-center gap-1 text-center">
                <h6 className="text-xl lg:text-2xl">
                    {title}
                </h6>
                <p className="text-sm font-IranYekan-Light text-[#7E8288]">
                    {desc}
                </p>
            </div>
        </div>
    );
}
