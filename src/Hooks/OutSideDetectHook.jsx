import { useEffect, useRef } from "react";

function OutSideDetectHook({ outsideHooks, children }) {
  const innerAreaRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (innerAreaRef.current && !innerAreaRef.current.contains(e.target)) {
      outsideHooks && outsideHooks();
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
  return <div ref={innerAreaRef}>{children}</div>;
}

export default OutSideDetectHook;
