import Header from "@/components/layout/Header";
import AdvItemTitle from "@/components/ui/AdvItemTitle";
import AdvNavigation from "@/components/ui/AdvNavigation";
import AdvNavigationItem from "@/components/ui/AdvNavigationItem";
import GallerySlider from "@/components/ui/GallerySlider";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import TomanIcon from "@/components/ui/icons/TomanIcon";
import { Share2 } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { WavesLadder } from "lucide-react";
import { Zap } from "lucide-react";
import { Rose } from "lucide-react";
import { Volleyball } from "lucide-react";
import { TreeDeciduous } from "lucide-react";
import { DumbbellIcon } from "lucide-react";
import { MapPin } from "lucide-react";
import { Flag } from "lucide-react";
import { Clock } from "lucide-react";
import { Heart } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const mainInfos = [
    {
        id: 1,
        title: "مساحت زیر بنا:",
        value: "۱۳۰ متر",
    },
    {
        id: 2,
        title: "مساحت زمین:",
        value: "۴۰۰ متر",
    },
    {
        id: 3,
        title: "طبقات:",
        value: "۱۴",
    },
    {
        id: 4,
        title: "طبقه:",
        value: "۱۴",
    },
    {
        id: 5,
        title: "خواب:",
        value: "۲ خوابه",
    },
    {
        id: 6,
        title: "سرویس بهداشتی:",
        value: "۳ عدد",
    },
    {
        id: 7,
        title: "هر طبقه:",
        value: "1",
    },
];
const featureInfos = [
    {
        id: 1,
        icon: <Dumbbell className="text-[#353739]" size={24}/>,
        value: 'باشگاه'
    },
    {
        id: 2,
        icon: <TreeDeciduous className="text-[#353739]" size={24}/>,
        value: 'فضای سبز'
    },
    {
        id: 3,
        icon: <WavesLadder className="text-[#353739]" size={24}/>,
        value: 'استخر سربوشیده'
    },
    {
        id: 4,
        icon: <WavesLadder className="text-[#353739]" size={24}/>,
        value: 'سونا و جکوزی'
    },
    {
        id: 5,
        icon: <Volleyball className="text-[#353739]" size={24}/>,
        value: 'زمین بازی'
    },
    {
        id: 6,
        icon: <Zap className="text-[#353739]" size={24}/>,
        value: 'برق اضطراری'
    },
    {
        id: 7,
        icon: <Rose className="text-[#353739]" size={24}/>,
        value: 'روف گاردن'
    },
];

export default function Page() {
    return (
        <>
            <Header
                wrapperClassName={"rounded-2xl bg-white"}
                className={"text-black!"}
            />
            {/* page content */}
            <main className="min-h-screen bg-white pt-12">
                {/* slider */}
                <div className="">
                    <div className="container">
                        <GallerySlider />
                    </div>
                </div>
                {/* infos */}
                <div className="mt-10">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* details */}
                            <div className="md:col-span-7 lg:col-span-8">
                                {/* title & location & price & UUid */}
                                <div>
                                    {/* title & info */}
                                    <div className="flex flex-wrap gap-4 items-start justify-between">
                                        <div>
                                            <h5 className="text-xl md:text-2xl">
                                                آپارتمان ۷۰ متری ۲ خوابه _ تهران
                                                محمدیه
                                            </h5>
                                            <div className="text-[#989BA0] flex items-center gap-5 mt-1.5">
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={24} />
                                                    <span>تهران-الهیه </span>
                                                </div>
                                                <span className="bg-[#D7D8DA] h-9.5 w-px block"></span>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={24} />
                                                    <span>۱۱ روز بیش</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button type="button" className="">
                                                <Share2 size={24} />
                                            </button>
                                            <button type="button" className="">
                                                <Heart
                                                    className="fill-red-500 text-red-500"
                                                    size={24}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {/* price */}
                                    <div className="mt-5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-IranYekan-Bold text-[#353739]">
                                                رهن
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-2xl font-IranSansWeb-Regular font-bold text-[#353739]">
                                                    4,000,000,000
                                                </span>
                                                <TomanIcon
                                                    width={24}
                                                    height={12}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-4">
                                            <span className="text-2xl font-IranYekan-Bold text-[#353739]">
                                                اجاره
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-2xl font-IranSansWeb-Regular font-bold text-[#353739]">
                                                    50,000,000
                                                </span>
                                                <TomanIcon
                                                    width={24}
                                                    height={12}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* UID */}
                                    <div className="flex items-center justify-between text-[#45484B] text-lg py-3 border-t border-t-[#D7D8DA] mt-6">
                                        <div className="flex items-center gap-1">
                                            <span>شناسه آگهی:</span>
                                            <span>5436</span>
                                        </div>
                                        <Link
                                            className="flex items-center gap-1"
                                            href={"#"}
                                        >
                                            <Flag size={16} />
                                            <span>گزارش</span>
                                        </Link>
                                    </div>
                                </div>
                                {/* infos navigation */}
                                <AdvNavigation />
                                {/* main infos */}
                                <div className="mt-8 pb-8 border-b border-b-[#D7D8DA]">
                                    <AdvItemTitle title={"اطلاعات اصلی"} />
                                    <div className="mt-10 grid grid-cols-3 gap-y-8">
                                        {mainInfos.map((item) => (
                                            <AdvNavigationItem
                                                key={item.id}
                                                label={item.title}
                                                value={item.value}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* features */}
                                <div className="mt-8 pb-8 border-b border-b-[#D7D8DA]">
                                    <AdvItemTitle title={"تجهیزات و امکانات"} />
                                    <div className="mt-10 grid grid-cols-3 gap-y-8">
                                        {featureInfos.map((item) => (
                                            <AdvNavigationItem
                                                key={item.id}
                                                icon={item.icon}
                                                value={item.value}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* real-estate infos */}
                            <div className="md:col-span-5 lg:col-span-4 p-6 border border-[#D7D8DA] rounded-[10px] flex flex-col items-center">
                                <div className="flex items-center gap-3">
                                    <Image
                                        alt="profile_image"
                                        width={88}
                                        height={88}
                                        className="object-cover rounded-full"
                                        src={"/images/profile.jpg"}
                                    />
                                    <div>
                                        <h6 className="font-IranYekan-Bold text-lg text-[#353739]">
                                            علی میرحسینی
                                        </h6>
                                        <span className="text-[#7E8288]">
                                            املاک مبین
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-10 flex w-full gap-2">
                                    <Link
                                        className="flex items-center justify-center gap-2 border border-[#D7D8DA] h-10 rounded-lg text-primary grow"
                                        href={"#"}
                                    >
                                        <PhoneIcon size={16} />
                                        <span className="font-IranYekan-Medium">
                                            تماس
                                        </span>
                                    </Link>
                                    <Link
                                        className="flex items-center justify-center gap-2 border border-[#D7D8DA] h-10 rounded-lg text-primary grow"
                                        href={"#"}
                                    >
                                        <MessagesSquare size={16} />
                                        <span className="font-IranYekan-Medium">
                                            پیام
                                        </span>
                                    </Link>
                                </div>
                                <PrimaryButton
                                    className={"w-full mt-2"}
                                    title={"درخواست بازدید"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
