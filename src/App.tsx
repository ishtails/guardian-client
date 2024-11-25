import axios from "axios";
import MainRouter from "./routes/router";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "https://guardian-server.onrender.com/";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

const App = () => {
  return (
    <div>
      <MainRouter />
      <Toaster />
    </div>
  );
};

export default App;
