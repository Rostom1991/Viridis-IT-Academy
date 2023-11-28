import student from "/images/Student.png";
import { motion } from "framer-motion";
import phone from "/images/phone.svg";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="lg:flex-row lg:flex flex-col justify-evenly bg-[rgb(245,245,253)] py-16 mt-20 container px-16 lg:px-36 ">
      {/* <div className="back"></div> */}

      <div className="flex flex-col gap-6 lg:gap-0 max-w-[39rem]  justify-evenly">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:text-6xl text-4xl font-medium tracking-normal text-blue-950 leading-[3rem] lg:leading-[4rem]">
          Learn <span className="text-blue-500">I.T Skills</span> From Our Top
          Instructors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-light text-sm lg:text-lg text-gray-400">
          At Viridis-IT School, we're dedicated to shaping the tech leaders of
          tomorrow. Our mission is to empower curious minds and passionate
          learners in the realms of Cloud Computing, Web Development, Data
          Science, Virtual Reality, and Testing.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex gap-12">
          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-600 hover:bg-blue-950 transition ease-in-out duration-500 p-3 text-sm lg:text-[1rem]  lg:px-6 rounded text-white">
            Explore Courses
          </button>
          <div>
            <span>Have Any Question?</span>
            <div className="flex gap-3 items-center">
              <img className="w-[2rem]" src={phone} alt="" />
              <span className="text-blue-950 text-lg font-bold ">
                123-456-789
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className=" lg:w-1/4 w-3/4 ml-8 mt-6 "
        src={student}
        alt="student"
      />
    </div>
  );
}

export default Hero;
