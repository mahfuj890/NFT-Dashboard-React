import { useContext } from "react";
import logo from "../../../src/assets/images/dashboard/logo.png";
import { Link, NavLink } from "react-router-dom";
import SidebarContext from "../../Context/SidebarContext";
import SidebarData from "../../Data/SidebarRouteData";
import ThemeContext from "../../Context/ThemeContext";
function Sidebar() {
  const { mobileSidebar, onMobileSidebar } = useContext(SidebarContext);
  const { switchbox, handleChangeSWitch } = useContext(ThemeContext);

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
        <h4 className="myClass" data="red">
          Thiis is
        </h4>
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
