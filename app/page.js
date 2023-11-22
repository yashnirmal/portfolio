"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ExprienceCard from "@/components/ExprienceCard";
import { CheckCircle, XCircle } from "lucide-react";
import Socials from "@/components/SocialCard";
import { techstack, experience, projects } from "@/data/data";
import emailjs from "@emailjs/browser";

var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export default function Home() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function handleSendButton(e) {
    e.preventDefault();
    if (
      form.current.from_name.value == "" ||
      form.current.from_email.value == "" ||
      form.current.message.value.message == ""
    ) {
      setErrorMsg("You have to fill all the details");
      setIsSent(false);
      return;
    }

    if (!emailRegex.test(form.current.from_email.value)) {
      setErrorMsg("Seems like you have entered invalid email");
      setIsSent(false);
      return;
    }

    setIsSending(true);
    setIsSending(true);
    emailjs
      .sendForm(
        "service_s1cmwbq",
        "template_jhqu8sm",
        form.current,
        "WS1jM-fGVkCOgILjX"
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSent(true);
          setErrorMsg("Your message has been sent");
        },
        (error) => {
          setIsSending(false);
          setIsSent(false);
          setErrorMsg("Couldn't send your message. Please try again later");
        }
      );
  }

  return (
    <main className="relative z-10">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[700px] mx-10">
          {/* Intro */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-10">
            <div className="w-fit h-fit aspect-square min-w-[200px] rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="avatar" width={200} height={200} />
            </div>

            <div>
              <p className="text-xl mb-2">
                Hello, I&apos;m <span className="highlight">Yash Nirmal</span>
              </p>
              <p className="text-xl">
                I am a{" "}
                <span className="highlight">Full-stack Web Developer </span>{" "}
                with experience in
                <span className="highlight">
                  React, NextJs, NodeJs, Express, MongoDB etc.
                </span>{" "}
                I love building challenging projects and learning new
                technologies and skills.
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="w-full mt-32">
            <div className="w-full h-[1px] bg-zinc-800 rounded-full mb-10" />
            <h2 className="font-semibold text-2xl mb-8 text-center">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techstack.map((ts, idx) => (
                <div
                  key={idx}
                  className="w-fit h-fit px-2 py-1 border-[1px] border-gray-100 rounded-full"
                >
                  <span>{ts}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experinces */}
          <div className="w-full mt-32">
            <div className="w-full h-[1px] bg-zinc-800 rounded-full mb-10" />
            <h2 className="font-semibold text-2xl mb-10 text-center">
              Experiences
            </h2>
            <div className="flex flex-col items-center gap-16">
              {experience.map((exp, idx) => (
                <ExprienceCard key={idx} exp={exp} />
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="w-full mt-32">
            <div className="w-full h-[1px] bg-zinc-800 rounded-full mb-10" />
            <h2 className="font-semibold text-2xl mb-10 text-center">
              Projects
            </h2>
            <div className="flex flex-col gap-16">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="w-full mt-32">
            <div className="w-full h-[1px] bg-zinc-800 rounded-full mb-10" />
            <h2 className="font-semibold text-2xl mb-10 text-center">
              My Socials
            </h2>
            <Socials />
          </div>

          {/* Contact Me form */}
          <form className="w-full my-32" ref={form} onSubmit={handleSendButton}>
            <div className="w-full h-[1px] bg-zinc-800 rounded-full mb-10" />
            <h2 className="font-semibold text-2xl mb-10 text-center">
              Contact Me
            </h2>
            <div className="w-full flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <input
                  placeholder="Your Name"
                  className="w-full"
                  name="from_name"
                />
                <input
                  placeholder="Your Email"
                  className="w-full"
                  name="from_email"
                />
              </div>
              <textarea placeholder="Your message" name="message" className="h-[150px]" />
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <button type="submit" className="w-fit bg-zinc-700 mb-6 sm:m-0">
                  {isSending ? "SENDING..." : "SEND"}
                </button>
                <div className="flex items-center gap-2">
                  {
                    <>
                      {isSent && <CheckCircle size={20} color="#22C55E" />}
                      {!isSent && errorMsg && (
                        <XCircle size={20} color="#EF4544" />
                      )}
                      <p className={isSent ? "text-green-500" : "text-red-500"}>
                        {errorMsg}
                      </p>
                    </>
                  }
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
