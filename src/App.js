import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import OtpVerification from "./pages/auth/OtpVerification";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user?.name ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
