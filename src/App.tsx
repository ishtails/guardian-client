import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import Error404 from "./pages/common/error404";
import AdminChangePassword from "./pages/admin/changePassword";
import AdminForgotPassword_1 from "./pages/admin/forgotPassword_1";
import AdminForgotPassword_2 from "./pages/admin/forgotPassword_2";
import AdminForgotPassword_3 from "./pages/admin/forgotPassword_3";

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
      <Route path="/admin/forgotpass_1" element={<AdminForgotPassword_1/>} />
      <Route path="/admin/forgotpass_2" element={<AdminForgotPassword_2/>} />
      <Route path="/admin/forgotpass_3" element={<AdminForgotPassword_3/>} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
