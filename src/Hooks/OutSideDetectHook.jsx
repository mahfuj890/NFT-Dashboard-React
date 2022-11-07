import { useState, useEffect, useRef } from "react";

function OutSideDetectHook({ outsideHooks, children, handleOverlay }) {
  const [overlay, setOverlay] = useState(false);
  const innerAreaRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (innerAreaRef.current && !innerAreaRef.current.contains(e.target)) {
      outsideHooks && outsideHooks();
      console.log("innerAreaRef");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    document.addEventListener("touchstart", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
      document.removeEventListener("touchstart", handleOutsideClick, true);
    };
  }, []);
  if (!children) {
    return null;
  }
  return (
    <>
      <div ref={innerAreaRef} style={{ height: "100%" }}>
        {children}
      </div>
      <div
        className={`overlay ${handleOverlay ? "outside_overlay" : " "}`}
      ></div>
    </>
  );
}

OutSideDetectHook.defaultProps = {
  handleOverlay: false,
};

export default OutSideDetectHook;
