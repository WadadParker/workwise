import Navbar from "../../components/website/Navbar";

export default function Home({ children }) {
  return (
    <div className="flex flex-col h-screen bg-bg">
      <Navbar />
      {children}
    </div>
  );
}
