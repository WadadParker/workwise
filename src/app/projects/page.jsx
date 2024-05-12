import ProjectCard from "../../components/project/ProjectCard";

function Projects() {
  return (
    <div className="pt-[35px] flex flex-col gap-[19px] px-[126px] bg-bg ">
      <div>
        <h2 className="  font-medium text-[32px] leading-[48px] text-[#000000] ">
          For you
        </h2>
      </div>
      <div className=" flex flex-col gap-[19px] ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
