import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import SearchBox from "../Components/Form/SearchBox";
import messageIcon from "../assets/images/icon/message_icon.svg";
import notificationIcon from "../assets/images/icon/notification_icon.svg";
import userImage from "../assets/images/dashboard/user_img.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import OutSideDetectHook from "../Hooks/OutSideDetectHook";

function Header() {
  const [userDropdown, setUserDropdown] = useState(false);

  //Gettings Message
  let date = new Date();
  let getHours = date.setHours(4);
  let showHour;
  if (getHours < 12) {
    showHour = "Good Morning";
  } else if (getHours >= 12 && getHours <= 17) {
    showHour = "Good Afternoon";
  } else if (getHours >= 18 && getHours <= 24) {
    showHour = " Good Evening";
  } else {
    showHour = "Good Morning ";
  }

  //User Dropdown OutSideDetectHook
  const handleClose = () => {
    setUserDropdown(false);
  };

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
            <button
              type="button"
              className="icon_btn user_btn"
              onClick={(e) => setUserDropdown(!userDropdown)}
            >
              <img src={userImage} alt="userImage" />
            </button>
            <OutSideDetectHook outsideHooks={handleClose}>
              <div
                className={`dropdwon_area user_dropdown_area ${
                  userDropdown ? "dropdownActive" : ""
                }`}
              >
                <h4>{showHour}</h4>
                <h5>Mohammad</h5>
                <ul>
                  <li>
                    <Link to="#" className="profile_link">
                      <div className="profile_icon"></div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="profile_link">
                      <div className="profile_icon">
                        <FaUserAlt size={14} />
                      </div>
                      <h6>Profile</h6>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="profile_link">
                      <div className="profile_icon">
                        <FaUserAlt size={14} />
                      </div>
                      <h6>Inbox</h6>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="profile_link">
                      <div className="profile_icon">
                        <FaUserAlt size={14} />
                      </div>
                      <h6>Transitions</h6>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="profile_link">
                      <div className="profile_icon">
                        <FaUserAlt size={14} />
                      </div>
                      <h6>Payment History</h6>
                    </Link>
                  </li>
                  <li>
                    <button type="button" className="profile_link">
                      <div className="profile_icon">
                        <FaUserAlt size={14} />
                      </div>
                      <h6>Log Out</h6>
                    </button>
                  </li>
                </ul>
              </div>
            </OutSideDetectHook>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
