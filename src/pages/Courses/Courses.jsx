import arrow from "/images/arroww.svg";
import people from "/images/people.svg";
import book from "/images/book.svg";
import time from "/images/time.svg";
import page from "/images/page.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  filterCategories,
  searchQuery,
  selectCourse,
} from "../../redux/academySlice";
function Courses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const categories = useSelector((state) => state.academy.categories);
  console.log(categories);
  const searchCourse = useSelector((state) => state.academy.search);
  console.log("search", searchCourse);

  const filteredCategories = useSelector(
    (state) => state.academy.filteredCategories
  );

  const [next, setNext] = useState(false);
  const [inputCategory, setInputCategory] = useState(false);
  const [animate, setAnimate] = useState({ opacity: 0 });
  const [search, setSearch] = useState(false);
  const searchRef = useRef();

  let backgroundClass = "";
  const backGround = (category) => {
    switch (category) {
      case "Cloud":
        backgroundClass = "bg-green-200 text-green-800";
        break;
      case "Data Science":
        backgroundClass = "bg-blue-200 text-blue-800";
        break;
      case "Virtual Reality":
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
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(filterCategories([]));
    setInputCategory(false);
  }, [location.pathname]);
  // console.log("refresh", filteredCategories);

  const handleCourse = (course) => {
    dispatch(selectCourse(course));
    navigate(`/courses/${course.title}`);
  };
  const nextPage = () => {
    setNext(true);
    setAnimate({ opacity: 0 });
  };
  const previousPage = () => {
    setNext(false);
    setAnimate({ opacity: 0 });
  };
  const handleCategory = (category) => {
    dispatch(filterCategories(category));
    setInputCategory(true);

    // console.log(filteredCategories.length);
  };
  const handleSearch = (e) => {
    if (e.target.value != "") {
      setSearch(true);
      dispatch(searchQuery(e.target.value));
    } else {
      setSearch(false);
    }
    console.log(e.target.value);
  };

  return (
    <div className=" ">
      <section className="  mt-20 w-full h-[60vh] bg-fixed bg-center bg-blend-multiply bg-black/75  bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1507537509458-b8312d35a233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] ">
        <div className="container flex flex-col justify-center pl-36 gap-4 h-full">
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
            <span className="text-gray-400">Courses</span>
          </div>
        </div>
      </section>
      <div className="back2"></div>
      <section className=" pb-12 px-16 z-20  ">
        <div className="flex flex-col gap-8 font-light leading-loose py-32 text-gray-700 w-10/12 mx-auto">
          <p>
            <span className="text-blue-950 text-2xl">At Viridis-IT School</span>
            , we offer a diverse array of courses meticulously crafted to meet
            the demands of the ever-evolving tech industry. Our comprehensive
            curriculum covers a spectrum of cutting-edge disciplines, empowering
            our students to thrive in the digital landscape.
          </p>
          <p>
            <span className="text-cyan-700 font-semibold text-xl">
              Cloud Mastery:
            </span>{" "}
            Dive into the world of Cloud Computing and harness the power of
            scalable, flexible, and secure infrastructure. From AWS to Azure,
            our courses equip you with the skills to navigate and leverage cloud
            technologies efficiently.
          </p>
          <p>
            <span className="text-cyan-700 font-semibold text-xl">
              Web Development Wonders:{" "}
            </span>{" "}
            Unleash your creativity and technical prowess through our Web
            Development courses. Whether you're diving into frontend magic with
            HTML, CSS, and JavaScript or exploring backend complexities with
            Node.js, Python, and databases, we've got you covered.
          </p>
          <p>
            <span className="text-cyan-700 font-semibold text-xl">
              Data Science Unveiled:
            </span>{" "}
            Decode the language of data through our Data Science courses. From
            mastering statistical analysis and machine learning algorithms to
            extracting insights that drive decisions, our curriculum propels you
            into the realm of data-driven innovation.
          </p>
          <p>
            <span className="text-cyan-700 font-semibold text-xl">
              Virtual Reality Adventures:
            </span>{" "}
            Step into the realm of Virtual Reality where imagination meets
            technology. Our courses immerse you in the creation of immersive
            experiences, blending design, coding, and storytelling to craft
            captivating virtual worlds.
          </p>
          <p>
            <span className="text-cyan-700 font-semibold text-xl">
              Testing Excellence:
            </span>{" "}
            Ensure flawless software performance through our Testing courses.
            Learn the art of meticulous testing methodologies, automation, and
            quality assurance to deliver software that exceeds expectations.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-5/6 mx-auto h-full ">
          <leftSection className="flex flex-col gap-8 lg:w-1/3">
            <input
              ref={searchRef}
              onChange={(e) => handleSearch(e)}
              className=" lg:w-2/3 border-2 rounded border-gray-300 h-8 pl-4 outline-none font-light p-4 text-sm"
              type="text"
              placeholder="Search.."
            />
            <div className="lg:w-2/3 mb-8 lg:mb-auto flex flex-col gap-8  bg-white rounded shadow-lg py-8 px-6 shadow-gray-200">
              <h1 className="text-xl text-blue-950 underline decoration-4 underline-offset-4 decoration-blue-500">
                Categories
              </h1>
              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex gap-2">
                    <input
                      onChange={() => handleCategory(category)}
                      type="checkbox"
                    />
                    <span className="text-gray-600 font-light tracking-tight">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </leftSection>
          <rightSection className="w-[90%]">
            <div className="grid lg:grid-cols-3 gap-8 ">
              {/* CARD */}
              {search &&
                searchCourse.map((course) => (
                  <motion.div
                    key={course.id}
                    initial={animate}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="p-4 flex flex-col h-fit  gap-4 border-gray-300 rounded border-[1px]">
                    <div className=" h-[15rem] rounded ">
                      {console.log(course.id)}
                      <img
                        className="h-full w-full rounded object-cover"
                        src={course.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col h-1/2 gap-3">
                      <span
                        className={`${backGround(
                          course.category
                        )} ${backgroundClass} py-1 px-2 w-fit rounded-full text-xs`}>
                        {course.category}
                      </span>
                      <h1 className="text-blue-950 font-semibold">
                        {course.title}
                      </h1>
                      <div className="flex  items-center justify-center">
                        <div className="flex gap-1 items-center">
                          <img className="w-1/3" src={book} alt="" />
                          <span className="text-sm font-light text-gray-500">
                            16
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <img className="w-1/3" src={time} alt="" />
                          <span className="text-sm font-light text-gray-500">
                            19h
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <img className="w-1/3" src={people} alt="" />
                          <span className="text-sm font-light text-gray-500">
                            5
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>900$</span>
                        <button
                          onClick={() => handleCourse(course)}
                          className="bg-white cursor-pointer hover:bg-blue-950 hover:text-white border-sky-700 shadow-cyan-800 shadow-sm border-[1px] rounded-sm text-blue-950 text-sm font-light p-3">
                          Check It Out
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              {inputCategory && filteredCategories.length > 0
                ? filteredCategories.map((category) =>
                    category.courses.map((course) => (
                      <motion.div
                        key={course.id}
                        initial={animate}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="p-4 flex flex-col h-fit  gap-4 border-gray-300 rounded border-[1px]">
                        <div className=" h-[15rem] rounded ">
                          {console.log(course.id)}
                          <img
                            className="h-full w-full rounded object-cover"
                            src={course.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col h-1/2 gap-3">
                          <span
                            className={`${backGround(
                              course.category
                            )} ${backgroundClass} py-1 px-2 w-fit rounded-full text-xs`}>
                            {course.category}
                          </span>
                          <h1 className="text-blue-950 font-semibold">
                            {course.title}
                          </h1>
                          <div className="flex  items-center justify-center">
                            <div className="flex gap-1 items-center">
                              <img className="w-1/3" src={book} alt="" />
                              <span className="text-sm font-light text-gray-500">
                                16
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <img className="w-1/3" src={time} alt="" />
                              <span className="text-sm font-light text-gray-500">
                                19h
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <img className="w-1/3" src={people} alt="" />
                              <span className="text-sm font-light text-gray-500">
                                5
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>900$</span>
                            <button
                              onClick={() => handleCourse(course)}
                              className="bg-white cursor-pointer hover:bg-blue-950 hover:text-white border-sky-700 shadow-cyan-800 shadow-sm border-[1px] rounded-sm text-blue-950 text-sm font-light p-3">
                              Check It Out
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )
                : !search &&
                  categories.map((category, index) =>
                    category.courses.map((course) => (
                      <motion.div
                        initial={animate}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        key={course.id}
                        className={` ${
                          (index < 2 && !next) || (index > 2 && next)
                            ? "p-4 flex flex-col h-fit  gap-4 border-gray-300 rounded border-[1px]"
                            : "hidden"
                        }  `}>
                        <div className=" h-[15rem] rounded ">
                          <img
                            className="h-full w-full rounded object-cover"
                            src={course.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col h-1/2 gap-3">
                          <span
                            className={`${backGround(
                              course.category
                            )} ${backgroundClass} py-1 px-2 w-fit rounded-full text-xs`}>
                            {course.category}
                          </span>
                          <h1 className="text-blue-950 font-semibold">
                            {course.title}
                          </h1>
                          <div className="flex  items-center justify-center">
                            <div className="flex gap-1 items-center">
                              <img className="w-1/3" src={book} alt="" />
                              <span className="text-sm font-light text-gray-500">
                                16
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <img className="w-1/3" src={time} alt="" />
                              <span className="text-sm font-light text-gray-500">
                                19h
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <img className="w-1/3" src={people} alt="" />
                              <span className="text-sm font-light text-gray-500">
                                5
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>900$</span>
                            <button
                              onClick={() => handleCourse(course)}
                              className="bg-white cursor-pointer hover:bg-blue-950 hover:text-white border-sky-700 shadow-cyan-800 shadow-sm border-[1px] rounded-sm text-blue-950 text-sm font-light p-3">
                              Check It Out
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
            </div>
            {!search && (
              <div className="flex  justify-center items-center gap-36 mt-8 ">
                <img
                  onClick={previousPage}
                  src={page}
                  alt="page"
                  className="w-[2rem] rotate-180 cursor-pointer text-red-500"
                />
                <img
                  onClick={nextPage}
                  src={page}
                  alt="page"
                  className="w-[2rem] cursor-pointer"
                />
              </div>
            )}
            {search & (searchCourse.length === 0) ? (
              <h1 className="grid place-content-center text-xl font-bold uppercase text-gray-500">
                No courses found!
              </h1>
            ) : null}
          </rightSection>
        </div>
      </section>
    </div>
  );
}

export default Courses;
