"use client";

import { Github, Linkedin, Mail, Pencil, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-center sticky top-0 px-10 bg-zinc-900/40 backdrop-blur-lg z-10">
      <div className="w-full max-w-[700px] flex justify-between items-center py-8">
        <h1 className="font-semibold text-2xl">Yash Nirmal</h1>
        <div className="hidden sm:flex gap-3">
          <div className="relative group w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600">
            <a href="https://yashnirmal.hashnode.dev/" target="blank">
              <Pencil strokeWidth="1" size="16" />
            </a>
            <p className="hidden group-hover:inline-block px-2 py-1 absolute top-[125%] text-sm -left-[100%] translate-x-[50%] bg-gray-50 text-zinc-900 rounded-lg ">
              Blog
            </p>
          </div>
          <div className="relative group w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600">
            <a href="https://twitter.com/YashNirmalDev" target="blank">
              <Twitter strokeWidth="1" size="16" />
            </a>
            <p className="hidden group-hover:inline-block px-2 py-1 absolute text-sm top-[125%] left-[50%] -translate-x-[50%] bg-gray-50 text-zinc-900 rounded-lg ">
              Twitter
            </p>
          </div>
          <div className="relative group w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600">
            <a
              href="https://www.linkedin.com/in/yash-nirmal-062b68220/"
              target="blank"
            >
              <Linkedin strokeWidth="1" size="16" />
            </a>
            <p className="hidden group-hover:inline-block px-2 py-1 absolute text-sm top-[125%] left-[50%] -translate-x-[50%] bg-gray-50 text-zinc-900 rounded-lg ">
              LinkedIn
            </p>
          </div>
          <div className="relative group w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600">
            <a href="http://github.com/yashnirmal" target="blank">
              <Github strokeWidth="1" size="16" />
            </a>
            <p className="hidden group-hover:inline-block px-2 py-1 absolute text-sm top-[125%] left-[50%] -translate-x-[50%] bg-gray-50 text-zinc-900 rounded-lg ">
              Github
            </p>
          </div>
          <div className="relative group w-fit p-2 border-[1px] rounded-full cursor-pointer hover:bg-zinc-600">
            <a href="mailto:yash15nirmal@gmail.com" target="blank">
              <Mail strokeWidth="1" size="16" />
            </a>
            <p className="hidden group-hover:inline-block px-2 py-1 absolute text-sm top-[125%] left-[50%] -translate-x-[50%] bg-gray-50 text-zinc-900 rounded-lg ">
              Mail
            </p>
          </div>
        </div>
        <div className="flex gap-4 sm:hidden">
        <a className="underline" href="https://yashnirmal.hashnode.dev/" target="blank">Blog</a>
        <a className="inline-block sm:hidden underline" href="https://twitter.com/YashNirmalDev" target="blank">Twitter</a>
        </div>
      </div>
    </div>
  );
}
