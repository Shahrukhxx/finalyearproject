import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import StudentPortal from "./pages/StudentPortal";
import SignInDashboard from "./pages/SignInDashboard";
import StudentSignUp from "./pages/StudentSignUp";
import AlumniPortal from "./pages/AlumniPortal";
import IndustryPortal from "./pages/IndustryPortal";
import AdminPortal from "./pages/AdminPortal";
import AlumniSignUp from "./pages/AlumniSignUp";
import CreateProfile from "./pages/CreateProfile";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/student-portal":
        title = "";
        metaDescription = "";
        break;
      case "/signin-dashboard":
        title = "";
        metaDescription = "";
        break;
        case "/student-signup":
        title = "";
        metaDescription = "";
        break;
        case "/alumni-portal":
        title = "";
        metaDescription = "";
        break;
        case "/industry-portal":
        title = "";
        metaDescription = "";
        break;
        case "/admin-portal":
          title = "";
          metaDescription = "";
          break;
          case "/alumni-signup":
          title = "";
          metaDescription = "";
          break;
          case "/create-profile":
          title = "";
          metaDescription = "";
          break;
          
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/student-portal" element={<StudentPortal />} />
      <Route path="/signin-dashboard" element={<SignInDashboard />} />
      <Route path="/student-signup" element={<StudentSignUp />} />
      <Route path="/alumni-portal" element={<AlumniPortal />} />
      <Route path="/industry-portal" element={<IndustryPortal />} />
      <Route path="/admin-portal" element={<AdminPortal />} />
      <Route path="/alumni-signup" element={<AlumniSignUp />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      
    </Routes>
  );
}
export default App;
