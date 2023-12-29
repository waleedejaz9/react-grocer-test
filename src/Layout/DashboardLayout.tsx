import { Outlet } from "react-router-dom";
import { AppHeader } from "../components";

export const DashboardLayout = () => {
  return (
    <div className="tw-bg-dashBg">
      <AppHeader />
      <Outlet />
    </div>
  );
};
