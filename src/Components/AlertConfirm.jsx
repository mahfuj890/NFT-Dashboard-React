import { RiDeleteBin5Fill } from "react-icons/ri";
import Button from "./Button/Button";

function AlertConfirm({
  alertHeader,
  alertIcon,
  alertBody,
  alertFooter,
  alertNoText,
  alertNoAction,
  alertYesText,
  alertYesAction,
  alertYesType,
  alertActiveClass,
}) {
  return (
    <div
      className={`alertbox_wrapper ${alertActiveClass ? alertActiveClass : ""}`}
    >
      {alertHeader && <div className="alert_icon">{alertIcon}</div>}

      <div className="alert_body_area">{alertBody}</div>
      {alertFooter && (
        <div className="alert_btn_area d-flex align-item-center justify-content-end flex-wrap-wrap g-sm">
          <Button onHandleClick={alertNoAction}>{alertNoText} </Button>
          <Button type={alertYesType} onHandleClick={alertYesAction}>
            {alertYesText}
          </Button>
        </div>
      )}
    </div>
  );
}

AlertConfirm.defaultProps = {
  alertHeader: true,
  alertIcon: <RiDeleteBin5Fill size={22} />,
  alertBody: <h3>Are you want to delete sure? </h3>,
  alertFooter: true,
  alertNoText: "No",
  alertYesText: "Yes",
  alertYesType: "button",
};

export default AlertConfirm;
