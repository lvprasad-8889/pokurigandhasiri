import "./protected.css";

import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Members from "../members/members";

const ProtectedRoute = () => {
  const isAdmin = useSelector((state) => state.isAdmin);
  return isAdmin ? (
    <div>
      <Navigate to="enquiries" />
      <Outlet />
    </div>
  ) : (
    <Navigate to="../members" />
  );
};

export default ProtectedRoute;
