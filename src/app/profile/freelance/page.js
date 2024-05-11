import UserProfile from "../../../components/website/UserProfile";
import WorkHistory from "../../../components/website/WorkHistory";
import Navbar from "../../../components/website/Navbar";

function freelanceProfile() {
  return (
    <section className="w-full flex flex-col gap-[36px] pr-[30px]  pl-[20px] bg-[#F8FCED] ">
      <Navbar />
      <div className="w-full   border border-solid border-[#B3B3B3] rounded-[16px] ">
        <UserProfile />
        <WorkHistory />
      </div>
    </section>
  );
}

export default freelanceProfile;
