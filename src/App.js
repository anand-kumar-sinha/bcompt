import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import HelpCenter from "./pages/user/help-center/HelpCenter";
import Language from "./pages/user/Language/Language";

function Layout({ children }) {
  const location = useLocation(); // Now inside a Router

  // Define routes where BottomNavBar should be hidden
  const hideBottomNavRoutes = [
    "/auth-personaldetails",
    "/profile-detail",
    "/result",
    "/wallet",
    "/test", // Adjust dynamic routes as needed
  ];

  // Check if the current route matches any of the routes in hideBottomNavRoutes
  const shouldHideBottomNav = hideBottomNavRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {children}
      {/* Conditionally render BottomNavBar */}
      {!shouldHideBottomNav && <BottomNavBar />}
    </>
  );
}
function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={user?.name ? <Home /> : <Login />} />
            <Route path="/auth-personaldetails" element={<PersonalDetails />} />

            {/* bottom nav */}
            <Route path="/my-exams" element={<MyExams />} />
            <Route path="/winners" element={<Winner />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/class" element={<Class />} />

            {/* pages */}
            <Route path="/test/:id" element={<TestDetail />} />
            <Route path="/profile-detail" element={<UserProfile />} />
            <Route path="/my-exams" element={<MyExams />} />
            <Route path="/result" element={<Result />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/language" element={<Language />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
