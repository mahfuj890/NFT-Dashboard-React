import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SearchBox from "../Components/Form/SearchBox";
import messageIcon from "../assets/images/icon/message_icon.svg";
import notificationIcon from "../assets/images/icon/notification_icon.svg";
import userImage from "../assets/images/dashboard/user_img.png";

function Header() {
  return (
    <header className="header_wrapper">
      <div className="header_search_user_area d-flex align-items-center justify-content-between flex-wrap-wrap g-lg">
        <div className="header_search_area">
          <div className="sidebar_icon">
            <button type="button">
              <HiOutlineMenuAlt2 size={24} />
            </button>
          </div>
          <SearchBox />
        </div>
        <ul className="header_info_list d-flex align-items-center flex-wrap-wrap g-sm">
          <li>
            <button type="button" className="icon_btn">
              <img src={messageIcon} alt="messageIcon" />
            </button>
          </li>
          <li>
            <button type="button" className="icon_btn">
              <img src={notificationIcon} alt="notificationIcon" />
            </button>
          </li>
          <li>
            <button type="button" className="icon_btn user_btn">
              <img src={userImage} alt="userImage" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
