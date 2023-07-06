import axios from "axios";
import MainRouter from "./routes/router";
import { Toaster } from "react-hot-toast";
import useFetch from "./helpers/fetchHook";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

const App = () => {
  useFetch('/profile');

  return (
    <div>
      <MainRouter />
      <Toaster />
    </div>
  );
};

export default App;
