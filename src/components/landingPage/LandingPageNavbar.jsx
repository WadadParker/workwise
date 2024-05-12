function LandingPageNavbar() {
  return (
    <section className=" flex gap-[170px] pl-[17px] pr-[40px] pt-[22px] ">
      <div className=" flex items-center justify-center gap-[180px] ">
        <h1 className="  font-extrabold text-[#06265F] text-[24px] leading-[28.13px] cursor-pointer hover:underline  ">
          WorkWise
        </h1>
        <div className="w-full flex  items-start justify-center gap-[40px] font-semibold text-[18px] leading-[21.09px]  ">
          <p className="cursor-pointer hover:underline">Find talent</p>
          <p className="cursor-pointer hover:underline">Find work</p>
          <p className="cursor-pointer hover:underline">Community</p>
          <p className="cursor-pointer hover:underline">Why FreeWork</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[22px] ">
        <div className="flex items-center justify-center gap-[2px] ">
          <p className=" text-[#06265F] font-semibold text-[18px] leading-[21.09px] cursor-pointer">
            Resources
          </p>
          <div className=" w-[2px] h-[21px] font-medium text-[18px] leading-[21.09px] bg-[#93939391] "></div>

          <p className=" text-[#06265F] font-semibold text-[18px] leading-[21.09px] cursor-pointer ">
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
