import UserProfile from "../../../components/website/UserProfile";
import WorkHistory from "../../../components/website/WorkHistory";

export default function freelanceProfile() {
  return (
    <section className="w-[94%] m-auto flex flex-col gap-[36px]  rounded-[16px] border border-solid border-[#B3B3B3]   bg-[#F8FCED] ">
      <UserProfile />
      <WorkHistory />
    </section>
  );
}
