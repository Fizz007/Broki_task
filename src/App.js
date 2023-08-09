import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<PrivateRoute />}>
        </Route> */}
          <Route path="/home" element={<Home />} />
       
      </Routes>
      <Toaster
        toastOptions={{
          duration: 4000,
          position: "top-center",
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </>
  );
}

export default App;
