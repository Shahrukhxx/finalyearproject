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
    </Routes>
  );
}
export default App;
