import Image from "next/image";
import LandingPageModal from "@/components/modals/LandingPageModal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      No Navabar here
      <hr />
      Landing Page
      This page will also have the Landing Page modal to select between Designer n Freelancer
      <LandingPageModal />
    </main>
  );
}
