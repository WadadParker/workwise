import LandingPageNavbar from "../../components/landingPage/LandingPageNavbar";

export default function Home({ children }) {
  return (
    <div className="flex flex-col  bg-[#D9D4F9] ">
      <LandingPageNavbar />
      {children}
    </div>
  );
}
