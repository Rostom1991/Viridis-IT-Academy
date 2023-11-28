import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import react from "/images/react.svg";
import data from "/images/data.svg";
import arrow from "/images/arrow.svg";
function Students() {
  const [hide, setHide] = useState(false);
  const handleSwitch = () => {
    setHide(!hide);
  };

  return (
    <div className=" w-full bg-gradient-to-t  from-cyan-900 to-blue-950  grid place-content-center">
      <div className="flex">
        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: hide ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "linear" }}
            className={` ${
              hide
                ? "hidden"
                : "flex flex-col py-10 lg:py-0 lg:h-screen lg:flex-row justify-center items-center gap-16 h-fit lg:px-48 relative"
            }  `}>
            <img
              className="absolute left-0 lg:left-auto lg:right-[55%] w-[3rem] lg:w-[5rem] text-red-500 z-0 animate-bounce ml-20 mb-72 "
              src={react}
              alt="react logo"
            />
            <div className="lg:w-1/3 w-full  grid place-content-center">
              <div className="   shadow-lg shadow-cyan-500 w-[10rem] h-[10rem]  lg:w-[23rem] lg:h-[23rem] rounded-full  relative">
                <img
                  className=" w-full h-full object-cover rounded-full"
                  src="https://img.freepik.com/free-photo/young-pretty-student-woman-with-backpack-exercise-books-isolated-white-wall_231208-12950.jpg"
                  alt="student"
                />
              </div>
            </div>
            <div className="lg:w-2/3 w-full grid place-content-center gap-8 px-10 lg:px-24">
              <h1 className="text-4xl  font-semibold text-white">
                What Our <span className="text-blue-300">Students</span> Say
                About Us
              </h1>

              <p className="text-yellow-400 font-light ">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur vero consequatur sit mollitia veniam, fugiat rem,
                vel laborum voluptatum nesciunt velit quae laboretatis quia"
              </p>
              <hr />
              <div className="flex flex-col gap-2">
                <span className="font-bold text-white">Jane Doe</span>
                <span className="text-gray-300">Web Developer</span>
                <div className="mt-2 w-[2.5rem] h-[2.5rem] hover:bg-white p-2 bg-transparent border-none rounded-full">
                  <button
                    className="border-none bg-transparent rounded-full "
                    onClick={handleSwitch}>
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* OTHER STUDENT */}
        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: hide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "linear" }}
            className={` ${
              hide
                ? "flex lg:flex-row flex-col py-10 lg:py-0 lg:h-screen  justify-center items-center gap-16 h-fit  lg:px-48 relative"
                : "hidden"
            }  `}>
            {" "}
            <img
              className="absolute left-0 lg:left-auto lg:right-[55%] w-[2.7rem] lg:w-[4.5rem] text-red-500 z-0 animate-bounce ml-20 mb-72 "
              src={data}
              alt="data logo"
            />
            <div className="lg:w-1/3 w-full  grid place-content-center">
              <div className=" shadow-lg shadow-cyan-500 w-[10rem] h-[10rem] lg:w-[23rem] lg:h-[23rem] rounded-full  relative">
                <img
                  className=" w-full h-full rounded-full object-cover"
                  src="https://static.vecteezy.com/system/resources/previews/005/427/825/large_2x/indian-college-student-using-smartphone-on-white-background-free-photo.JPG"
                  alt="student"
                />
              </div>
            </div>
            <div className="lg:w-2/3 w-full grid place-content-center gap-8 px-10 lg:px-24">
              <h1 className="text-4xl  font-semibold text-white">
                What Our <span className="text-blue-300">Students</span> Say
                About Us
              </h1>

              <p className="text-yellow-400 font-light ">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur vero consequatur sit mollitia veniam, fugiat rem,
                vel laborum voluptatum nesciunt velit quae laboretatis quia"
              </p>
              <hr />
              <div className="flex flex-col gap-2">
                <span className="font-bold text-white">John Doe</span>
                <span className="text-gray-300">Data Scientist</span>
                <div className="mt-2 w-[2.5rem] h-[2.5rem] hover:bg-white p-2 bg-transparent border-none rounded-full">
                  <button
                    className="border-none bg-transparent rounded-full "
                    onClick={handleSwitch}>
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Students;
