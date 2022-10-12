import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Components/Form/SearchBox";
import MessageData from "../Data/MessageData";
import { IoIosCall } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Inbox() {
  const [messageText, setMessageText] = useState({
    id: 1,
    userImage: "../../src/assets/images/dashboard/top_actions_user.png",
    userName: "Mohammad",
    onlineStatus: true,
    stausText: "Online",
    messageText: [
      {
        id: 1,
        userImage: "../../src/assets/images/dashboard/top_actions_user.png",
        text: "Lorem ipsum dolor sit amet.",
        gridStatus: true,
      },
      {
        id: 2,
        userImage: "../../src/assets/images/dashboard/top_actions_user.png",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, quis.",
        gridStatus: false,
      },
      {
        id: 3,
        userImage: "../../src/assets/images/dashboard/top_actions_user.png",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, quis.",
        gridStatus: true,
      },
      {
        id: 4,
        userImage: "../../src/assets/images/dashboard/top_actions_user.png",
        text: "Lorem ipsum dolor sit amet.",
        gridStatus: false,
      },
    ],
  });
  return (
    <section className="inbox_wrapper">
      <div className="inbox_grid">
        <div className="inbox_user_name_area">
          <SearchBox />
          <div className="user_list_area">
            {MessageData.map((item) => {
              return (
                <Link to={"/"} className="user_list_grid" key={item.id}>
                  <div className="user_img">
                    <img src={item.userImage} alt="user image" />
                  </div>
                  <div>
                    <h4>{item.userName}</h4>
                    <h5>
                      <span
                        className={`status ${
                          item.onlineStatus ? "online_user" : "offline_user"
                        }`}
                      >
                        {" "}
                      </span>{" "}
                      {item.stausText}
                    </h5>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="inbox_message_chat_wrapper">
          <div className="user_header_area d-flex-between g-sm">
            <div className="user_list_grid">
              <div className="user_img">
                <img src={messageText.userImage} alt="user image" />
              </div>
              <div>
                <h4>{messageText.userName}</h4>
                <h5>
                  <span
                    className={`status ${
                      messageText.onlineStatus ? "online_user" : "offline_user"
                    }`}
                  ></span>
                  {messageText.stausText}
                </h5>
              </div>
            </div>
            <div className="chat_btn_area d-flex align-items-center flex-wrap-wrap g-sm">
              <button type="button">{<IoIosCall size={18} />}</button>
              <button type="button">
                {<BsFillInfoCircleFill size={18} />}
              </button>
            </div>
          </div>
          <div className="message_body_area">
            {messageText.messageText.map((item) => {
              return (
                <div
                  className={`message_item ${
                    item.gridStatus ? "" : "message_item_right"
                  }`}
                  key={item.id}
                >
                  <div className="message_item_inner">
                    <div className="sender_user_img_area">
                      <img src={item.userImage} alt="user img" />
                    </div>
                    <div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inbox;
