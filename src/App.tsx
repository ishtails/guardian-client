import axios from "axios";
import MainRouter from "./routes/router";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://test-2-env.eba-cftxm3mp.ap-south-1.elasticbeanstalk.com/api";
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
