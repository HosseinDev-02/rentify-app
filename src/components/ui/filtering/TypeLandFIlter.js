"use client";
import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import Checkbox from "../Checkbox";
import { landTypes } from "@/utils/filters";
import FilterItemWrapper from "./FilterItemWrapper";

export default function TypeLandFIlter({ isOpen, handler }) {
    const [selectedLandType, setSelectedLandType] = useState([]);

    const landTypeToggle = (id, checked) => {
        console.log("checked", checked);
        console.log("id", id);
        setSelectedLandType((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };
    return (
        <FilterItemWrapper title={"نوع ملک"} isOpen={isOpen} handler={handler}>
            <div className="flex flex-col gap-3 justify-end">
                {landTypes.map((item) => (
                    <Checkbox
                        onChange={(c) => landTypeToggle(item.id, c)}
                        key={item.id}
                        label={item.title}
                        checked={selectedLandType.includes(item.id)}
                    />
                ))}
            </div>
        </FilterItemWrapper>
    );
}
