import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      toast.promise(axios.get("/logout"), {
        loading: 'Logging out...',
        success: 'Logout Successful!',
        error: (error) => error.response.data,
      })
        .then((response) => {
          console.log(response);
          navigate("/login");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);

  return (
    <div>
      <div>Logging out...</div>
    </div>
  );
};

export default LogOut;
