import UserProfile from "../../../components/website/UserProfile";
import WorkHistory from "../../../components/website/WorkHistory";

export default function freelanceProfile() {
  return (
    <section className="w-full flex flex-col gap-[36px] pr-[30px]  pl-[20px] bg-[#F8FCED] ">
      <UserProfile />
      <WorkHistory />
    </section>
  );
}
