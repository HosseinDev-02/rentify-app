"use client";
import React, { useState } from "react";
import DropdownButton from "../DropdownButton";
import Checkbox from "../Checkbox";
import { cities, landTypes } from "@/utils/filters";
import FilterItemWrapper from "./FilterItemWrapper";

export default function CityFilter({ isOpen, handler }) {
    const [selectedCity, setSelectedCity] = useState([]);

    const cityToggle = (id, checked) => {
        setSelectedCity((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    return (
        <FilterItemWrapper title={"شهر"} isOpen={isOpen} handler={handler}>
            <div className="flex flex-col gap-3">
                {cities.map((item) => (
                    <Checkbox
                        onChange={(c) => cityToggle(item.id, c)}
                        key={item.id}
                        label={item.title}
                        checked={selectedCity.includes(item.id)}
                    />
                ))}
            </div>
        </FilterItemWrapper>
    );
}
