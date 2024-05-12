
function ProfileDetails() {
  return (
    <section className="flex-1 flex flex-col items-start gap-[11px] pt-[5px] ">
      <div className=" w-full flex flex-col items-start gap-[4px] ">
        <div className="w-full flex items-start justify-between pr-[74px] ">
          <h1 className=" font-medium text-[32px] leading-[48px] text-[#000000] ">
            Front-end Developer
          </h1>

          <h2 className=" font-medium text-[32px] leading-[48px] text-[#000000] ">
            $40.00/hr
          </h2>



        </div>
        <p className=" font-normal text-[20px] leading-[30px] text-[#000000] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </p>
      </div>
      <div className="  flex flex-col items-start gap-[33px] pb-[39px] ">
        <h2 className="font-medium  text-[32px] leading-[48px]  text-[#000000] ">
          Skills
        </h2>
        <div className=" pr-[212px] grid grid-cols-3 gap-8  ">
          {skills.map((skill, index) => {
            return (
              <h4
                key={index}
                className="bg-[#FFFFFF] text-[#000000] rounded-[12px] font-medium text-[24px] leading-[36px] shadow-md pl-[25px] pr-[24px] text-center pt-[4px] "
              >
                {" "}
                {skill}{" "}
              </h4>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "White.js",
  "Wordpress",
  "Angular",
  "React",
];

export default ProfileDetails;
