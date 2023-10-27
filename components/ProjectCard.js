"use client";

import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-fit grid grid-cols-1 sm:grid-cols-2 gap-10 relative duration-300 -translate-y-1 hover:scale-[101%]">
      <div className="relative col-span-1 border-1 w-full min-w-[250px] aspect-video">
        <Image
          src={project.image}
          alt="project"
          className="w-full aspect-square"
          fill
        />
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
              {
                (project.description.length>150) && <span
                  className={`text-gray-400 cursor-pointer ${showMore && project.description.length?'block mt-2':'inline'}`}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore && project.description.length > 150
                    ? "show less"
                    : "show more"}
                </span>
              }
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
