import React from "react";

function ProfileCard() {
  return (
    <section className="z-10 bg-[#FFFFFF] absolute top-[197px] left-[74px] w-[318px] rounded-[25px]  shadow-md shadow-yellow-400 transform translate-y-4 ">
      <div className=" flex flex-col items-center justify-center gap-[7px] pl-[45px] pr-[43px] pb-[48px] pt-[42px] ">
        <div className=" flex flex-col items-center justify-center gap-1 ">
          <div className="w-[100px] h-[100px] rounded-full bg-slate-700 "></div>
          <div className=" flex flex-col items-start ">
            <h3 className="w-full font-medium text-[20px] leading-[30px] text-[#000000] text-center ">
              Wadad parker
            </h3>
            <div className="flex items-center justify-center gap-3 ">
              <p>Rating</p>
              <div className="flex items-center justify-center">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="flex items-center justify-center gap-3 ">
              <p>Super rating</p>
              <div className="flex items-center justify-center">6⭐</div>
            </div>
          </div>
        </div>

        <div className=" flex items-start gap-[18px] text-[#FFFFFF] ">
          <button className=" bg-[#D3445B] rounded-[12px] py-1 px-[18px]  ">
            Shorlist
          </button>
          <button className=" bg-[#2E4FFF] rounded-[12px] py-1 px-[18px]  ">
            Hire!
          </button>
        </div>
      </div>

      <hr className="border border-solid border-[#B2B2B2] " />
      <div className="  pl-[14px] pr-[10px] pt-[20px] pb-[11px] flex items-center justify-center gap-[24px] ">
        <Stats stat="$100K+" statTitle="Total earning" />
        <Stats stat="343" statTitle="Total jobs" />
        <Stats stat="10,213" statTitle="Total hours" />
      </div>
      <hr className="border border-solid border-[#B2B2B2] " />
      <div className=" pt-[20px] pb-[58px] pl-[14px] flex flex-col items-start gap-[31px] ">
        <div className="flex flex-col items-start gap-[5px] ">
          <h2 className=" text-[24px] leading-[36px] font-medium text-[#000000] ">
            Languages
          </h2>
          <div>
            <p className=" text-[20px] leading-[30px] font-medium text-[#000000] ">
              English: Fluent
            </p>
            <p className=" text-[20px] leading-[30px] font-medium text-[#000000] ">
              Hindi: Fluent
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[6px]  ">
          <h2 className="text-[24px] leading-[36px] font-medium text-[#000000]">
            Verifications
          </h2>
          <p className=" text-[20px] leading-[30px] font-medium text-[#000000] ">
            ID: verified
          </p>
        </div>
      </div>
    </section>
  );
}

const Stats = ({ stat, statTitle }) => (
  <div className="flex flex-col items-start ">
    <h2 className="font-medium text-[20px] leading-[30px] "> {stat} </h2>
    <p className="font-medium text-[14px] leading-[21px] ">{statTitle}</p>
  </div>
);

export default ProfileCard;
