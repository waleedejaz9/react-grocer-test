import { Outlet } from "react-router-dom";
import { AppHeader } from "../components";






export const DashboardLayout = () => {
  return (
    <div className="tw-bg-dashBg">
      <div className="md:block hidden">
        <AppHeader cartQuantity={0} />
      </div>

      <Outlet />
    </div>
  );
};
