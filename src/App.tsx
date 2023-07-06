import axios from "axios";
import MainRouter from "./routes/router";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useUserStore } from "./store/store";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

const App = () => {
  const { setUser } = useUserStore();

  useEffect(() => {
    axios
      .get("/profile")
      .then((response) => {
        const userData = response.data;
        setUser(userData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <MainRouter />
      <Toaster />
    </div>
  );
};

export default App;
