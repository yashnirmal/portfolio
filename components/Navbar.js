"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-center sticky top-0 px-4 sm:px-10 bg-zinc-900/40 backdrop-blur-lg z-10">
      <div className="w-full max-w-[700px] flex justify-between items-center py-8">
        <h1 className="font-semibold text-2xl">Yash Nirmal</h1>
        <div className="flex gap-3 sm:gap-4">
          <div className="w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600 transition-all duration-300 ease-in-out">
            <a href="https://twitter.com/YashNirmalDev" target="blank">
              <Twitter strokeWidth="1" size="16" />
            </a>
          </div>
          <div className="w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600 transition-all duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/in/yash-nirmal-062b68220/"
              target="blank"
            >
              <Linkedin strokeWidth="1" size="16" />
            </a>
          </div>
          <div className="w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600 transition-all duration-300 ease-in-out">
            <a href="http://github.com/yashnirmal" target="blank">
              <Github strokeWidth="1" size="16" />
            </a>
          </div>
          <div className="w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600 transition-all duration-300 ease-in-out">
            <a href="mailto:yash15nirmal@gmail.com" target="blank">
              <Mail strokeWidth="1" size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
