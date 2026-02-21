import {
    footerCompanyLinks,
    footerContacts,
    footerLicenses,
    footerProductLinks,
    footerSocials,
    footerSupportLinks,
} from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterMenu from "../ui/FooterMenu";

export default function Footer() {
    return (
        <footer className="py-14 bg-white">
            {/* footer container */}
            <div className="container">
                {/* footer content */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-12 gap-6">
                    {/* footer socials */}
                    <div className="col-span-1 xs:col-span-2 md:col-span-1 xl:col-span-3">
                        {/* footer logo site */}
                        <Link className="flex w-30 h-12 mb-6" href={"/"}>
                            <Image
                                className="w-full h-full"
                                src={"/images/logo/dark-logo.png"}
                                width={120}
                                height={48}
                                alt={"logo"}
                            />
                        </Link>
                        {/* footer description */}
                        <div className="flex flex-col items-start text-sm font-IranYekan-Light text-[#45484B]">
                            <p>در بین بیش از ۵۰۰۰ آگهی ملکی ثبت شده</p>
                            <p>
                                روزانه جستجو کنید و ملک مورد نظرتان را پیدا
                                کنید.
                            </p>
                        </div>
                        {/* footer socials */}
                        <div className="flex items-center gap-5.5 mt-5">
                            {footerSocials.map((item) => (
                                <Link
                                    key={item.id}
                                    className="flex w-5 h-5"
                                    href={item.href}
                                >
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={item.image}
                                        width={20}
                                        height={20}
                                        alt={item.title}
                                    />
                                </Link>
                            ))}
                        </div>
                        {/* footer license */}
                        <div className="flex items-center justify-between w-full mt-4.5 pt-3.5 border-t border-t-[#D7D8DA]">
                            {footerLicenses.map((item) => (
                                <div className="h-12 w-20" key={item.id}>
                                    <Image
                                        className="w-full h-full object-cover"
                                        width={80}
                                        height={48}
                                        alt={item.title}
                                        src={item.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* footer links */}
                    {/* footer product links */}
                    <FooterMenu className={'col-span-1 xl:col-span-2 sm:justify-self-end'} title={"محصول"} items={footerProductLinks} />
                    {/* footer company links */}
                    <FooterMenu className={'col-span-1 xl:col-span-2 md:justify-self-end'} title={"شرکت"} items={footerCompanyLinks} />
                    {/* footer support links */}
                    <FooterMenu className={'col-span-1 xl:col-span-2 md:justify-self-end'} title={"پشتیبانی"} items={footerSupportLinks} />
                    {/* footer contact-us info */}
                    <FooterMenu className={'col-span-1 xl:col-span-3 md:justify-self-end'} title={"تماس با ما"} items={footerContacts} />
                </div>
            </div>
        </footer>
    );
}
