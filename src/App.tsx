import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FaInfo, FaTimes, FaCheck } from "react-icons/fa";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import "./App.css";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MainApp from "./pages/MainApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <MainApp />,
  },
]);

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  // offset: "80px",
  transition: transitions.FADE,
  containerStyle: {
    // right: "90px",
  },
};

const AlertTemplate = ({ style, options, message, close }: any) => (
  <div style={style} className="alert-wrapper">
    <div className="alert-content">
      <div className={`alert-icon ${options.type}`}>
        {options.type === "info" && <FaInfo size={12} />}
        {options.type === "success" && <FaCheck size={24} />}
        {options.type === "error" && <FaTimes size={24} />}
      </div>
      <div className="alert-desc">{message}</div>
    </div>
    <div className="alert-close-button" onClick={close}>
      <FaTimes />
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <AlertProvider template={AlertTemplate} {...options}>
        <RouterProvider router={router} />
      </AlertProvider>
    </div>
  );
}

export default App;
