import Header from "@/components/layout/Header";
import AdvertisementBox from "@/components/ui/AdvertisementBox";
import CategoryBox from "@/components/ui/CategoryBox";
import DropdownMenu from "@/components/ui/buttons/DropdownMenu";
import DropdownButton from "@/components/ui/buttons/DropdownMenu";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import { adsItems } from "@/utils/data";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* Intro */}
            <div>
                <Header />
                <div className="relative search-box pt-40 h-170 bg-[#252525] rounded-b-3xl">
                    <div className="absolute inset-0 opacity-5 bg-[url(/images/search-box-bg.jpg)] bg-center bg-cover"></div>
                    <div className="container">
                        <div className="flex items-center flex-col w-full">
                            {/* title */}
                            <h3 className="font-IranYekan-Bold text-3xl text-white text-center mb-8">
                                در{" "}
                                <span className="text-primary">رنتی‌فای</span>{" "}
                                دنبال چه ملکی هستید؟
                            </h3>
                            {/* search filter */}
                            <div className="bg-white rounded-full w-full max-w-3xl h-26 hidden xs:block">
                                <div className="grid grid-cols-12 h-full w-full">
                                    <div className="grid grid-cols-3 gap-8 md:gap-16 col-span-10 px-5 md:px-10">
                                        {/* location */}
                                        <DropdownMenu
                                            defaultValue="انتخاب کنید"
                                            title={"مکانی"}
                                        />
                                        {/* property type */}
                                        <DropdownMenu
                                            defaultValue="انتخاب کنید"
                                            title="ملک"
                                        />
                                        {/* contract type */}
                                        <DropdownMenu
                                            defaultValue="انتخاب کنید"
                                            title="قرارداد"
                                        />
                                    </div>
                                    {/* search button */}

                                    <button className="bg-primary h-full px-10 flex items-center justify-center gap-2 text-white col-span-2 cursor-pointer rounded-l-full">
                                        <span>
                                            <SearchIcon
                                                width={16}
                                                height={16}
                                            />
                                        </span>
                                        <span className="hidden md:inline">
                                            جستجو
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full mt-10">
                                <CategoryBox
                                    className={
                                        "bg-[url(/images/categories/cat-3.png)]"
                                    }
                                    href={"#"}
                                    title={"ویلا"}
                                    count={"45"}
                                />
                                <CategoryBox
                                    className={
                                        "bg-[url(/images/categories/cat-2.png)]"
                                    }
                                    href={"#"}
                                    title={"آپارتمان"}
                                    count={"56"}
                                />
                                <CategoryBox
                                    className={
                                        "bg-[url(/images/categories/cat-1.png)]"
                                    }
                                    href={"#"}
                                    title={"خانه ویلایی"}
                                    count={"92"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* main */}
            <main className="py-36.5">
                <section className="most-viewed">
                    {/* container */}
                    <div className="container">
                        {/* wrapper */}
                        <div>
                            {/* section header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl md:text-3xl font-IranYekan-Bold">
                                    پر بازدید ترین‌ها<span className="hidden md:inline">ی هفته‌ی گذشته</span>
                                </h3>
                                <Link
                                    className="flex items-center gap-2 text-primary font-IranYekan-Medium"
                                    href={"#"}
                                >
                                    <span>مشاهده همه</span>
                                    <MoveLeft size={20} />
                                </Link>
                            </div>
                            {/* content */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                                {
                                    adsItems.map(item => (
                                        <AdvertisementBox key={item.id} {...item}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
