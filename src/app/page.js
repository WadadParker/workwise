import LandingPageNavbar from "@/components/landingPage/LandingPageNavbar";
import LandingPage from "./landing-page/page";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center ">
    <>
      <LandingPageNavbar />
      <LandingPage />
    </>
  );
}
