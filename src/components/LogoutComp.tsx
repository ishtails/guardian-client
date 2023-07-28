import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useOutingStore, useUserStore } from "../store/store";

const Logout = () => {
  const navigate = useNavigate();
  const {setUser, setIsLoading:userLoading} = useUserStore();
  const {setOuting, setIsLoading:outingLoading, setFilter} = useOutingStore();

  useEffect(() => {
    try {
      toast
        .promise(axios.get("/logout"), {
          loading: "Logging out...",
          success: "Logged out",
          error: (error) => error.response.data,
        })
        .then(() => {
          setUser(null);
          setOuting(null);
          setFilter(null);
          userLoading(true);
          outingLoading(true);

          navigate("/");
        })
        .catch((error) => {
          console.log(error.response);
          navigate("/");
        });
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }, [navigate]);

  return <div></div>;
};

export default Logout;
