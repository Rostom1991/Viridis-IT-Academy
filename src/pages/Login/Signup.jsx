import { useNavigate } from "react-router-dom";
import arrow from "/images/arroww.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { login } from "../../redux/userSlice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const user = { fullName, email, password };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      axios
        .post("https://viridis-it-academy-api.vercel.app/signup", user)
        .then((response) => {
          setError(false);
          dispatch(login(response.data.user));
          setTimeout(() => {
            setSuccess(response.data.message);
          }, 3000);
          // navigate("/");
        })
        .catch((error) => setError(error.response.data.error));
    } else {
      setError("Password fields don't match!");
    }
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
            Signup
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
            <span className="text-gray-400">Signup</span>
          </div>
        </div>
      </section>
      <div className="h-[90vh] grid place-content-center bg-gradient-to-t from-blue-50 to-white">
        {/* <div className="back2"></div> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-start justify-center bg-gray-50 border-[2px] border-gray-200 w-full px-16 py-8 rounded">
          <h1 className="mb-4  text-3xl font-bold text-blue-950">
            Create Your Account!
          </h1>
          <div className="flex flex-col items-start gap-1  w-full">
            <span className="text-blue-950 font-light">Full Name:</span>
            <input
              className="w-full p-1 border-gray-200 rounded border-[2px] outline-zinc-400 pl-2 text-sm"
              type="text"
              name="fullName"
              onChange={(e) => setFullname(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="flex flex-col items-start gap-1  w-full">
            <span className="text-blue-950 font-light">Email:</span>
            <input
              className="w-full p-1 border-gray-200 rounded border-[2px] outline-zinc-400 pl-2 text-sm"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full ">
            <span className="text-blue-950 font-light">Password:</span>
            <input
              className="w-full p-1 border-gray-200 rounded border-[2px] outline-zinc-400 pl-2 text-sm font-light"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full ">
            <span className="text-blue-950 font-light">Confirm Password:</span>
            <input
              className="w-full p-1 border-gray-200 rounded border-[2px] outline-zinc-400 pl-2 text-sm font-light"
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>

          <button className="bg-blue-700 hover:bg-blue-950 transition duration-500 ease-in-out rounded p-3 text-white font-normal  w-full">
            Signup
          </button>
          <div className="w-full flex justify-center items-center gap-4">
            <span className="text-blue-950 font-normal text-sm">
              Already have an account?
            </span>
            <span
              onClick={() => navigate("/login")}
              className="text-blue-700 cursor-pointer ">
              Login
            </span>
          </div>
          <div>
            {error && (
              <span className="text-red-600 text-sm text-center font-bold bg-red-50 py-1 px-4">
                {error}{" "}
              </span>
            )}
            {success && (
              <span className="text-cyan-600 text-sm text-center font-bold bg-cyan-50 py-1 px-4">
                {success}{" "}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
