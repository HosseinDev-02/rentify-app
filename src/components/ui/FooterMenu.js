import { Mail, MapPinHouse, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const setIcon = (icon) => {
    switch (icon) {
        case "gmail":
            return <Mail size={20} />;
        case "phone":
            return <Phone size={20} />;
        case "location":
            return <MapPinHouse size={20} />;
        default:
            return <Mail size={20} />;
    }
};

export default function FooterMenu({ items, title, children, className }) {
    return (
        <div className={`text-lg ${className}`}>
            <h6 className="font-IranYekan-ExtraBold text-primary-shade-1 mb-6">
                {title}
            </h6>
            <ul className="flex flex-col gap-3 text-[#73767C]">
                {children || (
                    <>
                        {items.map((item) => {
                            if (item.icon) {
                                return (
                                    <li
                                        className="flex items-center gap-1"
                                        key={item.id}
                                    >
                                        <span className="flex">
                                            {setIcon(item.icon)}
                                        </span>
                                        <span>{item.title}</span>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            className={`flex items-center gap-1 transition-colors duration-300 hover:text-primary`}
                                            href={item.href}
                                        >
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            }
                        })}
                    </>
                )}
            </ul>
        </div>
    );
}
