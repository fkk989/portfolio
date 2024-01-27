import { Header, ProjectCard, SikllCard } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center gap-[30px]">
      <div className="text-white text-[20px]">
        Note: This is all dummy data right now I am still in the process of
        making it!
      </div>
      <Header />

      {/* projects sec  */}
      <div className="w-[95%] flex flex-col">
        <div className=" flex flex-col gap-[30px] ">
          <div className="text-white text-[20px] font-[600]">Projects</div>
          <div className="flex flex-wrap  items-center gap-[20px]">
            <ProjectCard
              imageSrc="/discord.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
            <ProjectCard
              imageSrc="/spotify.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
            <ProjectCard
              imageSrc="/amazon.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
            <ProjectCard
              imageSrc="/dalle.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
          </div>
        </div>
      </div>

      {/* skills sec */}
      <div className="w-[95%] flex flex-col mt-[100px]">
        <div className=" flex flex-col gap-[30px] ">
          <div className="text-white text-[20px] font-[600]">What I know</div>
          <div className="flex  items-center gap-[50px]">
            <SikllCard
              title="frontend"
              skills={[
                "HTML",
                "CSS",
                "Tailwind",
                "Javascript",
                "Typescript",
                "Reach Js",
                "Next Js",
              ]}
            />
            <SikllCard
              title="backend"
              skills={[
                "HTML",
                "CSS",
                "Tailwind",
                "Javascript",
                "Typescript",
                "Reach Js",
                "Next Js",
              ]}
            />
            <SikllCard
              title="database"
              skills={[
                "HTML",
                "CSS",
                "Tailwind",
                "Javascript",
                "Typescript",
                "Reach Js",
                "Next Js",
              ]}
            />
            <SikllCard
              title="devops"
              skills={[
                "HTML",
                "CSS",
                "Tailwind",
                "Javascript",
                "Typescript",
                "Reach Js",
                "Next Js",
              ]}
            />
          </div>
        </div>
      </div>

      {/* more projects sec */}

      <div className="w-[95%] flex flex-col">
        <div className=" flex flex-col gap-[30px] ">
          <div className="text-white text-[20px] font-[600]">More Projects</div>
          <div className="flex flex-wrap  items-center gap-[20px]">
            <ProjectCard
              imageSrc="/discord.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
            <ProjectCard
              imageSrc="/spotify.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
            <ProjectCard
              imageSrc="/amazon.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
            <ProjectCard
              imageSrc="/dalle.png"
              title="discord"
              description="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
