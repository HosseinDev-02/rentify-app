"use client";
import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import Checkbox from "../Checkbox";
import { cities, landTypes } from "@/utils/filters";

export default function CityFilter({isOpen, handler}) {
    const [selectedCity, setSelectedCity] = useState([]);

    const cityToggle = (id, checked) => {
        setSelectedCity((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };
    return (
        <div className="flex flex-col">
            {/* land type filter button */}

            <DropdownButton
                title="نوع ملک"
                handler={handler}
                isOpen={isOpen}
                className=""
            />

            {/* land type filter content */}
            <div
                className={`flex flex-col gap-3 transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-60 overflow-auto opacity-100 pb-6"
                        : "max-h-0 overflow-hidden opacity-0 pb-0"
                }`}
            >
                {cities.map((item) => (
                    <Checkbox
                        onChange={(c) => cityToggle(item.id, c)}
                        key={item.id}
                        label={item.title}
                        checked={selectedCity.includes(item.id)}
                    />
                ))}
            </div>
        </div>
    );
}
