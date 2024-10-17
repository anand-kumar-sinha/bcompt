import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import PersonalDetails from "./pages/auth/personlDetails/PersonalDetails";
import TestDetail from "./pages/test-detail/TestDetail";

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user?.name ? <Home /> : <Login />} />
          <Route path="/auth-personaldetails" element={<PersonalDetails />} />
          <Route path="/test/:id" element={<TestDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
