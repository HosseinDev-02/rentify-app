"use client";
import React, { useState } from "react";
import LogoIcon from "../icons/LogoIcon";
import Input from "./Input";
import { UserIcon } from "lucide-react";
import { Building2 } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import Checkbox from "../Checkbox";
import Link from "next/link";
import GoogleIcon from "../icons/social/GoogleIcon";
import FacebookIcon from "../icons/social/FacebookIcon";
import LinkedinIcon from "../icons/social/LinkedinIcon";

export default function LoginForm() {
    const [role, setRole] = useState("real-estate");
    const [acceptedRoles, setAcceptedRoles] = useState(false);
    return (
        <div className="lg:col-span-5 xl:col-span-4 w-full md:w-auto lg:w-full h-full bg-white rounded-2xl inline-flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-98 flex flex-col items-center">
                {/* logo */}
                <div className="">
                    <LogoIcon width={210} height={83} />
                </div>
                {/* content */}
                <div className="mt-20 w-full">
                    {/* title */}
                    <h3 className="font-IranYekan-ExtraBold text-3xl text-center">
                        ورود | ثبت نام
                    </h3>
                    {/* select role */}
                    <div className="bg-[#F2F3F3] rounded-2xl h-12 mt-12 flex items-center p-1">
                        <span
                            onClick={() => setRole("owner")}
                            className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${
                                role === "owner"
                                    ? "bg-white text-black"
                                    : "bg-[#F2F3F3] text-[#7E8288]"
                            }`}
                        >
                            مالک | مستاجر
                        </span>
                        <span
                            onClick={() => setRole("real-estate")}
                            className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${
                                role === "real-estate"
                                    ? "bg-white text-black"
                                    : "bg-[#F2F3F3] text-[#7E8288]"
                            }`}
                        >
                            املاک
                        </span>
                    </div>
                    {/* form */}
                    <div>
                        <form action="#" className="mt-6 space-y-6">
                            <div className="flex flex-col xs:flex-row gap-6">
                                <Input
                                    placeholder={"حسین"}
                                    label={"نام"}
                                    type={"text"}
                                    icon={
                                        <UserIcon
                                            className="shrink-0"
                                            size={16}
                                        />
                                    }
                                />
                                <Input
                                    placeholder={"رستمی"}
                                    label={"نام خانوادگی"}
                                    type={"text"}
                                    icon={
                                        <UserIcon
                                            className="shrink-0"
                                            size={16}
                                        />
                                    }
                                />
                            </div>
                            {role === "real-estate" && (
                                <Input
                                    placeholder={"نام دفتر"}
                                    type={"text"}
                                    icon={
                                        <Building2
                                            className="shrink-0"
                                            size={16}
                                        />
                                    }
                                />
                            )}
                            <Input
                                placeholder={"09930094221"}
                                label={"تلفن همراه"}
                                type={"text"}
                                resetIcon
                                icon={
                                    <PhoneIcon className="shrink-0" size={16} />
                                }
                            />
                            <Checkbox
                                labelElem={
                                    <div className="text-xs">
                                        با قوانین{" "}
                                        <span className="text-primary">
                                            رنتی فای
                                        </span>{" "}
                                        موافق هستم
                                    </div>
                                }
                                checked={acceptedRoles}
                                onChange={() =>
                                    setAcceptedRoles((prevRoles) => !prevRoles)
                                }
                            />
                            <button
                                type="submit"
                                disabled={acceptedRoles}
                                className={`cursor-not-allowed disabled:cursor-pointer flex items-center justify-center rounded-lg w-full h-12 font-IranYekan-Medium text-lg transition-all duration-200 ${acceptedRoles ? 'text-white bg-primary' : 'bg-[#F2F3F3] text-[#989BA0]'}`}
                            >
                                تایید و دریافت کد
                            </button>
                        </form>
                        <div className="flex flex-col gap-6 mt-6">
                            <div className="flex items-center justify-center relative after:absolute after:w-full after:inset-0 after:h-px after:bg-[#D7D8DA] after:my-auto">
                                <span className="text-xs text-[#73767C] inline-block py-1 px-2 bg-white z-10">
                                    یا ورود از طریق
                                </span>
                            </div>
                            <div className="flex items-center gap-6 justify-center">
                                <Link href={"#"}>
                                    <GoogleIcon />
                                </Link>
                                <Link href={"#"}>
                                    <FacebookIcon />
                                </Link>
                                <Link href={"#"}>
                                    <LinkedinIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
