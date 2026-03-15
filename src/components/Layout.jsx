import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;