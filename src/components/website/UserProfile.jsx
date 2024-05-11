"use client";

//assets
import banner from "@/../public/assets/banner.png";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";

function UserProfile() {
  // console.log(banner);
  return (
    <section className="w-full rounded-tl-[12px] rounded-tr-[12px] pb-[20px] flex flex-col items-start justify-start gap-[38px]  ">
      {/* banner div  */}
      <div className="w-full h-[200px] bg-red-400 overflow-hidden rounded-tl-[12px] rounded-tr-[12px] relative ">
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/banner"
          className="object-cover grow w-full h-[200px] "
        />
      </div>
      {/* banner div  */}
      {/* <div className="  relative ">
      </div> */}
      <ProfileCard />
      <div className=" flex gap-[32px] pl-[444px] ">
        <ProfileDetails />
      </div>
    </section>
  );
}

export default UserProfile;
