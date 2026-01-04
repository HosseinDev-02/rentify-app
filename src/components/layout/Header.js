import React from "react";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import PlusIcon from "../ui/icons/PlusIcon";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/utils/data";
import { ArrowLeft, LogInIcon, MoveLeft, TextAlignJustify } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 top-10 z-50">
            {/* container */}
            <div className="container">
                {/* content wrapper */}
                <div className="flex items-center justify-between h-13">
                    {/* mobile menu button */}
                    <span className="inline-block lg:hidden text-white">
                        <TextAlignJustify size={32} />
                    </span>
                    {/* header logo */}
                    <div className="flex items-center gap-4">
                        <Link href={"#"}>
                            <Image
                                alt="Rentify Logo"
                                width={132}
                                height={52}
                                src={"/images/logo/light-logo.png"}
                            />
                        </Link>
                    </div>
                    {/* header menu */}
                    <ul className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 text-white font-IranYekan-Bold xl:text-lg">
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
                            className="flex items-center justify-center h-13 rounded-lg lg:px-2 text-white"
                            href={"#"}
                        >
                            <span className="hidden lg:inline">
                                ورود | ثبت نام
                            </span>
                            <span className="flex items-center justify-center rounded-full h-13 w-13 bg-primary text-white lg:hidden">
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
