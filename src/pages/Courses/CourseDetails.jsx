import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import time from "/images/time.svg";
import time2 from "/images/time2.svg";
import people from "/images/people.svg";
import book from "/images/book.svg";
import check from "/images/check.svg";
import level from "/images/scale.svg";
import language from "/images/language.svg";
import date from "/images/date.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CourseDetails() {
  const course = useSelector((state) => state.academy.selectedCourse);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  let backgroundClass = "";
  switch (course.category) {
    case "Cloud":
      backgroundClass = "bg-green-700 text-green-100";
      break;
    case "Data Science":
      backgroundClass = "bg-blue-700 text-blue-100";
      break;
    case "Virtual Reality":
      backgroundClass = "bg-red-700 text-red-100";
      break;
    case "Testing":
      backgroundClass = "bg-purple-700 text-purple-100";
      break;
    case "Web Development":
      backgroundClass = "bg-yellow-600 text-yellow-50";
      break;
    default:
      backgroundClass = "bg-gray-200";
  }
  console.log(course);
  return (
    <div className="flex relative flex-col">
      <header className=" bg-gradient-to-r  from-[#000134] to-[#01000ae8] lg:p-0 py-8 lg:h-[50vh]  mt-20">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="container  lg:flex-row items-center justify-start lg:pl-36 flex flex-col w-full  gap-12 lg:gap-28 h-full">
          <div className="flex flex-col gap-4 pl-16 lg:pl-0 items-start ">
            <span
              className={`${backgroundClass} text-sm rounded-full  py-1 px-3`}>
              {" "}
              {course.category}{" "}
            </span>
            <h1 className="text-white text-4xl font-semibold ">
              {" "}
              {course.title}
            </h1>
            <p className="text-gray-400 font-light w-3/4 text-sm">
              Learn all the basics of {course.title} and MORE..
            </p>
            <div className="flex  items-center justify-start gap-12 w-1/4">
              <div className="flex gap-2 items-center">
                <img className="w-[1.5rem]" src={book} alt="" />
                <span className="text-sm font-light text-gray-500">16</span>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[1.5rem]" src={time} alt="" />
                <span className="text-sm font-light text-gray-500">19h</span>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[1.5rem]" src={people} alt="" />
                <span className="text-sm font-light text-gray-500">5</span>
              </div>
            </div>
          </div>
          <div className="lg:w-[12rem] lg:h-[12rem] w-[10rem] h-[10rem] flex items-center rounded-full">
            <img
              className=" lg:w-[12rem] lg:h-[12rem] w-[10rem] h-[10rem] rounded-full object-cover"
              src={course.image}
              alt="image"
            />
          </div>
        </motion.div>
      </header>
      <section className="py-16 container w-4/5 mx-auto gap-10 flex flex-col justify-center  ">
        <div className="flex flex-col gap-4">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl font-bold text-blue-900 text-left  ">
            What You Will Learn?
          </motion.h1>
          <hr className="w-2/3" />
        </div>

        <div className="grid grid-cols-2 w-full lg:w-3/4 ">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="col-span-1 flex flex-col gap-8">
            <div className="flex gap-2 items-start">
              <img className="w-[2rem]" src={check} alt="check" />
              <p className="text-md font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <img className="w-[2rem]" src={check} alt="check" />
              <p className="text-md font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <img className="w-[2rem]" src={check} alt="check" />
              <p className="text-md font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="col-span-1 flex flex-col gap-8">
            <div className="flex gap-2 items-start">
              <img className="w-[2rem]" src={check} alt="check" />
              <p className="text-md font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <img className="w-[2rem]" src={check} alt="check" />
              <p className="text-md font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <img className="w-[2rem]" src={check} alt="check" />
              <p className="text-md font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.section
        initial={{ y: "-150vh" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.7, delay: 2 }}
        className="  sm:absolute realtive w-10/12 mx-auto md:w-auto md:top-44   bottom-0  md:right-20">
        <div className="bg-white lg:w-[17rem] rounded-lg shadow-sm shadow-blue-950 ">
          <div className="flex h-[16.35rem] lg:flex-col sm:flex-row flex-col sm:justify-center items-center gap-6 p-6 pl-6 rounded-t-lg bg-gray-100 ">
            <div className="flex flex-col items-start gap-2">
              <span className="text-3xl font-bold text-blue-950 ">
                2000 TND
              </span>
              <p className="text-xl font-light">
                +{" "}
                <span className="text-white text-sm animate-pulse bg-blue-950 px-8 py-1 rounded-full ">
                  FREE
                </span>{" "}
              </p>
              <span className="text-gray-800 rounded-r-full bg-gradient-to-r p-4 from-yellow-400 to-red-500">
                GERMAN A1 - B1
              </span>
            </div>
            <button
              onClick={() => navigate("/enroll")}
              className=" transition duration-1000 border-blue-800 border-[1px] hover:bg-violet-800 hover:text-white text-blue-800 w-[12rem] py-3">
              Enroll Now
            </button>
          </div>

          <div className="flex flex-col items-start gap-6 p-8">
            <div className="flex items-center justify-center gap-4 ">
              <img className="w-[1.5rem]" src={level} alt="level" />
              <span className="text-sm font-normal text-gray-600">
                {" "}
                All Levels{" "}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <img className="w-[1.5rem]" src={language} alt="llanguage" />
              <span className="text-sm font-normal text-gray-600">English</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <img className="w-[1.5rem]" src={time2} alt="time" />
              <span className="text-sm font-normal text-gray-600">
                {" "}
                {course.duration}{" "}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <img className="w-[1.5rem]" src={date} alt="date" />
              <span className="text-sm font-normal text-gray-600">
                <span className="text-xs">
                  Start Date: <br />{" "}
                </span>
                <span className="text-gray-800">August 5,2024</span>
              </span>
            </div>
          </div>
          <hr />
          <div className="px-8 py-4 flex flex-col gap-4">
            <h1 className="text-blue-900 font-bold underline underline-offset-2 decoration-1 text-xl">
              Requirements
            </h1>
            <p className="text-gray-600 font-normal text-sm">
              No Prior Technical Knowledge is Required
            </p>
            <p className="text-gray-600 font-normal text-sm">Basic English</p>
            <p className="text-gray-600 font-normal text-sm">Laptop</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default CourseDetails;
