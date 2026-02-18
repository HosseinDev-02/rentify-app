"use client";
import { Funnel } from "lucide-react";
import React, { useContext } from "react";
import { FilterContext } from "./FilterProvider";

export default function FilterToggleButton() {
    const { setOpen } = useContext(FilterContext);
    console.log("open :", open);
    return (
        <button
            onClick={() => setOpen((prevState) => !prevState)}
            className="border border-[#D7D8DA] flex items-center justify-center gap-1 rounded-full py-2 px-3 text-sm text-primary cursor-pointer"
        >
            <Funnel size={20} />
            <span>فیلترها</span>
        </button>
    );
}
