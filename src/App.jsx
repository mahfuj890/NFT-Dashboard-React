import "../src/assets/sass/style.css";
import "react-toastify/dist/ReactToastify.css";
import bodyBG from "../src/assets/images/dashboard/bodyBG.jpg";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Auctions from "./Pages/Auctions";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div
      className="AppWrapper"
      style={{ background: `url(${bodyBG}), #0C0C0C` }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="auctions" element={<Auctions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer limit={3} transition={Slide} />
    </div>
  );
}

export default App;
