import React from "react";
import DropdownButton from "../DropdownButton";

export default function FilterItemWrapper({
    title,
    isOpen,
    handler,
    btnClassName,
    children,
}) {
    return (
        <div className="flex flex-col px-6">
            {/* city filter button */}

            <DropdownButton
                title={title}
                handler={handler}
                isOpen={isOpen}
                className={btnClassName}
            />

            {/* city filter content */}
            <div
                className={`transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-60 overflow-auto opacity-100 pb-6"
                        : "max-h-0 overflow-hidden opacity-0 pb-0"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
