import React from "react";
import DropdownButton from "../DropdownButton";
import FilterItemWrapper from "./FilterItemWrapper";

export default function MortgageFilter({ isOpen, handler }) {
    return (
       <FilterItemWrapper title={'رهن'} isOpen={isOpen} handler={handler}>
            <div className="flex flex-col gap-3">
                
            </div>
       </FilterItemWrapper>
    );
}
