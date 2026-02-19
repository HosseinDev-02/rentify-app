'use client';
import React, { useState } from "react";
import LogoIcon from "../icons/LogoIcon";
import Input from "./Input";
import { UserIcon } from "lucide-react";
import { Building2 } from "lucide-react";
import { PhoneIcon } from "lucide-react";

export default function LoginForm() {
    const [role, setRole] = useState('real-estate')
    return (
        <div className="col-span-4 w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center">
            <div className="w-98 flex flex-col items-center">
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
                         <span onClick={() => setRole('owner')} className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${role === 'owner' ? 'bg-white text-black' : 'bg-[#F2F3F3] text-[#7E8288]'}`}>مالک | مستاجر</span>
                         <span onClick={() => setRole('real-estate')} className={`cursor-pointer transition-all duration-200 h-10 rounded-xl flex items-center justify-center font-IranYekan-Medium basis-1/2 ${role === 'real-estate' ? 'bg-white text-black' : 'bg-[#F2F3F3] text-[#7E8288]'}`}>املاک</span>
                    </div>
                    {/* form */}
                    <div>
                        <form action="#" className="mt-6 space-y-6">
                            <div className="flex gap-6">
                                <Input placeholder={'حسین'} label={"نام"} type={'text'} icon={<UserIcon className="shrink-0" size={16}/>}/>
                                <Input placeholder={'رستمی'} label={"نام خانوادگی"} type={'text'} icon={<UserIcon className="shrink-0" size={16}/>}/>
                            </div>
                            <Input placeholder={'نام دفتر'} type={'text'} icon={<Building2 className="shrink-0" size={16}/>}/>
                            <Input placeholder={'09930094221'} label={"تلفن همراه"} type={'text'} resetIcon icon={<PhoneIcon className="shrink-0" size={16}/>}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
