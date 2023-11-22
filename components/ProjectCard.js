"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (project?.images?.length || 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (project?.images?.length || 0) - 1,
      });
    });
  }, [swiper, project?.images?.length]);

  return (
    <div className="h-fit grid grid-cols-1 sm:grid-cols-2 gap-10 relative duration-300 -translate-y-1 hover:scale-[101%]">
      <div className="relative col-span-1">
        <div className="w-full broder-green-400 relative">
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination]}
          >
            {project?.images?.map((img, idx) => (
              <SwiperSlide key={img} className="relative">
                <Image
                  src={img}
                  alt="project"
                  className="w-full h-[150%] object-cover object-center border"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-between px-2">
            {slideConfig.isBeginning ? (
              <div></div>
            ) : (
              <button
                className="p-1 rounded-full bg-gray-800 opacity-60 hover:opacity-50 text-white"
                onClick={(e) => {
                  e.preventDefault()
                  swiper?.slideNext()}}
              >
                <ChevronLeft />
              </button>
            )}
            {slideConfig.isEnd ? (
              <div></div>
            ) : (
              <button
                className="p-1 rounded-full bg-gray-800 opacity-60 hover:opacity-50  text-white"
                onClick={(e) => {
                  e.preventDefault()
                  swiper?.slidePrev()}}
              >
                <ChevronRight />
              </button>
            )}
          </div> */}
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6 text-base">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="text-left">
          {
            <>
              {project.description.length < 150 || showMore ? (
                <span>{project.description}</span>
              ) : (
                <span>
                  {project.description.slice(0, 150)}
                  {" . . . "}
                </span>
              )}
              {project.description.length > 150 && (
                <span
                  className={`text-gray-400 cursor-pointer ${
                    showMore && project.description.length
                      ? "block mt-2"
                      : "inline"
                  }`}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore && project.description.length > 150
                    ? "show less"
                    : "show more"}
                </span>
              )}
            </>
          }
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {project.techstack.map((ts, idx) => (
            <div
              key={idx}
              className="w-fit px-2 py-1 border-[1px] border-gray-100 rounded-full"
            >
              <span>{ts}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 text-xs">
          <a
            href={project.github}
            target="blank"
            className="w-fit flex gap-1 items-center mr-6 border-b-[1px]"
          >
            Github <MoveUpRight size={10} />
          </a>
          <a
            href={project.website}
            target="blank"
            className="w-fit flex gap-1 items-center mr-6 border-b-[1px]"
          >
            Web Link <MoveUpRight size={10} />
          </a>
        </div>
      </div>
    </div>
  );
}
