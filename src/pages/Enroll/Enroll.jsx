import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Enroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const course = useSelector((state) => state.academy.selectedCourse);
  const connected = useSelector((state) => state.user.connected);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const student = { courseTitle: course.title, fullName, email, phone };
  const lastLocation = window.location.pathname;
  localStorage.setItem("lastLocation", lastLocation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (connected) {
      axios
        .post("http://localhost:5005/enroll", student)
        .then((response) => {
          setError(false);
          setTimeout(() => {
            setSuccess(response.data.message);
          }, 3000);
          navigate("/");
        })
        .catch((error) => {
          setError(error.response.data.error);
        });
    } else {
      setError("You must login to apply!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  return (
    <div className="">
      <div className="lg:h-[60vh] h-[40vh] mt-20 bg-center object-cover bg-blend-multiply bg-black/60 bg-[url('https://img.freepik.com/free-photo/education-university-studying-concept-closeup-portrait-friendly-joyful-female-student-with-bo_1258-123946.jpg?w=1380&t=st=1700146823~exp=1700147423~hmac=8131b691868f0724ab79feb73a90f81d3689ad81f9272876dcbfabb5ddcf8a63')] bg-no-repeat bg-cover  grid place-content-center ">
        <div className="lg:pl-56 flex flex-col lg:items-start items-end  justify-center">
          <motion.h1
            initial={{ y: "-3vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="lg:text-lg text-sm tracking-wide font-light text-white">
            Thank you for choosing{" "}
            <span className="text-blue-200">{course.title}</span>
          </motion.h1>
          <motion.h1
            initial={{ y: "-3vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="lg:text-7xl text-4xl underline decoration-[1px] shadow-xl underline-offset-8 text-cyan-400  font-semibold tracking-wide uppercase">
            Enroll Now
          </motion.h1>
        </div>
      </div>
      <section className=" lg:w-[40%]  bg-gray-50  w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-gray-100 shadow-lg rounded-sm px-12 py-8 lg:my-10 flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-6 w-full ">
            <div className="flex flex-col">
              <span className=" font-normal text-center uppercase text-xl my-6  text-cyan-800 w-full">
                {course.title}
              </span>

              <span className="text-gray-800 font-light text-sm">
                Duration: {course.duration}{" "}
              </span>
              <span className="text-gray-800 font-light text-sm">
                Price: {course.price}{" "}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-cyan-800"
                htmlFor="fullName">
                Full Name:
              </label>
              <input
                className="outline-none bg-purple-100 focus:shadow-lg p-2 text-xs border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400 pl-2 text-gray-500 w-full"
                type="text"
                placeholder="Your Name"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-cyan-800"
                htmlFor="email">
                Email:
              </label>
              <input
                className="text-xs p-2 outline-none bg-purple-100 focus:shadow-lg pl-2 border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400  text-gray-500 w-full"
                type="email"
                placeholder="Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-cyan-800"
                htmlFor="phone">
                Phone:
              </label>
              <input
                className="outline-none bg-purple-100 focus:shadow-lg p-2 text-xs border-[2px] rounded border-cyan-200 focus:border-cyan-300 caret-blue-400 pl-2 text-gray-500 w-full"
                type="text"
                placeholder="Your Phone Number"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-800 transition-colors duration-300 ease-linear px-12 tracking-wide py-2 uppercase text-sm text-white rounded-sm">
            Enroll Now
          </button>
          <div>
            {error && (
              <span className="bg-red-600 border-red-400 w-max text-sm text-white py-2 px-12 border-2  rounded-full  mx-auto">
                {" "}
                {error}{" "}
              </span>
            )}
            {success && (
              <span className="bg-emerald-600 border-emerald-400 w-max text-sm text-white py-2 px-12 border-2  rounded-full  mx-auto">
                {success}{" "}
              </span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

export default Enroll;
