import axios from "axios";
import MainRouter from "./routes/router";
import { Toaster } from "react-hot-toast";

if(import.meta.env.PROD){
  axios.defaults.baseURL = "https://guardian-server.onrender.com";
} else {
  axios.defaults.baseURL = "http://localhost:8000/api";
}

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
