// import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import { AppUrls } from "@/static/app_routes";
import { DashboardLayout } from "../Layout";
import { Checkout } from "../app/index";
import { MyBucket } from "../app/index";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardLayout />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-bucket" element={<MyBucket />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
