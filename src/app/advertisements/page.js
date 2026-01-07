import Header from "@/components/layout/Header";
import AdvertisementBox from "@/components/ui/AdvertisementBox";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { adsItems, searchResults } from "@/utils/data";
import { ChevronDown, Funnel, Search } from "lucide-react";
import React from "react";

export default function Advertisements() {
    return (
        <div>
            <Header
                wrapperClassName={"rounded-2xl bg-white"}
                className={"text-black!"}
            />
            <main className="pt-36 md:pt-47">
                {/* filtering menu */}
                <div className="py-4 bg-white flex items-center">
                    <div className="container">
                        <div className="inline-flex items-center gap-4">
                            <button className="border border-[#D7D8DA] flex items-center justify-center gap-1 rounded-full py-2 px-3 text-sm text-primary">
                                <Funnel size={20} />
                                <span>فیلترها</span>
                            </button>
                            <span className="block w-px h-10 bg-[#D7D8DA]"></span>
                            <button className="bg-primary-tint-6 flex items-center justify-center gap-1 rounded-full py-2 px-3 text-sm text-primary">
                                <span>آپارتمان</span>
                                <ChevronDown size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* advertisements */}
                <div className="mt-10 mb-6">
                    <div className="container">
                        <div className="mb-7">
                            <h3 className="text-2xl md:text-3xl font-IranYekan-ExtraBold mb-10">
                                رهن و اجاره آپارتمان در تهران
                            </h3>
                            <div className="">
                                <ul className="font-IranYekan-Medium *:pb-2.5 text-[#73767C] text-lg inline-flex items-center gap-4 border-b border-b-[#D7D8DA]">
                                    <li className="relative text-primary before:absolute before:left-0 before:right-0 before:bottom-0 before:w-full before:h-0.75 before:rounded-t-full before:bg-primary">
                                        بروزترین
                                    </li>
                                    <li>ارزان ترین</li>
                                    <li>گران ترین</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {adsItems.map((item) => (
                                <AdvertisementBox {...item} key={item.id} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* search results items */}
                <div className="py-6 bg-white">
                    <div className="container">
                        <div className="overflow-hidden">
                            {/* search results title */}
                            <h6 className="font-IranYekan-ExtraBold text-lg mb-4">
                                جستجوهای مشابه
                            </h6>
                            {/* search results items */}
                            <ul className="search-results-content flex items-center gap-2 text-black overflow-auto w-full pb-2">
                                {searchResults.map((item) => (
                                    <li
                                        className="flex flex-nowrap items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#F2F3F3] cursor-pointer transition-colors duration-200 hover:text-primary"
                                        key={item.id}
                                    >
                                        <Search size={20} />
                                        <span className="text-nowrap">
                                            {item.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* search results content */}
                {/* advertisements */}
                <div className="mt-6 mb-12 md:mb-18">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 md:mb-13">
                            {adsItems.map((item) => (
                                <AdvertisementBox {...item} key={item.id} />
                            ))}
                        </div>
                        <PrimaryButton
                            className={"mx-auto"}
                            title={"نمایش آگهی‌های بیشتر"}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
