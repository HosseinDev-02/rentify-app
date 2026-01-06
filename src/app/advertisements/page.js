import Header from "@/components/layout/Header";
import AdvertisementBox from "@/components/ui/AdvertisementBox";
import { adsItems } from "@/utils/data";
import { ChevronDown, Funnel } from "lucide-react";
import React from "react";

export default function Advertisements() {
    return (
        <div className="py-40 min-h-screen">
            <Header
                wrapperClassName={"p-6 rounded-2xl bg-white"}
                className={"text-black!"}
            />
            <div className="h-18 bg-white mt-12 flex items-center">
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
            <div className="mt-10">
              <div className="container">
                <div className="mb-7">
                  <h3 className="text-2xl md:text-3xl font-IranYekan-ExtraBold mb-10">رهن و اجاره آپارتمان در تهران</h3>
                  <div>
                    <ul className="font-IranYekan-Medium text-xl flex items-center gap-6">
                      <li>بروزترین</li>
                      <li>ارزان ترین</li>
                      <li>گران ترین</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {adsItems.map((item) => (
                    <AdvertisementBox {...item} key={item.id}/>
                  ))}
                </div>
              </div>
            </div>
        </div>
    );
}
