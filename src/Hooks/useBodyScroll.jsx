import { useState, useEffect } from "react";

function useBodyScrollLock() {
  const bodyStyle = document.querySelector("html").style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === "hidden");
  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);
  const toggleScroll = () => {
    setIsLocked(!isLocked);
  };
  return [isLocked, toggleScroll];
}

export default useBodyScrollLock;