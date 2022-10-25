import "../src/assets/sass/style.css";
import "../src/assets/sass/theme.scss";
// import "./assets/sass/theme.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bodyBG from "../src/assets/images/dashboard/bodyBG.jpg";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Auctions from "./Pages/Auctions";
import NotFound from "./Pages/NotFound";
import { SidebarContextProvider } from "./Context/SidebarContext";
import { SliderContextProvider } from "./Context/SliderContext";
import { AuctionsTableContenxtProvider } from "./Context/AuctionsTableContenxt";
import { FormContextProvider } from "./Context/FormContext";
import Inbox from "./Pages/Inbox";
import Favourites from "./Pages/Favourites";
import Bitcoin from "./Pages/Bitcoin";
import Ethereum from "./Pages/Ethereum";
import UsdCoin from "./Pages/UsdCoin";
import ThemeContext from "./Context/ThemeContext";
import { useContext } from "react";

function App() {
  const { switchbox } = useContext(ThemeContext);
  return (
    <div
      className={`AppWrapper theme-${switchbox ? "dark" : "light"}`}
      style={{ background: `url(${bodyBG}), #0C0C0C` }}
    >
      <SidebarContextProvider>
        <SliderContextProvider>
          <AuctionsTableContenxtProvider>
            <FormContextProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="auctions" element={<Auctions />} />
                  <Route path="inbox" element={<Inbox />} />
                  <Route path="favourites" element={<Favourites />} />
                  <Route path="bitcoin" element={<Bitcoin />} />
                  <Route path="ethereum" element={<Ethereum />} />
                  <Route path="usdCoin" element={<UsdCoin />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
              <ToastContainer limit={3} transition={Slide} />
            </FormContextProvider>
          </AuctionsTableContenxtProvider>
        </SliderContextProvider>
      </SidebarContextProvider>
    </div>
  );
}

export default App;
