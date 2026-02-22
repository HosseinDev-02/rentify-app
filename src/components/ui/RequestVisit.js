"use client";
import { XIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import MyCalendar from "./auth/MyCalendar";
import { ChevronsLeft } from "lucide-react";
import PrimaryButton from "./buttons/PrimaryButton";
import { AdvDetailContext } from "./AdvDetailProvider";

const times = [
    {
        time: "11:00",
        disabled: false,
    },
    {
        time: "12:00",
        disabled: true,
    },
    {
        time: "13:00",
        disabled: true,
    },
    {
        time: "14:00",
        disabled: false,
    },
    {
        time: "15:00",
        disabled: true,
    },
    {
        time: "16:00",
        disabled: true,
    },
    {
        time: "17:00",
        disabled: false,
    },
    {
        time: "18:00",
        disabled: false,
    },
    {
        time: "19:00",
        disabled: true,
    },
    {
        time: "20:00",
        disabled: true,
    },
    {
        time: "21:00",
        disabled: true,
    },
    {
        time: "22:00",
        disabled: false,
    },
];

export default function RequestVisit() {
    const [showContent, setShowContent] = useState(false);
    const [selectedTime, setSelectedTime] = useState("20:00");
    const { showRequestVisit, setShowRequestVisit } = useContext(AdvDetailContext);
    return (
        <div className={`fixed inset-0 m-auto z-50 flex items-center justify-center bg-black/60 transition-all duration-200 ${showRequestVisit ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="w-290 pt-12 px-20 pb-26 bg-[#F6F6F6] rounded-2xl">
                {/* header */}
                <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-8 mb-10">
                    <h3 className="font-IranYekan-ExtraBold text-3xl">
                        درخواست بازدید
                    </h3>
                    <span onClick={() => setShowRequestVisit(false)} className="cursor-pointer">
                        <XIcon size={24} />
                    </span>
                </div>
                {/* content */}
                <div className="flex justify-center overflow-hidden">
                    <MyCalendar />
                    <div
                        className={`relative ${
                            showContent ? "grow" : "grow-0"
                        }`}
                    >
                        <div
                            className={`bg-[#45484B] rounded-l-2xl flex -mr-3 relative z-30 pr-12 pl-6 pb-6 pt-10 grow ${
                                showContent ? "flex" : "hidden"
                            }`}
                        >
                            {/* time wrapper */}
                            <div className="grow">
                                <span className="font-IranYekan-Medium inline-block text-white">
                                    ساعت بازدید خود را انتخاب کنید
                                </span>
                                <div className="mt-8 grid grid-cols-3 gap-6">
                                    {times.map((item) => (
                                        <span
                                            onClick={() => {
                                                if (item.disabled) {
                                                    setSelectedTime(item.time);
                                                }
                                            }}
                                            className={`py-3 flex items-center justify-center font-IranSansWeb-Regular font-medium rounded-sm ${
                                                item.disabled
                                                    ? "bg-white text-black cursor-pointer"
                                                    : "bg-[#F2F3F3] text-[#989BA0] pointer-events-none"
                                            } ${
                                                selectedTime === item.time &&
                                                "text-white! bg-primary!"
                                            }`}
                                            key={item.time}
                                        >
                                            {item.time}
                                        </span>
                                    ))}
                                </div>
                                <PrimaryButton
                                    className={"w-full mt-10"}
                                    title={"ثبت درخواست بازدید"}
                                    onClick={() => setShowRequestVisit(false)}
                                />
                            </div>
                        </div>
                        {/* show btn */}
                        <div
                            onClick={() => setShowContent(true)}
                            className={`cursor-pointer h-full w-15 flex items-center justify-end absolute -left-6 top-0 bottom-0 z-20 bg-[#45484B] rounded-l-2xl ${
                                showContent ? "" : ""
                            }`}
                        >
                            <ChevronsLeft
                                strokeWidth={3}
                                className="text-white"
                                size={24}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
