import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber";
import Footer from "../Footer/Footer";

const Display = () => {
  return (
    <div>
      <div className="text-center space-y-3">
        <Navber></Navber>

        <Outlet></Outlet>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Display;
