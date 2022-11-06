import { useState } from "react";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import SearchBox from "../Components/Form/SearchBox";
import MessageData, { MessageTextData } from "../Data/MessageData";
import { IoIosCall } from "react-icons/io";
import { RiSendPlaneFill, RiMenu3Line } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import OutSideDetectHook from "../Hooks/OutSideDetectHook";
import PageTitle from "../Components/PageTitle";
import userImage from "../../src/assets/images/dashboard/top_actions_user.png";
function Inbox() {
  useDocumentTitle("Inbox");
  const [messageText, setMessageText] = useState({
    id: 1,
    userImage: userImage,
    userName: "Mohammad",
    onlineStatus: true,
    stausText: "Online",
    messageText: [
      {
        id: 1,
        userImage: userImage,
        text: "Lorem ipsum dolor sit amet.",
        gridStatus: true,
      },
      {
        id: 2,
        userImage: userImage,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, quis.",
        gridStatus: false,
      },
      {
        id: 3,
        userImage: userImage,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, quis.",
        gridStatus: true,
      },
      {
        id: 4,
        userImage: userImage,
        text: "Lorem ipsum dolor sit amet.",
        gridStatus: false,
      },
    ],
  });
  const [message, setMessage] = useState(false);
  const [inboxForm, setInboxFormForm] = useState("");
  const handleShowMessage = (item) => {
    {
      let filterData = MessageTextData.filter((data) => {
        return data.id == item;
      });
      if (filterData.length > 0) {
        setMessageText(filterData[0]);
      } else {
        setMessageText(
          <h4>
            {" "}
            <b>Not Found The User Data</b>{" "}
          </h4>
        );
      }
    }
  };
  //Search Functions
  const handleChange = (e) => {
    setInboxFormForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInboxFormForm(inboxForm);
  };
  const searchFucntionlity = MessageData.filter((item) => {
    return item.userName.toLowerCase().includes(inboxForm);
  });
  return (
    <section className="inbox_wrapper">
      <PageTitle text={"Inbox"} />
      <div className="inbox_grid">
        {
          <OutSideDetectHook outsideHooks={() => setMessage(false)}>
            <div
              className={`inbox_user_name_area ${
                message ? "message_active" : ""
              }`}
            >
              <SearchBox
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                inputValue={inboxForm}
              />
              <div className="user_list_area">
                {searchFucntionlity.length > 0 ? (
                  searchFucntionlity.map((item) => {
                    return (
                      <div
                        className="user_list_grid"
                        key={item.id}
                        onClick={() => handleShowMessage(item.id)}
                      >
                        <div className="user_img">
                          <img src={item.userImage} alt="user image" />
                        </div>
                        <div>
                          <h4>{item.userName}</h4>
                          <h5>
                            <span
                              className={`status ${
                                item.onlineStatus
                                  ? "online_user"
                                  : "offline_user"
                              }`}
                            >
                              {" "}
                            </span>{" "}
                            {item.stausText}
                          </h5>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <h4 style={{ marginTop: "20px", textAlign: "center" }}>
                      <b>No Search Result</b>
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </OutSideDetectHook>
        }
        <div className="inbox_message_chat_wrapper">
          {messageText.id ? (
            <>
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
                          messageText.onlineStatus
                            ? "online_user"
                            : "offline_user"
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
                  {window.innerWidth <= 767 && (
                    <button type="button" onClick={() => setMessage(true)}>
                      {<RiMenu3Line size={18} />}
                    </button>
                  )}
                </div>{" "}
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
              <div className="message_type_area">
                <SearchBox
                  submitIcon={<RiSendPlaneFill size={18} />}
                  placeholderText="Write Your Message..."
                />
              </div>
            </>
          ) : (
            <div className="not_data_wrapper">
              <h4>
                {" "}
                <b>Not Found The User Data</b>{" "}
              </h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Inbox;
