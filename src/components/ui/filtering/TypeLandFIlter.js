"use client";
import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import Checkbox from "../Checkbox";
import { landTypes } from "@/utils/filters";

export default function TypeLandFIlter({isOpen, handler}) {
    const [selectedLandType, setSelectedLandType] = useState([]);

    const landTypeToggle = (id, checked) => {
        console.log("checked", checked);
        console.log("id", id);
        setSelectedLandType((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };
    return (
        <div>
            {/* land type filter button */}

            <DropdownButton
                title="نوع ملک"
                handler={handler}
                isOpen={isOpen}
                className=""
            />

            {/* land type filter content */}
            <div
                className={`flex flex-col justify-end gap-3 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-60 opacity-100 py-6"
                        : "max-h-0 opacity-0 py-0"
                }`}
            >
                {landTypes.map((item) => (
                    <Checkbox
                        onChange={(c) => landTypeToggle(item.id, c)}
                        key={item.id}
                        label={item.title}
                        checked={selectedLandType.includes(item.id)}
                    />
                ))}
            </div>
        </div>
    );
}
