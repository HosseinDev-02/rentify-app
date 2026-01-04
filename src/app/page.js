import Header from "@/components/layout/Header";
import DropdownMenu from "@/components/ui/buttons/DropdownMenu";
import DropdownButton from "@/components/ui/buttons/DropdownMenu";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Header />
            {/* Categories */}
            <section className="categories mt-17">
                <div className="container">
                    <div className="flex items-center flex-col">
                        {/* title */}
                        <h3 className="font-IranYekan-Bold text-3xl text-white mb-8">
                            در <span className="text-primary">رنتی‌فای</span>{" "}
                            دنبال چه ملکی هستید؟
                        </h3>
                        {/* search filter */}
                        <div className="bg-white rounded-full w-3xl h-26">
                            <div className="grid grid-cols-12 h-full w-full">
                                <div className="grid grid-cols-3 gap-16 py-5 col-span-10 px-10">
                                    {/* location */}
                                    <DropdownMenu defaultValue='انتخاب کنید' title={"موقعیت مکانی"} />
                                    {/* property type */}
                                    <DropdownMenu defaultValue='انتخاب کنید' title="نوع ملک" />
                                    {/* contract type */}
                                    <DropdownMenu defaultValue='انتخاب کنید' title="نوع قرارداد" />
                                </div>
                                {/* search button */}

                                <button className="bg-primary h-full px-10 flex items-center justify-center gap-2 text-white col-span-2 cursor-pointer rounded-l-full">
                                    <span>
                                        <SearchIcon width={16} height={16} />
                                    </span>
                                    <span>جستجو</span>
                                </button>
                            </div>
                        </div>
                        {/* boxes */}
                    </div>
                </div>
            </section>
        </>
    );
}
