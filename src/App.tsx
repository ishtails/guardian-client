import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import Error404 from "./pages/common/error404";
import AdminChangePassword from "./pages/admin/changePassword";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Student Login</div>} />
      <Route path="/home" element={<div>Student Dashboard</div>} />
      <Route path="/changepass" element={<div>Student Change Password</div>} />
      <Route path="/forgotpass" element={<div>Student Forgot Password</div>} />

      <Route path="/security" element={<div>Security Login</div>} />
      <Route path="/security/home" element={<div>Security Dashboard</div>} />
      <Route path="/security/changepass" element={<div>Security Change Password</div>} />
      <Route path="/security/forgotpass" element={<div>Security Forgot Password</div>} />

      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/home" element={<AdminDashboard />} />
      <Route path="/admin/changepass" element={<AdminChangePassword />} />
      <Route path="/admin/forgotpass" element={<div>Admin Forgot Password</div>} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
