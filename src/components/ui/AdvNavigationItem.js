import React from "react";

export default function AdvNavigationItem({ value, label, icon, className }) {
    return (
        <div className="flex items-center gap-2">
            <>
                {label ? (
                    <span className="text-lg text-[#595C61]">{label}</span>
                ) : (
                    <span>{icon}</span>
                )}
            </>
            <span className="text-xl text-[#353739]">{value}</span>
        </div>
    );
}