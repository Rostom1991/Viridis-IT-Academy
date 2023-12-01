/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import arrow from "/images/arroww.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { motion } from "framer-motion";
function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const user = { email, password };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://viridis-it-academy-api.vercel.app/login", user)
      .then((response) => {
        setError(false);
        dispatch(login(response.data.user));
        setTimeout(() => {
          setSuccess(response.data.message);
        }, 1000);
        const lastLocation = localStorage.getItem("lastLocation");
        setTimeout(() => {
          setSuccess(false);
          navigate(lastLocation || "/");
          localStorage.removeItem("lastLocation");
        }, 5000);
        console.log(response.data.user);
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
        setError(error.response.data.error);
      });
  };
  return (
    <div>
      <section className="  mt-20 w-full h-[60vh] bg-fixed bg-center bg-blend-multiply bg-blue-950/80  bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] ">
        <div className="container flex flex-col justify-center pl-36 gap-4 h-full">
          <motion.h1
            initial={{ y: "-3vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className=" text-white font-bold text-5xl">
            Login
          </motion.h1>
          <div className="flex gap-2 items-center">
            <span className="text-white font-semibold"> Viridis Akademy</span>
            <span>
              {" "}
              <img
                className="w-[1rem] rotate-90"
                src={arrow}
                alt="arrow"
              />{" "}
            </span>
            <span className="text-gray-400">Login</span>
          </div>
        </div>
      </section>
      <div className=" py-8 grid place-content-center bg-gradient-to-t from-blue-50 to-white">
        {/* <div className="back2"></div> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-start justify-center bg-gray-50 border-[2px] border-gray-200 w-full px-16 py-8 rounded">
          <h1 className="mb-4  text-3xl font-bold text-blue-950">
            Hello, Welcome Back!
          </h1>
          <div className="flex flex-col items-start gap-1  w-full">
            <span className="text-blue-950 font-light">Email:</span>
            <input
              className="w-full p-1 border-gray-200 rounded border-[2px] outline-zinc-400 pl-2 text-sm"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full ">
            <span className="text-blue-950 font-light">Password:</span>
            <input
              className="w-full p-1 border-gray-200 rounded border-[2px] outline-zinc-400  pl-2 text-sm font-light"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="gap-1 flex">
              <input type="checkbox" />
              <span className="font-light text-sm">Keep me logged in</span>
            </div>
            <span className="text-sm font-light text-gray-700">
              Forgot Password?
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-700 outline-none hover:bg-blue-950 transition duration-500 ease-in-out rounded p-3 text-white font-normal  w-full">
            Login
          </button>
          <div className="w-full flex justify-center items-center gap-4">
            <span className="text-blue-950 font-normal text-sm">
              Don't have an account?
            </span>
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-700 cursor-pointer ">
              Sign Up
            </span>
          </div>
          {error && (
            <span className="text-red-600 text-sm text-center font-bold bg-red-50 py-1 px-4">
              {error}
            </span>
          )}
          {success && (
            <span className="text-cyan-600 text-sm text-center font-bold bg-cyan-100 py-1 px-4">
              {success}{" "}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
