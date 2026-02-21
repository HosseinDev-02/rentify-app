import Header from "@/components/layout/Header";
import AdvDetailFeatures from "@/components/ui/AdvDetailFeatures";
import AdvDetailProvider from "@/components/ui/AdvDetailProvider";
import AdvItemTitle from "@/components/ui/AdvItemTitle";
import AdvNavigation from "@/components/ui/AdvNavigation";
import AdvNavigationItem from "@/components/ui/AdvNavigationItem";
import AdvertisementBox from "@/components/ui/AdvertisementBox";
import CopyButton from "@/components/ui/CopyBtn";
import FloorPlanNavigation from "@/components/ui/FloorPlanNavigation";
import FloorPlanProgressBar from "@/components/ui/FloorPlanProgressBar";
import GallerySlider from "@/components/ui/GallerySlider";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import PaymentIcon from "@/components/ui/icons/PaymentIcon";
import TomanIcon from "@/components/ui/icons/TomanIcon";
import { adsItems } from "@/utils/data";
import { Share2 } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { WavesLadder } from "lucide-react";
import { Copy } from "lucide-react";
import { ChevronsLeft } from "lucide-react";
import { Zap } from "lucide-react";
import { Pin } from "lucide-react";
import { MoveLeft } from "lucide-react";
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
        icon: <Dumbbell className="text-[#353739]" size={24} />,
        value: "باشگاه",
    },
    {
        id: 2,
        icon: <TreeDeciduous className="text-[#353739]" size={24} />,
        value: "فضای سبز",
    },
    {
        id: 3,
        icon: <WavesLadder className="text-[#353739]" size={24} />,
        value: "استخر سربوشیده",
    },
    {
        id: 4,
        icon: <WavesLadder className="text-[#353739]" size={24} />,
        value: "سونا و جکوزی",
    },
    {
        id: 5,
        icon: <Volleyball className="text-[#353739]" size={24} />,
        value: "زمین بازی",
    },
    {
        id: 6,
        icon: <Zap className="text-[#353739]" size={24} />,
        value: "برق اضطراری",
    },
    {
        id: 7,
        icon: <Rose className="text-[#353739]" size={24} />,
        value: "روف گاردن",
    },
];
const descriptions = [
    "سند شخصی",
    "واحد شمالی",
    "هود و گاز رو میزی",
    "کابینت ممبران",
];

export default function Page() {
    return (
        <>
            <Header
                wrapperClassName={"rounded-2xl bg-white"}
                className={"text-black!"}
            />
            {/* page content */}
            <main className="min-h-screen bg-white pt-12 mt-36 md:mt-47">
                {/* slider */}
                <div className="">
                    <div className="container">
                        <GallerySlider />
                    </div>
                </div>
                {/* infos */}
                <div className="mt-10">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                            {/* details */}
                            <div className="md:col-span-7 lg:col-span-8 mb-14">
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
                                    <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-y-8">
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
                                    <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-y-8">
                                        {featureInfos.map((item) => (
                                            <AdvNavigationItem
                                                key={item.id}
                                                icon={item.icon}
                                                value={item.value}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* descriptions */}
                                <div className="mt-8 pb-8 border-b border-b-[#D7D8DA]">
                                    <AdvItemTitle title={"توضیحات"} />
                                    <div className="flex flex-col gap-4 text-xl text-[#353739] mt-12">
                                        {descriptions.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                    <button
                                        className="flex items-center gap-2 text-primary mt-5 cursor-pointer"
                                        type="button"
                                    >
                                        <span>نمایش بیشتر</span>
                                        <MoveLeft size={16} />
                                    </button>
                                </div>
                                {/* floor plan */}
                                <div className="mt-8 pb-8 border-b border-b-[#D7D8DA]">
                                    <AdvItemTitle title={"نقشه طبقات"} />
                                    <div className="mt-12">
                                        <Image
                                            src={"/images/floor-plan.png"}
                                            alt="floor_plan"
                                            width={808}
                                            height={488}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                {/* location */}
                                <div className="mt-8 pb-8 border-b border-b-[#D7D8DA]">
                                    <AdvItemTitle title={"موقعیت مکانی"} />
                                    <div className="mt-12">
                                        <AdvDetailProvider>
                                            {/* navigation */}
                                            <div className="flex justify-between items-center flex-wrap gap-8">
                                                <FloorPlanNavigation />
                                                <Link
                                                    className="flex items-center justify-center rounded-lg border border-[#C4C4C4] gap-2 px-6 h-12 text-primary"
                                                    href={"#"}
                                                >
                                                    <MapPin size={24} />
                                                    <span className="text-lg font-IranYekan-Medium">
                                                        مشاهده نقشه
                                                    </span>
                                                </Link>
                                            </div>
                                            {/* items */}
                                            <AdvDetailFeatures />
                                        </AdvDetailProvider>
                                    </div>
                                </div>
                                {/* Video */}
                                <div className="mt-8 pb-8 border-b border-b-[#D7D8DA]">
                                    <AdvItemTitle title={"تور مجازی"} />
                                    <div className="mt-12"></div>
                                </div>
                                {/* payment */}
                                <div className="mt-6">
                                    <div className="flex items-center justify-between flex-wrap gap-8">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-19 h-18.5 border border-[#989BA0] rounded-xl">
                                                <PaymentIcon />
                                            </div>
                                            <div className="flex flex-col items-start gap-1">
                                                <span className="text-xl">
                                                    پرداخت امن با تومن
                                                </span>
                                                <span className="text-xs font-IranYekan-Light text-[#7E8288]">
                                                    ضامن امنیت معامله‌ی شما
                                                </span>
                                            </div>
                                        </div>
                                        <ChevronsLeft
                                            className="text-[#989BA0]"
                                            size={24}
                                            strokeWidth={3}
                                        />
                                        <Link
                                            className="flex items-center justify-center rounded-lg border border-primary px-8 h-14 text-primary"
                                            href={"#"}
                                        >
                                            <span className="text-lg font-IranYekan-Medium">
                                                پرداخت ودیعه
                                            </span>
                                        </Link>
                                    </div>
                                    {/* text */}
                                    <p className="text-sm font-IranYekan-Light text-[#73767C] mt-2">
                                        مبلغ پرداختی نزد تومن به امانت باقی
                                        می‌ماند و پس از ارسال کالا و تایید کالا،
                                        مبلغ به حساب فروشنده واریز می‌شود.
                                    </p>
                                    {/* offer */}
                                    <div className="rounded-lg border-2 border-dashed border-primary-shade-1 min-h-20 bg-primary-tint-6 mt-8 px-4 py-2 lg:py-0 flex flex-col lg:flex-row items-center justify-between flex-wrap gap-8">
                                        <span className="text-primary-shade-1 text-xl text-center md:text-right">
                                            کد تخفیف ۲۰۰‌هزار تومانی در اولین
                                            خرید
                                        </span>
                                        <CopyButton />
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
                {/* wrapper */}
                <div className="bg-[#F6F6F6] pb-18 pt-10">
                    <div className="container">
                        {/* section header */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl md:text-2xl font-IranYekan-ExtraBold">
                            خانه هایی با ارزش مشابه
                            </h3>
                            <Link
                                className="flex items-center gap-2 text-primary font-IranYekan-Medium"
                                href={"#"}
                            >
                                <span><span className="hidden md:inline">مشاهده</span> همه</span>
                                <MoveLeft size={20} />
                            </Link>
                        </div>
                        {/* content */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                            {adsItems.slice(0, 4).map((item) => (
                                <AdvertisementBox key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
