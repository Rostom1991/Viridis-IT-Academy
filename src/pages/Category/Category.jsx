import arrow from "/images/arroww.svg";
import people from "/images/people.svg";
import book from "/images/book.svg";
import time from "/images/time.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCourse } from "../../redux/academySlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Category() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const category = useSelector((state) => state.academy.selectedCategory);
  console.log(category);
  let backgroundClass = "";

  switch (category.name) {
    case "Cloud":
      backgroundClass = "bg-green-200 text-green-800";
      break;
    case "Data Science":
      backgroundClass = "bg-blue-200 text-blue-800";
      break;
    case "Virtual Reality (VR)":
      backgroundClass = "bg-red-200 text-red-800";
      break;
    case "Testing":
      backgroundClass = "bg-purple-200 text-purple-800";
      break;
    case "Web Development":
      backgroundClass = "bg-yellow-200 text-yellow-800";
      break;
    default:
      backgroundClass = "bg-gray-200";
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" ">
      <section className="  mt-20 w-full h-[60vh] bg-fixed bg-center bg-blend-multiply bg-black/75  bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1507537509458-b8312d35a233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] ">
        <div className="container flex flex-col justify-center pl-20 lg:pl-36 gap-4 h-full">
          <motion.h1
            initial={{ y: "-3vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className=" text-white font-bold text-5xl">
            Courses
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
            <span className="text-gray-400">{category.name} </span>
          </div>
        </div>
      </section>
      {/* <div className="back2 bg-gradient-to-r from-white to-black/75"></div> */}
      <section className="grid place-content-start gap-16 lg:py-24 w-[65%] mx-auto ">
        <div className="flex flex-col lg:py-auto py-8 gap-8 ">
          <h1
            className={`lg:text-3xl text-xl w-fit px-8 py-2 rounded-full uppercase ${backgroundClass}`}>
            {" "}
            {category.name}{" "}
          </h1>
          <p className="text-gray-600 leading-loose">
            {" "}
            {category.introduction}{" "}
          </p>
        </div>
        <div className="grid lg:grid-cols-3  pb-8 gap-8 ">
          {/* CARD */}
          {category.courses.map((course) => (
            <div
              key={course.id}
              className=" hover:shadow-2xl ease-linear duration-300 p-4 flex flex-col h-fit  gap-4 border-gray-300 rounded border-[1px]">
              <div className="h-[15rem] rounded ">
                <img
                  className="h-full w-full rounded object-cover"
                  src={course.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col h-1/2 gap-3">
                <span
                  className={` ${backgroundClass}   w-fit  py-1 px-2 rounded-full text-xs`}>
                  {course.category}
                </span>
                <h1 className="text-blue-950 font-semibold max-w-[15rem] h-[3rem]">
                  {course.title}
                  {/* Become a Certified Cloud Specialist */}
                </h1>
                <div className="flex  items-center justify-center">
                  <div className="flex gap-1 items-center">
                    <img className="w-1/3" src={book} alt="" />
                    <span className="text-sm font-light text-gray-500">16</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img className="w-1/3" src={time} alt="" />
                    <span className="text-sm font-light text-gray-500">
                      19h
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img className="w-1/3" src={people} alt="" />
                    <span className="text-sm font-light text-gray-500">5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>900$</span>
                  <button
                    onClick={() => {
                      dispatch(selectCourse(course));
                      console.log("course", course);
                      navigate(`/courses/${course.title}`);
                    }}
                    className="bg-white hover:bg-blue-950  duration-700 hover:text-white border-sky-700 shadow-cyan-800 shadow-sm border-[1px] rounded-sm text-blue-950 text-sm font-light p-3">
                    Check It Out
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Category;

// <div className="p-4 flex flex-col h-fit  gap-4 border-gray-300 rounded border-[1px]">
//               <div className="h-[15rem] rounded ">
//                 <img
//                   className="h-full w-full rounded object-cover"
//                   src="https://t4.ftcdn.net/jpg/02/19/97/71/360_F_219977199_H4YRCfCvo90tYvHigf53ZWFpFiNexbW5.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="flex flex-col h-1/2 gap-3">
//                 <span className="bg-green-200 w-fit text-green-700 py-1 px-2 rounded-full text-xs">
//                   Cloud
//                 </span>
//                 <h1 className="text-blue-950 font-semibold max-w-[10rem]">
//                   Become a Certified Cloud Specialist
//                 </h1>
//                 <div className="flex  items-center justify-center">
//                   <div className="flex gap-1 items-center">
//                     <img className="w-1/3" src={book} alt="" />
//                     <span className="text-sm font-light text-gray-500">
//                       16
//                     </span>
//                   </div>
//                   <div className="flex gap-1 items-center">
//                     <img className="w-1/3" src={time} alt="" />
//                     <span className="text-sm font-light text-gray-500">
//                       19h
//                     </span>
//                   </div>
//                   <div className="flex gap-1 items-center">
//                     <img className="w-1/3" src={people} alt="" />
//                     <span className="text-sm font-light text-gray-500">
//                       5
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span>900$</span>
//                   <button className="bg-white hover:bg-blue-950 hover:text-white border-sky-700 shadow-cyan-800 shadow-sm border-[1px] rounded-sm text-blue-950 text-sm font-light p-3">
//                     Check It Out
//                   </button>
//                 </div>
//               </div>
//             </div>
