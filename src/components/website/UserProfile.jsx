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
      <div className="w-full h-[200px]  overflow-hidden rounded-tl-[12px] rounded-tr-[12px] relative ">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2161819863/display_1500/stock-photo-businessman-using-laptop-computer-in-office-happy-middle-aged-man-entrepreneur-small-business-2161819863.jpg"
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
