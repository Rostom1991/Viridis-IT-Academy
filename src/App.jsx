import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Cloud from "./pages/Category/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "./redux/academySlice";
import db from "./db.json";
import CourseDetails from "./pages/Courses/CourseDetails";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import About from "./pages/About/About";
import Instructors from "./pages/Instructors/Instructors";
import Contact from "./pages/Contact/Contact";
import Enroll from "./pages/Enroll/Enroll";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories(db.categories));
  }, [dispatch]);
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/courses/:name" element={<CourseDetails />} />
        <Route path="/category/:name" element={<Cloud />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
