import "../src/assets/sass/style.css";
import "react-toastify/dist/ReactToastify.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bodyBG from "../src/assets/images/dashboard/bodyBG.jpg";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Auctions from "./Pages/Auctions";
import NotFound from "./Pages/NotFound";
import { SidebarContextProvider } from "./Context/SidebarContext";
function App() {
  return (
    <div
      className="AppWrapper"
      style={{ background: `url(${bodyBG}), #0C0C0C` }}
    >
      <SidebarContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="auctions" element={<Auctions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer limit={3} transition={Slide} />
      </SidebarContextProvider>
    </div>
  );
}

export default App;
