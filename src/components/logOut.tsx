import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useOutingStore, useUserStore } from "../store/store";

const LogOut = () => {
  const navigate = useNavigate();
  const {setUser} = useUserStore();
  const {setOuting} = useOutingStore();

  useEffect(() => {
    try {
      toast
        .promise(axios.get("/logout"), {
          loading: "Logging out...",
          success: "Logged out",
          error: (error) => error.response.data,
        })
        .then((response) => {
          console.log(response);
          setUser(null);
          setOuting(null);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          navigate("/login");
        });
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }, [navigate]);

  return <div></div>;
};

export default LogOut;
