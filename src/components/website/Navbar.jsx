import React from "react";

//icons
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="w-full pt-[27px]  flex items-center justify-center gap-[84px] ">
      <section className="flex items-center justify-center gap-[64px]">
        <h1 className="font-semibold text-[24px] leading-[36.03px] text-[#000000] ">
          WorkWise
        </h1>
        <div className="flex items-center justify-center gap-[27px] font-medium text-[24px] leading-[30.02px] text-[#000000] ">
          <p>Find Work</p>
          <p>My Jobs</p>
          <p>Dashboard</p>
          <p>Messages</p>
        </div>
      </section>
      <section className="flex items-center justify-center gap-[46px]  ">
        <div className="w-[392px] relative ">
          <CiSearch
            className="absolute bottom-[8.22px] top-[6px] left-[17.2px] flex items-center justify-center  "
            size={22}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-[50.44px] pt-[5.41px] pb-[4.92px] rounded-[18.25px]  border-[0.48px] border-solid border-[#000000] "
          />
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-slate-600 "></div>
      </section>
    </nav>
  );
}

export default Navbar;
