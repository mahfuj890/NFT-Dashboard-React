import { createContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  //Toggle Sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  //Toggle Sidebar
  const onSidebarToggle = () => {
    if (window.innerWidth >= 992) {
      setToggleSidebar(!toggleSidebar);
    }
    //Sidebar Resizing Event
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        setToggleSidebar(!toggleSidebar);
      }
    });
  };
  //Mobile Sidebar
  const onMobileSidebar = () => {
    if (window.innerWidth <= 991) {
      setMobileSidebar(!mobileSidebar);
    }
    //Sidebar Resizing Event
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 991) {
        setMobileSidebar(!mobileSidebar);
      }
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        onSidebarToggle,
        mobileSidebar,
        onMobileSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
