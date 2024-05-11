import React from "react";
import Link from "next/link";

//icons
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="w-full pt-[27px]  flex items-center justify-center gap-[84px] sticky top-0 z-20 bg-bg ">
      <section className="flex items-center justify-center gap-[64px]">
        <Link href="/"> 
        <h1 className="font-semibold text-[24px] leading-[36.03px] text-[#000000] cursor-pointer ">
          WorkWise
          </h1>
        </Link>
        <ul className="flex items-center justify-center gap-[27px] font-medium text-[24px] leading-[30.02px] text-[#000000] ">
          <li className="hover:underline cursor-pointer">Find Work</li>
          <li className="hover:underline cursor-pointer">My Jobs</li>
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Messages</li>
        </ul>
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
        <div className="w-[50px] h-[50px] rounded-full bg-slate-600 ">
          <img src="https://www.shutterstock.com/shutterstock/photos/2161819863/display_1500/stock-photo-businessman-using-laptop-computer-in-office-happy-middle-aged-man-entrepreneur-small-business-2161819863.jpg" alt="pfp" className="size-full object-cover rounded-full" />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
