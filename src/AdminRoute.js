import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2 style={{ color: "rgba(9, 25, 54, 1)" }}>❌ Access Denied</h2>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }
  return children;
}

export default AdminRoute;
