import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import PersonalDetails from "./pages/auth/personlDetails/PersonalDetails";
import TestDetail from "./pages/test-detail/TestDetail";
import BottomNavBar from "./components/bottomNavBar/BottomNavBar";
import MyExams from "./pages/MyExams/MyExams";
import Winner from "./pages/winner/Winner";
import Courses from "./pages/courses/Courses";
import Class from "./pages/class/Class";
import UserProfile from "./pages/user/UserProfile";
import Result from "./pages/user/result/Result";
import Wallet from "./pages/user/wallet/Wallet";

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user?.name ? <Home /> : <Login />} />
          <Route path="/auth-personaldetails" element={<PersonalDetails />} />
          <Route path="/test/:id" element={<TestDetail />} />
          <Route path="/my-exams" element={<MyExams />} />
          <Route path="/winners" element={<Winner />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/class" element={<Class />} />
          <Route path="/profile-detail" element={<UserProfile />} />
          <Route path="/my-exams" element={<MyExams />} />
          <Route path="/result" element={<Result />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
        <BottomNavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
