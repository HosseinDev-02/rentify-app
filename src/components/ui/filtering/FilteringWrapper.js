"use client";
import { XIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import TypeLandFIlter from "./TypeLandFIlter";
import CityFilter from "./CityFilter";
import MortgageFilter from "./MortgageFilter";
import RentFilter from "./RentFilter";
import BedroomCountFIlter from "./BedroomCountFIlter";
import { FilterContext } from "./FilterProvider";

export default function FilteringWrapper() {
    const { open, setOpen } = useContext(FilterContext);
    const [showFilters, setShowFilters] = useState([]);

    const toggleShowFilters = (type) => {
        setShowFilters((prev) =>
            prev.includes(type)
                ? prev.filter((item) => item !== type)
                : [...prev, type]
        );
    };
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black/60 z-100 transition-all duration-200 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            {/* filtering wrapper */}
            <div className="rounded-xl bg-white w-150 min-h-160">
                {/* filtering header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-b-[#D7D8DA]">
                    <h6 className="text-lg font-IranYekan-ExtraBold">
                        فیلترها
                    </h6>
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>
                        <XIcon size={24} />
                    </span>
                </div>
                {/* filtering items wrapper */}
                <div className="divide-y divide-[#D7D8DA]">
                    {/* land type */}
                    <TypeLandFIlter
                        isOpen={showFilters.includes("landType")}
                        handler={() => toggleShowFilters("landType")}
                    />
                    {/* city */}
                    <CityFilter
                        isOpen={showFilters.includes("city")}
                        handler={() => toggleShowFilters("city")}
                    />
                    {/* mortgage */}
                    <MortgageFilter
                        isOpen={showFilters.includes("mortgage")}
                        handler={() => toggleShowFilters("mortgage")}
                    />
                    {/* rent */}
                    <RentFilter
                        isOpen={showFilters.includes("rent")}
                        handler={() => toggleShowFilters("rent")}
                    />
                    {/* bedroom count */}
                    <BedroomCountFIlter
                        isOpen={showFilters.includes("bedroom-count")}
                        handler={() => toggleShowFilters("bedroom-count")}
                    />
                </div>
            </div>
        </div>
    );
}
