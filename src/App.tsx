import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import Error404 from "./components/error404";
Error404;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/admin/home" element={<AdminDashboard />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
