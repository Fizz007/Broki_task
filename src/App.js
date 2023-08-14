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
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default App;
