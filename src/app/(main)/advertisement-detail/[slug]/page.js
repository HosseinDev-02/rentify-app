import Header from "@/components/layout/Header";
import GallerySlider from "@/components/ui/GallerySlider";
import React from "react";

export default function Page() {
    return (
        <>
            <Header
                wrapperClassName={"rounded-2xl bg-white"}
                className={"text-black!"}
            />
            {/* page content */}
            <main className="pt-36 md:pt-47 min-h-screen">
                {/* slider */}
                <div className="mt-12">
                    <div className="container">
                        <GallerySlider />
                    </div>
                </div>
            </main>
        </>
    );
}
