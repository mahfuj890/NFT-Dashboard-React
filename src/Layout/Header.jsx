import { useContext, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { FaUserAlt, FaMoneyBillWave } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import SearchBox from "../Components/Form/SearchBox";
import messageIcon from "../assets/images/icon/message_icon.svg";
import notificationIcon from "../assets/images/icon/notification_icon.svg";
import userImage from "../assets/images/dashboard/user_img.png";
import { Link } from "react-router-dom";
import OutSideDetectHook from "../Hooks/OutSideDetectHook";
import Notification from "../Data/Notification";
import Button from "../Components/Button/Button";
import { toast } from "react-toastify";
import SidebarContext from "../Context/SidebarContext";
import searchIcon from "../assets/images/icon/search_icon.svg";
import AlertConfirm from "../Components/AlertConfirm";
function Header() {
  const [notificationData, setNotificationData] = useState(Notification);
  const [userNotification, setUserNotification] = useState(false);
  const [alertNotification, setAlertNotification] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const { onSidebarToggle, onMobileSidebar } = useContext(SidebarContext);
  const [headerSearch, setHeaderSearch] = useState(false);
  const [headerForm, setHeaderForm] = useState("");
  //Gettings Message
  let date = new Date();
  let getHours = date.getHours();
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
  // OutSideDetectHook
  const handleNotifiClose = () => {
    setUserNotification(false);
  };
  const handleUserClose = () => {
    setUserDropdown(false);
  };
  //Wait Toast if toast length is greater 3
  const clearWaitingQueue = () => {
    toast.clearWaitingQueue();
  };
  //Delete All Notification
  const handleActionAlert = () => {
    setNotificationData([]);
    toast.warning("Success All Notification Delete !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
      theme: "dark",
    });
    setAlertNotification(false);
  };
  //Delete Notification
  const deleteNotification = (id) => {
    toast.success("Success Notification Delete !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
      theme: "dark",
    });
    setNotificationData(
      notificationData.filter((item) => {
        return item.id !== id;
      })
    );
  };
  //Navigate Notification
  const handleClick = () => {
    setUserNotification(!userNotification);
  };
  //Header Toggle Button
  const headerToggleBtn = () => {
    if (window.innerWidth >= 992) {
      onSidebarToggle();
    } else if (window.innerWidth <= 991) {
      onMobileSidebar();
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        onSidebarToggle();
      } else if (window.innerWidth <= 991) {
        onMobileSidebar();
      }
    });
  };
  const handleChange = (e) => {
    setHeaderForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Alert Confirm
  const handleAlert = () => {
    setAlertNotification(false);
  };

  return (
    <header className="header_wrapper">
      <div className="header_search_user_area d-flex align-items-center justify-content-between flex-wrap-wrap g-lg">
        <div
          className={`header_search_area ${
            headerSearch ? "header_active" : ""
          }`}
        >
          <div className="sidebar_icon">
            <button type="button" onClick={headerToggleBtn}>
              <HiOutlineMenuAlt2 size={24} />
            </button>
          </div>
          {window.innerWidth <= 991 && (
            <>
              <button
                type="button"
                onClick={() => setHeaderSearch(!headerSearch)}
              >
                <img src={searchIcon} alt="icon" />
              </button>
            </>
          )}
          <SearchBox
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputValue={headerForm}
          />
          <div
            className="overlay"
            onClick={() => setHeaderSearch(!headerSearch)}
          ></div>
        </div>
        <ul className="header_info_list d-flex align-items-center flex-wrap-wrap g-sm">
          <li>
            <button type="button" className="icon_btn">
              <img src={messageIcon} alt="messageIcon" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="icon_btn"
              onClick={(e) => setUserNotification(!userNotification)}
            >
              <img src={notificationIcon} alt="notificationIcon" />
              {notificationData.length > 0 ? (
                <span className="circle_shape"></span>
              ) : null}
            </button>
            <OutSideDetectHook outsideHooks={handleNotifiClose}>
              <div
                className={`dropdwon_area notifi_dropdown_area ${
                  userNotification ? "dropdownActive" : ""
                }`}
              >
                {notificationData.length > 0 ? (
                  <>
                    <div className="notification_header d-flex align-items-center justify-content-between flex-wrap-wrap g-sm">
                      <h3>
                        Notification
                        <span
                          className={` ${
                            notificationData.length > 9 ? "highlighted" : ""
                          }`}
                        >
                          {notificationData.length > 9
                            ? "9+"
                            : notificationData.length}
                        </span>
                      </h3>
                      <button
                        type="button"
                        className="all_delete_btn"
                        onClick={() => setAlertNotification(!alertNotification)}
                      >
                        Delete All
                      </button>
                    </div>
                    <ul className="notification_list">
                      {notificationData.map((item) => {
                        return (
                          <li
                            className={`${item.received ? "received" : ""} ${
                              item.transfer ? "transfer" : ""
                            }  `}
                            key={item.id}
                          >
                            <Link
                              to="#"
                              dangerouslySetInnerHTML={{
                                __html: item.notificationText,
                              }}
                            ></Link>
                            <button
                              type="button"
                              className="delete_btn"
                              onClick={() => deleteNotification(item.id)}
                            >
                              <FaTimes size={20} />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="text-center">
                      <Button version="mt-1" onHandleClick={handleClick}>
                        Sell All
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="text-center">
                      There is no Notification 😤{" "}
                    </h4>
                  </>
                )}
              </div>
            </OutSideDetectHook>
          </li>
          <li>
            <button
              type="button"
              className="icon_btn user_btn"
              onClick={(e) => setUserDropdown(!userDropdown)}
            >
              <img src={userImage} alt="userImage" />
            </button>
            <OutSideDetectHook outsideHooks={handleUserClose}>
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
                        <FiMessageSquare size={14} />
                      </div>
                      <h6>Inbox</h6>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="profile_link">
                      <div className="profile_icon">
                        <FcMoneyTransfer size={14} />
                      </div>
                      <h6>Transitions</h6>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="profile_link">
                      <div className="profile_icon">
                        <FaMoneyBillWave size={14} />
                      </div>
                      <h6>Payment History</h6>
                    </Link>
                  </li>
                  <li>
                    <button type="button" className="profile_link">
                      <div className="profile_icon">
                        <IoIosLogOut size={14} />
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
      <OutSideDetectHook
        outsideHooks={handleAlert}
        handleOverlay={alertNotification && true}
      >
        <AlertConfirm
          alertActiveClass={alertNotification && "alertActive"}
          alertNoAction={() => setAlertNotification(false)}
          alertYesAction={handleActionAlert}
        />
      </OutSideDetectHook>
    </header>
  );
}

export default Header;
