function LandingPageNavbar() {
  return (
    <section className=" flex gap-[170px] pl-[17px] pr-[40px] pt-[22px] ">
      <div className=" flex items-center justify-center gap-[180px] ">
        <h1 className="  font-extrabold text-[#06265F] text-[24px] leading-[28.13px]  ">
          WorkWise
        </h1>
        <div className="w-full flex  items-start justify-center gap-[40px] font-semibold text-[18px] leading-[21.09px] ">
          <p>Find talent</p>
          <p>Find work</p>
          <p>Community</p>
          <p>Why FreeWork</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[22px] ">
        <div className="flex items-center justify-center gap-[2px] ">
          <p className=" text-[#06265F] font-semibold text-[18px] leading-[21.09px] ">
            Resources
          </p>
          <div className=" w-[2px] h-[21px] font-medium text-[18px] leading-[21.09px] bg-[#93939391] "></div>

          <p className=" text-[#06265F] font-semibold text-[18px] leading-[21.09px] ">
            Sign In
          </p>
        </div>
        <button className="rounded-[20px] bg-[#532983] text-[#FFFFFF] font-semibold text-[18px] leading-[21.09px] px-[13px] py-3 ">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default LandingPageNavbar;
