import MainRouter from "./routes/router";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <body>
      <MainRouter/>
      <Toaster/>
    </body>
  );
};

export default App;
