import Navbar from "../../../components/website/Navbar"

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      {/* Add footer or any other components here */}
    </div>
  );
}

export default Layout;