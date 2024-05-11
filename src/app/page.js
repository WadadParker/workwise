import LandingPageModal from "../components/modals/LandingPageModal";
import LandingPage from "./landing-page/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <LandingPage />
      <LandingPageModal />
    </main>
  );
}
