import Header from "@/components/layout/Header";
import AdvertisementBox from "@/components/ui/AdvertisementBox";
import CategoryBox from "@/components/ui/CategoryBox";
import ServiceBox from "@/components/ui/ServiceBox";
import WorkBox from "@/components/ui/WorkBox";
import DropdownMenu from "@/components/ui/buttons/DropdownMenu";
import DropdownButton from "@/components/ui/buttons/DropdownMenu";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import { adsItems, services, workItems } from "@/utils/data";
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
                            <h3 className="font-IranYekan-ExtraBold text-3xl text-white text-center mb-8">
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
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full mt-10">
                                <CategoryBox
                                    className={
                                        "bg-[url(/images/categories/cat-3.png)] col-span-2 md:col-span-1"
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
            <main className="py-20 lg:pt-36.5 pb-18">
                <section className="most-viewed">
                    {/* container */}
                    <div className="container">
                        {/* wrapper */}
                        <div>
                            {/* section header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl md:text-3xl font-IranYekan-ExtraBold">
                                    پر بازدید ترین‌ها
                                    <span className="hidden md:inline">
                                        ی هفته‌ی گذشته
                                    </span>
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
                                {adsItems.map((item) => (
                                    <AdvertisementBox key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* services */}
                <section className="services mt-16">
                    <div className="container">
                        <div>
                            <h2 className="text-center text-2xl md:text-3xl font-IranYekan-ExtraBold mb-10">
                                با خدمات{" "}
                                <span className="text-primary">رنتی‌فای</span>{" "}
                                آشنا شوید
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
                                {services.map((service, index) => (
                                    <ServiceBox
                                        index={index}
                                        key={service.id}
                                        {...service}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* how to work */}
                <section className="how-to-work mt-16">
                    <div className="container">
                        <div>
                            <h2 className="text-center text-2xl md:text-3xl font-IranYekan-ExtraBold mb-10">
                                <span className="text-primary">رنتی‌فای</span>{" "}
                                چطور کار میکند؟
                            </h2>
                            <div className="flex flex-wrap items-center justify-center lg:justify-between relative gap-10">
                                <>
                                    {workItems.map((item, index) => (
                                        <WorkBox
                                            index={index}
                                            {...item}
                                            key={item.id}
                                        />
                                    ))}
                                    <span className="hidden lg:block absolute left-0 right-0 bg-[#D7D8DA] h-1 w-full top-14 z-10"></span>
                                </>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="loan mt-16">
                    <div className="container">
                        <div className="relative bg-[#353739] rounded-2xl p-6 md:p-10 xl:p-14 overflow-hidden">
                            <div className="flex lg:inline-flex flex-col items-center text-center">
                                <h3 className="text-2xl xl:text-3xl font-IranYekan-Bold text-white">
                                برای دریافت وام رهن خانه کلیک کنید
                                </h3>
                                <p className="text-xl text-[#989BA0] mt-4 lg:mt-0">
                                دریافت وام با کم‌ترین بهره و سریع ترین زمان ممکن
                                </p>
                                <PrimaryButton className={'mt-10 lg:mt-20 px-12'} href={"#"} title={'اطلاعات بیشتر...'}/>
                            </div>
                            <div className="hidden lg:block absolute -left-20 xl:left-0 top-0 bottom-0 w-142.5 h-full">
                                <Image fill className="object-cover w-full h-full" alt="land-loan" src={"/images/loan.png"}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
