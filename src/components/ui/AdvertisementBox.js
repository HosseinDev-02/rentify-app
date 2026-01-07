import { Heart, Map, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import TomanIcon from "./icons/TomanIcon";

const setTypeStyle = (type) => {
    if (type === "خانه ویلایی") return "bg-[#D67114]";
    if (type === "آپارتمان") return "bg-success";
    if (type === "ویلا") return "bg-primary-shade-2";
};

export default function AdvertisementBox({
    title,
    image,
    type,
    location,
    mortgage,
    rent,
}) {
    return (
        <div className="rounded-2xl overflow-hidden bg-white">
            {/* ads image */}
            <div className="relative w-full h-54">
                <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#FAFAFA] flex items-center justify-center">
                    <Heart className="fill-error text-error" size={14} />
                </span>
                <Image
                    className="w-full h-full object-cover"
                    alt={title}
                    width={288}
                    height={216}
                    src={image}
                />
            </div>
            {/* ads body */}
            <div className="flex flex-col gap-3 p-4 items-start">
                {/* location */}
                <div className="flex items-center gap-4">
                    <h6
                        className={`rounded-full px-2 py-1 text-sm font-IranYekan-Medium text-white ${setTypeStyle(
                            type
                        )}`}
                    >
                        {type}
                    </h6>
                    <div className="flex items-center gap-1 text-[#595C61]">
                        <MapPin size={14} />
                        <span className="font-IranYekan-Light text-2xs">
                            {location}
                        </span>
                    </div>
                </div>
                {/* desc */}
                <p className="text-[#353739] text-sm">{title}</p>
                {/* price */}
                <div className="rounded-lg bg-[#F2F3F3] p-1 w-full flex justify-between items-center">
                    {/* mortgage */}
                    <div className="text-[#353739] flex items-center gap-1 text-xs">
                        <span>رهن</span>
                        <div className="p-1 rounded-md flex items-center gap-1 bg-white">
                            <span className="font-IranSansWeb-Regular">
                                {mortgage.toLocaleString()}
                            </span>
                            <span>
                                <TomanIcon />
                            </span>
                        </div>
                    </div>
                    {/* rent */}
                    <div className="text-[#353739] flex items-center gap-1 text-xs">
                        <span>اجاره</span>
                        <div className="p-1 rounded-md flex items-center gap-1 bg-white">
                            <span className="font-IranSansWeb-Regular">
                                {rent.toLocaleString()}
                            </span>
                            <span>
                                <TomanIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
