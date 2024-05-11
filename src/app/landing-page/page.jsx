import React from "react";

//image assets
import greenBg from "../../../public/assets/greenBg.png";
import purpleBg from "../../../public/assets/purpleBg.png";
import blueBg from "../../../public/assets/blueBg.png";
import yellowBg from "../../../public/assets/yellowBg.png";
import brownBg from "../../../public/assets/brownBg.png";

function LandingPage() {
  const tempData = [
    {
      url: greenBg,
    },
    {
      url: purpleBg,
    },
    {
      url: blueBg,
    },
    {
      url: yellowBg,
    },
    {
      url: brownBg,
    },
  ];

  return (
    <section className="  pt-[50px] gap-[50px]  flex flex-col items-center justify-center relative overflow-hidden ">
      <div className="flex flex-col items-center justify-center gap-[25px] ">
        <div className="flex  flex-col items-center justify-center gap-[14px] ">
          <h1 className="w-[650px] font-semibold text-[65px] leading-[70px] text-[#06265F] text-center ">
            Freelance freedom at your fingertips
          </h1>
          <p className=" w-[500px] font-normal text-[16px] leading-[20.5px] text-[#000000] text-center ">
            Find <span className="font-medium">Skilled Freelancer</span> for
            your projects, from writing to web development, on our platform -
            where <span className="font-medium">talent meet opportunity!</span>
          </p>
        </div>
        <button className="  bg-[#D06EE1] rounded-[47px] font-medium text-[20px] leading-[28.13px] py-[18px] px-[35px] z-20 ">
          Unlock your full potential
        </button>
      </div>
      <div className="flex items-start gap-[32px] z-20   ">
        {tempData?.map((data, index) => {
          return <img key={index} src={data.url.src} alt="/top-freelancers" />;
        })}
      </div>
      <h1 className="absolute -bottom-[120px] font-semibold text-[607px] leading-[711.33px] z-10 bg-gradient-to-r from-gray-300  to-gray-400 text-transparent bg-clip-text ">
        WROK
      </h1>
    </section>
  );
}

export default LandingPage;
