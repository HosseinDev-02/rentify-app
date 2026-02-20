"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { MoveRight } from "lucide-react";

const images = [
    "/images/files/picture-1.png",
    "/images/files/picture-2.png",
    "/images/files/picture-3.png",
    "/images/files/picture-2.png",
    "/images/files/picture-1.png",
];

export function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slideNext()}>
            Slide to the next slide
        </button>
    );
}

export default function GallerySlider() {
    const prevRef = useRef();
    const nextRef = useRef();
    return (
        <>
            <Swiper
                spaceBetween={8}
                freeMode={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        centeredSlides: false
                    },
                    480: {
                        slidesPerView: 2,
                        centeredSlides: false
                    },
                    768: {
                        slidesPerView: 3,
                        centeredSlides: true
                    },
                }}
                loop
                modules={[FreeMode, Navigation]}
                className="mySwiper"
                centeredSlides={true}
                onBeforeInit={(swiper) => {
                    // اتصال دکمه‌ها
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index + 1} className="">
                        <Image
                            src={image}
                            alt="image"
                            width={402}
                            height={402}
                            quality={100}
                            className="bg-cover"
                        />
                    </SwiperSlide>
                ))}
                <button
                    ref={prevRef}
                    className="absolute cursor-pointer z-10 right-4 top-0 bottom-0 my-auto w-12 h-12 rounded-full flex items-center justify-center bg-black/80 text-white"
                    type="button"
                >
                    <MoveRight strokeWidth={3} size={14} />
                </button>
                <button
                    ref={nextRef}
                    className="absolute cursor-pointer z-10 left-4 top-0 bottom-0 my-auto w-12 h-12 rounded-full flex items-center justify-center bg-black/80 text-white"
                    type="button"
                >
                    <MoveLeft strokeWidth={3} size={14} />
                </button>
            </Swiper>
        </>
    );
}
