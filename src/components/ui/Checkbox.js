"use client";
import { Check } from "lucide-react";
import React, { useId } from "react";

export default function Checkbox({ checked, onChange, label }) {
    const id = useId();

    return (
        <label
            htmlFor={id}
            className="flex items-center gap-3 cursor-pointer select-none"
        >
            <span className="relative">
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="peer sr-only"
                />

                <span
                    className="flex items-center justify-center gap-2 w-5 h-5 rounded-xs border-2 border-[#989BA0] peer-checked:border-primary peer-checked:bg-primary transition
            "
                >
                    {checked && (
                        <Check
                            className="text-white"
                            strokeWidth={3}
                            size={16}
                        />
                    )}
                </span>
            </span>

            <span className="text-sm">{label}</span>
        </label>
    );
}
