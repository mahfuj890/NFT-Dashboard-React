import { createContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  //Toggle Sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const onSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <SidebarContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        onSidebarToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
