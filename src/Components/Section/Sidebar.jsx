import { useState, useEffect, useContext } from "react";
import logo from "../../../src/assets/images/dashboard/logo.png";
import { Link, NavLink } from "react-router-dom";
import SidebarContext from "../../Context/SidebarContext";
import SidebarData from "../../Data/SidebarRouteData";
function Sidebar() {
  const { mobileSidebar, onMobileSidebar } = useContext(SidebarContext);
  const [switchbox, setSwitchbox] = useState(true);

  const handleChangeSWitch = () => {
    if (switchbox) {
      setSwitchbox(false);
      localStorage.setItem("data-theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setSwitchbox(true);
      localStorage.setItem("data-theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  useEffect(() => {
    const getThemeColor = localStorage.getItem("data-theme");

    if (getThemeColor == "light") {
      localStorage.setItem("data-theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      setSwitchbox(false);
    } else {
      localStorage.setItem("data-theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      setSwitchbox(true);
    }
  }, [switchbox]);

  return (
    <>
      <div
        className={`sidebar_wrapper ${mobileSidebar ? "sidebar_active" : ""}`}
      >
        <div className="logo_area">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="sidebar_menu_area">
          <h4 style={{ color: "white" }}>{switchbox ? "yes" : "no"} </h4>
          <ul className="top_menu_list">
            <li>
              <div className="custom_switchbox_area">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={switchbox}
                    onChange={handleChangeSWitch}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </li>
            {SidebarData.map((item) => {
              return (
                <li
                  className={`${
                    item.borderBottom ? "add_border menu_list" : "menu_list"
                  }`}
                  key={item.id}
                >
                  <NavLink to={item.sidebarPath} className="menu_link">
                    <div className="menu_icon">{item.sidebarIcon}</div>
                    <div className="menu_label">{item.sidebarLabel}</div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`overlay ${mobileSidebar ? "search_overlay_active" : ""}`}
        onClick={onMobileSidebar}
      ></div>
    </>
  );
}

export default Sidebar;
