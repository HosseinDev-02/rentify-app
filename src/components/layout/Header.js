import React from "react";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import PlusIcon from "../ui/icons/PlusIcon";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/utils/data";

export default function Header() {
    return (
        <header className="mt-10">
            {/* container */}
            <div className="container">
                {/* content wrapper */}
                <div className="flex items-center justify-between h-13">
                    {/* header logo */}
                    <Link href={"#"}>
                        <Image
                            alt="Rentify Logo"
                            width={132}
                            height={52}
                            src={"/images/logo/light-logo.png"}
                        />
                    </Link>
                    {/* header menu */}
                    <ul className="flex items-center justify-center gap-6 text-white font-IranYekan-Bold text-lg">
                        {menuItems.map((item) => (
                            <li key={item.id} className="">
                                <Link className="transition-colors duration-300 hover:text-primary" href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    {/* header left side */}
                    <div className="flex items-center gap-2">
                        <Link
                            className="flex items-center justify-center h-13 rounded-lg px-2 text-white"
                            href={"#"}
                        >
                            ورود | ثبت نام
                        </Link>
                        <PrimaryButton
                        href={'#'}
                            title={"ثبت آگهی رایگان"}
                            icon={<PlusIcon width={16} height={16} />}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
