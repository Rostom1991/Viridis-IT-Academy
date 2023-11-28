import { useDispatch, useSelector } from "react-redux";
import book from "/images/book.svg";
import people from "/images/people.svg";
import time from "/images/time.svg";
import { motion } from "framer-motion";
import { selectCategory, selectCourse } from "../redux/academySlice";
import { useEffect } from "react";
import db from "../db.json";
import { useNavigate } from "react-router-dom";
function Featured() {
  const categories = useSelector((state) => state.academy.categories);
  console.log(categories);
  const categoryCourses = useSelector(
    (state) => state.academy.selectedCategory
  );
  const selectedId = useSelector((state) => state.academy.selectedId);
  console.log(categoryCourses);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCourse = (course) => {
    dispatch(selectCourse(course));
    navigate(`/courses/${course.title}`);
  };

  return (
    <motion.div
      initial={{ x: "-300vh" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="  py-12  bg-white w-full mx-auto ">
      <nav className="lg:flex gap-4 px-12 justify-around items-center">
        <h1 className="lg:text-4xl text-3xl text-blue-950">
          Our <span className="text-blue-500">Featured</span> Courses
        </h1>
        <div className="lg:flex-row flex flex-col gap-4 p-4 ">
          {categories.map((item) => (
            <span
              key={item.id}
              onClick={() => dispatch(selectCategory(item))}
              className={` ${
                item.id === selectedId
                  ? "underline underline-offset-8 decoration-blue-400 "
                  : " "
              } cursor-pointer font-light  px-4  py-2`}>
              {item.name}
            </span>
          ))}
        </div>
      </nav>
      <section className="  p-4 grid lg:grid-cols-3  w-11/12 mx-auto items-center px-28  justify-center   gap-8 lg:pt-8">
        {/* CARD */}
        {categoryCourses.courses?.map((course) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            key={course.id}
            className="flex flex-col scale-95 hover:scale-[.958] transition ease-in-out duration-700 hover:shadow-blue-950 bg-gray-50/90  rounded-md relative card-shadow h-[34rem]">
            <div className=" relative overflow-hidden rounded-t-md h-[20rem] ">
              <img src={course.image2} alt="photo" className="h-full w-full" />
            </div>
            <div className="  flex flex-col  justify-start items-start  gap-6  relative py-4 px-8 h-[17rem] ">
              <div className="flex justify-evenly  ">
                <div className="flex gap-1">
                  <img src={book} className="w-[1rem]" />
                  <span>5 lessons</span>
                </div>
                <div className="flex gap-1">
                  <img src={time} className="w-[1rem]" />

                  <span>12 hours</span>
                </div>
                <div className="flex gap-1">
                  <img src={people} className="w-[1rem]" />

                  <span>7 students</span>
                </div>
              </div>
              <section className="gap-2 w-full justify-center  items-start flex flex-col">
                <div className="flex flex-col ">
                  <h1 className="text-blue-950 text-xl">{course.title} </h1>
                  <span className="text-sm">
                    Learn <span className="text-blue-500">{course.title} </span>
                    and more..
                  </span>
                </div>
                <hr />
                <div className=" flex justify-between gap-32 items-center ">
                  <span className="text-xl">1000$</span>
                  <button
                    onClick={() => goToCourse(course)}
                    className="bg-blue-600  font-normal transition duration-500 ease-in-out hover:bg-blue-950 py-3 px-8 rounded  text-white">
                    Details
                  </button>
                </div>
              </section>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}

export default Featured;
