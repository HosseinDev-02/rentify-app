"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import PlusIcon from "../ui/icons/PlusIcon";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/utils/data";
import { ArrowLeft, LogInIcon, MoveLeft, TextAlignJustify } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed transition-all left-0 right-0 z-50 ${
                scrolled
                    ? "top-0 bg-white text-black p-4 md:p-6"
                    : "top-10 bg-transparent text-white p-0"
            }`}
        >
            {/* container */}
            <div className="container">
                {/* content wrapper */}
                <div
                    className={`flex items-center justify-between`}
                >
                    <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-4">
                        {/* mobile menu button */}
                        <span className="inline-block lg:hidden">
                            <TextAlignJustify size={32} />
                        </span>
                        {/* header logo */}
                        <div className="flex items-center gap-4">
                            <Link href={"#"}>
                                {scrolled ? (
                                    <Image
                                        alt="Rentify Logo"
                                        width={132}
                                        height={52}
                                        src={"/images/logo/dark-logo.png"}
                                    />
                                ) : (
                                    <Image
                                        alt="Rentify Logo"
                                        width={132}
                                        height={52}
                                        src={"/images/logo/light-logo.png"}
                                    />
                                )}
                            </Link>
                        </div>
                    </div>
                    {/* header menu */}
                    <ul className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 font-IranYekan-Bold xl:text-lg">
                        {menuItems.map((item) => (
                            <li key={item.id} className="">
                                <Link
                                    className="transition-colors duration-300 hover:text-primary"
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* header left side */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link
                            className="flex items-center justify-center h-13 rounded-lg lg:px-2"
                            href={"#"}
                        >
                            <span className="hidden lg:inline">
                                ورود | ثبت نام
                            </span>
                            <span className="flex items-center justify-center rounded-full h-13 w-13 bg-primary lg:hidden text-white">
                                <MoveLeft size={16} />
                            </span>
                        </Link>
                        <PrimaryButton
                            href={"#"}
                            title={"ثبت آگهی رایگان"}
                            icon={
                                <PlusIcon className={"w-3 lg:w-4 h-3 lg:h-4"} />
                            }
                            className={"text-sm"}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
