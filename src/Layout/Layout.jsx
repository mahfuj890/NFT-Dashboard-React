import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Section/Sidebar";
import SidebarContext from "../Context/SidebarContext";
import Footer from "./Footer";
import Header from "./Header";
function Layout() {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <section
      className={`dashboard_wrapper ${toggleSidebar ? "sidebar_toggle" : ""}`}
    >
      <div className="dashboard_grd">
        <Sidebar />
        <div className="dashboard_content_wrapper">
          <Header />
          <main className="main_content_wrapper">
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
