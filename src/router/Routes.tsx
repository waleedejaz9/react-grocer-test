// import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import { AppUrls } from "@/static/app_routes";
import { DashboardLayout } from "../Layout";
import { OrderPlaced, MyBucket, Checkout, Product } from "../app/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/my-bucket" element={<MyBucket />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
