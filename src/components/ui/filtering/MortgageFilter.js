import React from "react";
import DropdownButton from "../DropdownButton";
import FilterItemWrapper from "./FilterItemWrapper";
import { XIcon } from "lucide-react";

export default function MortgageFilter({ isOpen, handler }) {
    return (
        <FilterItemWrapper title={"رهن"} isOpen={isOpen} handler={handler}>
            <div className="flex flex-col gap-3">
                <div className="flex items-center relative mt-4">
                    <label
                        className="text-[#73767C] text-xs absolute right-9 z-10 px-1 -top-2 bg-white"
                        htmlFor="min"
                    >
                        حداقل قیمت
                    </label>
                    <div className="flex items-center gap-4">
                    <span className="text-[#45484B] text-sm">از</span>
                    <div className="relative h-10 rounded-[10px] border border-[#C4C4C4] w-60">
                        <input
                            name="min"
                            className="absolute inset-0 w-full h-full pr-2 pl-8 font-IranSansWeb-Regular focus-visible:outline-0"
                            type="number"
                            placeholder="0"
                        />
                        <span className="absolute left-3 top-0 bottom-0 flex items-center justify-center text-[#C4C4C4]">
                            <XIcon className="" size={20} />
                        </span>
                    </div>
                    </div>
                </div>
                <div className="flex items-center relative mt-4">
                    <label
                        className="text-[#73767C] text-xs absolute right-9 z-10 px-1 -top-2 bg-white"
                        htmlFor="min"
                    >
                        حداکثر قیمت
                    </label>
                    <div className="flex items-center gap-4">
                    <span className="text-[#45484B] text-sm">تا</span>
                    <div className="relative h-10 rounded-[10px] border border-[#C4C4C4] w-60">
                        <input
                            name="min"
                            className="absolute inset-0 w-full h-full pr-2 pl-8 font-IranSansWeb-Regular focus-visible:outline-0"
                            type="number"
                            placeholder="40,000,000"
                        />
                        <span className="absolute left-3 top-0 bottom-0 flex items-center justify-center text-[#C4C4C4]">
                            <XIcon className="" size={20} />
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </FilterItemWrapper>
    );
}
