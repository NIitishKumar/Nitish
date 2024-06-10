"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

// Our custom button component
// import SliderButtons from "./SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
  content?: string,
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const Projects: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full h-[100%] px-[5%] pb-8 h-[100%] shadow-lg">
      <div className="">
        <ul className="">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            style={{height:"500px"}}
          >
            {data.map(({ id, image, tagline, title, buttons, content = "", link="" }:any) => (
              <SwiperSlide key={id} className="">
                <Link href={link}>
                <div
                  className="h-full w-full absolute left-0 top-0 shadow-2xl"
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`, boxShadow: "inset 0 0 5px 2px #282a2d", filter: "drop-shadow(0 0 50px #2b2a27)"
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center" style={{filter: "drop-shadow(0 0 5px )"}}>
                    {title && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white my-2">
                        {title}
                      </p>
                    )}
                    <div className=" w-[80%] mx-auto">
                      {content && <p className="text-white text-left">{content}</p>}
                    </div>
                    {/* {buttons.length > 0 ? (
                      <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null} */}
                  </div>
                </div>

                <p className=" font-bold text-white mb-8">
                      {tagline}
                    </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
