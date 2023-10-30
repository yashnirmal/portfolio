import { Twitter, Linkedin, Github, File, Mail, Pencil } from "lucide-react";

export default function Socials({ social }) {
  
    // const socials = [
  //   {
  //     link: "https://twitter.com/YashNirmalDev",
  //     icon: Twitter,
  //     text: "Twitter",
  //   },
  //   {
  //     link: "https://www.linkedin.com/in/yash-nirmal-062b68220/",
  //     icon: Linkedin,
  //     text: "LinkedIn",
  //   },
  //   {
  //     link: "http://github.com/yashnirmal",
  //     icon: Github,
  //     text: "Github",
  //   },
  //   {
  //     link: "https://yashnirmal.hashnode.dev/",
  //     icon: Pencil,
  //     text: "My Blog",
  //   },
  //   {
  //     link: "mailto:yash15nirmal@gmail.com",
  //     icon: Mail,
  //     text: "Mail",
  //   },
  //   {
  //     link: "https://drive.google.com/file/d/1_soAGi4t80xauRSvbBs0ZCmY5DcvPnfa/view?usp=sharing",
  //     icon: File,
  //     text: "Resume",
  //   },
  // ];


  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8">
      <a
        href="https://yashnirmal.hashnode.dev/"
        target="blank"
        className="p-2 px-3 sm:px-4 sm:py-3 flex  gap-3 sm:gap-4 items-center border-[1px] border-gray-200 rounded-full duration-300 hover:-translate-y-1"
      >
        <Pencil strokeWidth={1} />
        <p className="text-lg sm:text-xl">Blog</p>
      </a>
      
      <a
        href="https://twitter.com/YashNirmalDev"
        target="blank"
        className="py-2 px-3 sm:px-4 sm:py-3 flex  gap-3 sm:gap-4 items-center border-[1px] border-gray-200 rounded-full duration-300 hover:-translate-y-1"
      >
        <Twitter strokeWidth={1} />
        <p className="text-lg sm:text-xl">Twitter</p>
      </a>
      
      <a
        href="https://www.linkedin.com/in/yash-nirmal-062b68220/"
        target="blank"
        className="py-2 px-3 sm:px-4 sm:py-3 flex  gap-3 sm:gap-4 items-center border-[1px] border-gray-200 rounded-full duration-300 hover:-translate-y-1"
      >
        <Linkedin strokeWidth={1} />
        <p className="text-lg sm:text-xl">LinkedIn</p>
      </a>
      
      <a
        href="http://github.com/yashnirmal"
        target="blank"
        className="py-2 px-3 sm:px-4 sm:py-3 flex  gap-3 sm:gap-4 items-center border-[1px] border-gray-200 rounded-full duration-300 hover:-translate-y-1"
      >
        <Github strokeWidth={1} />
        <p className="text-lg sm:text-xl">Github</p>
      </a>
      
      
      
      <a
        href="mailto:yash15nirmal@gmail.com"
        target="blank"
        className="p-2 px-3 sm:px-4 sm:py-3 flex  gap-3 sm:gap-4 items-center border-[1px] border-gray-200 rounded-full duration-300 hover:-translate-y-1"
      >
        <Mail strokeWidth={1} />
        <p className="text-lg sm:text-xl">Mail</p>
      </a>
      
      <a
        href="https://drive.google.com/file/d/1_soAGi4t80xauRSvbBs0ZCmY5DcvPnfa/view?usp=sharing"
        target="blank"
        className="p-2 px-3 sm:px-4 sm:py-3 flex gap-3 sm:gap-4 items-center border-[1px] border-gray-200 rounded-full duration-300 hover:-translate-y-1"
      >
        <File strokeWidth={1} />
        <p className="text-lg sm:text-xl">Resume</p>
      </a>
      
    </div>
  );
}
