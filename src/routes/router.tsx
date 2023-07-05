import { Routes, Route, redirect } from "react-router-dom";
import LoginScreen from "../pages/common/login";
import Error404 from "../pages/common/error404";
import ChangePassword from "../pages/common/changePassword";
import ForgotPassword_1 from "../pages/common/forgotPassword_1";
import ForgotPassword_2 from "../pages/common/forgotPassword_2";
import ForgotPassword_3 from "../pages/common/forgotPassword_3";
import Register from "../pages/student/register";
import AdminDashboard from "../pages/admin/dashboard";
import IndividualProfile from "../pages/admin/individual";
import SecurityDashboard from "../pages/security/dashboard";
import ClosedEntries from "../pages/security/closedEntries";
import ClosingDialogue from "../pages/security/closingDialogue";
import Support from "../pages/common/support";
import StudentDashboard from "../pages/student/dashboard";
import StudentReport from "../pages/student/reports";
import StudentReason from "../pages/student/reason";
import SuccessfulExit from "../pages/student/success";
import FailedExit from "../pages/student/failure";
import StudentUpdateInfo from "../pages/student/updateInfo";
import LogOut from "../components/logOut";

type Props = {};

const mainRouter = ({}: Props) => {
  return (
    <Routes>
      {/* Common */}
      <Route path="/" element={<LoginScreen/>}/>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/forgotpass" element={<ForgotPassword_1 />} />
      <Route path="/forgotpass_2" element={<ForgotPassword_2 />} />
      <Route path="/forgotpass_3" element={<ForgotPassword_3 />} />
      <Route path="/changepass" element={<ChangePassword />} />
      <Route path="/help" element={<Support />} />

      {/* Admin Routes */}
      <Route path="/admin/home" element={<AdminDashboard />} />
      <Route path="/admin/individual" element={<IndividualProfile />} />

      {/* Security Routes */}
      <Route path="/security/home" element={<SecurityDashboard />}/> 
      <Route path="/security/closed" element={<ClosedEntries />}/> 
      <Route path="/security/sure?" element={<ClosingDialogue />}/> 

      {/* Student Routes */}
      <Route path="/student/register" element={<Register/>} />
      <Route path="/student/home" element={<StudentDashboard/>} />
      <Route path="/student/report" element={<StudentReport/>} />
      <Route path="/student/reason" element={<StudentReason/>} />
      <Route path="/student/success" element={<SuccessfulExit/>} />
      <Route path="/student/failure" element={<FailedExit/>} />
      <Route path="/student/update" element={<StudentUpdateInfo/>} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default mainRouter;
