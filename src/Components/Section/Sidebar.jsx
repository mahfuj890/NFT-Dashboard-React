import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/dashboard/logo.png";
import SidebarData from "../../Data/SidebarRouteData";

function Sidebar() {
  return (
    <div className="sidebar_wrapper">
      <div className="logo_area">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="sidebar_menu_area">
        <ul className="top_menu_list">
          {SidebarData.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.sidebarPath}>
                  <div className="menu_icon">{item.sidebarIcon}</div>
                  <div className="menu_label">{item.sidebarLabel}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
