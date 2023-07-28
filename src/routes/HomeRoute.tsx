import useFetchProfile from "../helpers/fetchUserHook";
import AdminDashboard from "../pages/admin/dashboard";
import SecurityDashboard from "../pages/security/dashboard";
import StudentDashboard from "../pages/student/dashboard";
import LoginScreen from "../pages/common/login";

const Dashboard = () => {
  const { user, isLoading } = useFetchProfile("/profile");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-info opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (user?.role === "admin") {
    return <AdminDashboard />;
  }

  if (user?.role === "security") {
    return <SecurityDashboard />;
  }

  if (user?.role === "student") {
    return <StudentDashboard />;
  }

  if (!user?.role && !isLoading) {
    return <LoginScreen />;
  }
};

export default Dashboard;
