import { Header, ProjectCard, SkillCard } from "@/components";
import { ProjectModal } from "@/components/ProjectsModal";
import { projectsArr, skillsArr } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center gap-[30px] pb-[40px]">
      <Header />

      {/* projects sec  */}
      <div className="w-[95%] flex flex-col">
        <div className=" flex flex-col gap-[30px] ">
          <div className="text-white text-[20px] font-[600]">Projects</div>
          <div className="flex flex-wrap  items-center gap-[20px]">
            {projectsArr.map(
              ({
                imageSrc,
                title,
                description,
                github_repo_link,
                hosted_link,
              }) => {
                return (
                  <ProjectModal
                    key={title}
                    github_repo_link={github_repo_link}
                    hosted_link={hosted_link}
                    trigger={
                      <ProjectCard
                        imageSrc={`/projects/${imageSrc}`}
                        title={title}
                        description={description}
                      />
                    }
                  />
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* skills sec */}
      <div className="w-[95%] flex flex-col mt-[50px]">
        <div className=" flex flex-col gap-[30px] ">
          <div className="text-white text-[20px] font-[600]">What I know</div>
          <div className="flex  items-center gap-[80px]">
            {skillsArr.map(({ domain, skills }) => {
              return <SkillCard key={domain} domain={domain} skills={skills} />;
            })}
          </div>
        </div>
      </div>

      {/* more projects sec */}

      {projectsArr.length > 4 && (
        <div className="w-[95%] flex flex-col mt-[50px]">
          <div className=" flex flex-col gap-[30px] ">
            <div className="text-white text-[20px] font-[600]">
              More Projects
            </div>
            <div className="flex flex-wrap  items-center gap-[20px]">
              {projectsArr.map(({ imageSrc, title, description }) => {
                return (
                  <ProjectCard
                    key={title}
                    imageSrc={`/projects/${imageSrc}`}
                    title={title}
                    description={description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
