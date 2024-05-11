import Navbar from "@/components/website/Navbar";
import WorkHistory from "@/components/website/WorkHistory";
import UserProfile from "@/components/website/userProfile";

function freelanceProfile() {
  return (
    <section className="w-full flex flex-col gap-[36px] pr-[30px]  pl-[20px] bg-[#F8FCED] ">
      <Navbar />
      <UserProfile />
      <WorkHistory />
      {/* <div className="w-full ">
      </div> */}
    </section>
  );
}

export default freelanceProfile;
