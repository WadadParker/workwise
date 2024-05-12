
"use client"
import { Freelance } from "@/models/freelancer";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/loading";

async function  ProfileDetails() {

  const res = await axios.get("http://localhost:3000/api/users/freelance")
  const userProfile = res.data
  const userSkillsArray = userProfile.msg.skills

  return (
    <section className="flex-1 flex flex-col items-start gap-[11px] pt-[5px] ">
      <div className=" w-full flex flex-col items-start gap-[4px] ">

        <div className="w-full flex items-start justify-between pr-[74px] ">
          <h1 className=" font-medium text-[32px] leading-[48px] text-[#000000] ">
            {userProfile.msg.domain}
          </h1>
          <h2 className=" font-medium text-[32px] leading-[48px] text-[#000000] ">
          ${userProfile.msg.hourlyRate}
          </h2>
        </div>
        <p className=" font-normal text-[20px] leading-[30px] text-[#000000] mx-auto  text-start">
          {userProfile.msg.description}
        </p>
      </div>
      <div className="  flex flex-col items-start gap-[33px] pb-[39px] ">
        <h2 className="font-medium  text-[32px] leading-[48px]  text-[#000000] ">
          Skills
        </h2>
        <div className=" pr-[212px] grid grid-cols-3 gap-8  ">
          {userSkillsArray.map((skill, index) => {
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
