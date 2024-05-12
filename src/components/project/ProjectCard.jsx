import { FaLocationDot } from "react-icons/fa6";

function ProjectCard() {
  return (
    <section className=" pt-4 pl-[13px] pb-6 pr-[13px] flex flex-col gap-3 items-start rounded-[10px] border border-solid border-[#000000] bg-white ">
      <div className="  flex flex-col gap-[2px] ">
        <p className="font-normal  text-[12px] leading-[18.1px] text-[#000000] ">
          Posted 27 min ago
        </p>
        <h1 className="  font-medium text-[20px] leading-[30px] text-[#5A4EE4] ">
          React/Next Js Front-end Developer to help finish about 10 pages
        </h1>
      </div>
      <p className="  font-medium text-[16px] leading-[24.02px] text-[#000000] ">
        Fixed-price - Intermediate - Est. Budget: $250
      </p>
      <p className=" font-medium text-[16px] leading-[24.02px] text-[#000000] ">
        Hi, I`m looking for a developer to help me finish up some pages most of
        the work will be styling the pages to match the designs exactly and on
        some pages refactoring some of the code to make the component cleaner
        and more maintainable.
      </p>
      <div className=" flex flex-col items-start gap-2 ">
        <div className="flex gap-[10px] items-center justify-center ">
          <p className="rounded-[48px] px-[14px] py-[3px] bg-[#892DFF] text-white ">
            React
          </p>
          <p className="rounded-[48px] px-[14px] py-[3px] bg-highlight-red text-white ">
            Next.js
          </p>
          <p className="rounded-[48px] px-[14px] py-[3px] bg-highlight-green text-white ">
            TypeScript
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-10 ">
          <p className="  font-medium text-[16px] leading-[24px] ">
            Payment verified: Yes
          </p>
          <div className=" flex items-center justify-center gap-[7.18px] ">
            <FaLocationDot />
            <p className="  font-medium text-[16px] leading-[24px] ">
              United States
            </p>
          </div>
        </div>
      </div>
      <button className="  rounded-[7px] bg-[#000000] text-[#FFFFFF] font-medium  px-[13px] py-[3px] ml-auto ">
        Apply
      </button>
    </section>
  );
}

export default ProjectCard;
