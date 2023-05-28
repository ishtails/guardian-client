import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import Error404 from "./pages/common/error404";
import ForgotPass from "./pages/admin/ChangePass";
import ChangePass from "./pages/admin/ChangePass";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/change" element={<ChangePass/>} />
      <Route path="/admin/home" element={<AdminDashboard />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
