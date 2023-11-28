import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import category from "/images/category.svg";
import arrow from "/images/arroww.svg";
import logo from "/images/VSLogo.png";
import { selectCategory } from "../redux/academySlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import phone from "/images/phone.svg";

const Navbar = () => {
  const categories = useSelector((state) => state.academy.categories);
  const connected = useSelector((state) => state.user.connected);
  const userEmail = useSelector((state) => state.user.email);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [pagesDrop, setPagesDrop] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropDown(!dropdown);
  };

  console.log("dropdown", dropdown);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      onMouseLeave={() => setDropDown(false)}
      className=" bg-[#F1F1F8]  px-8 fixed top-0 w-full z-30 ">
      {/* <div className="back"></div> */}

      <div className="  flex items-center py-4 justify-between md:pr-0 pr-16 ">
        <section className=" flex items-center gap-24 ">
          <Link
            to="/"
            className="flex w-[10rem] p-6 items-center overflow-hidden relative ">
            <img className=" absolute " src={logo} alt="logo" />
          </Link>

          <div className="hidden md:flex items-center  gap-6  space-x-4">
            <Link to="/" className="text-gray-700  hover:text-blue-500">
              Home
            </Link>
            <div>
              <a
                onMouseEnter={() => setPagesDrop(true)}
                href="#"
                className="text-gray-700  hover:text-blue-500">
                Pages
              </a>
              {pagesDrop && (
                <div
                  className="bg-white border-gray-300 border-[0.5px] absolute top-16 flex flex-col items-start  w-[11rem] text-sm font-light text-blue-950 rounded"
                  onMouseLeave={() => setPagesDrop(false)}>
                  <span
                    onClick={() => navigate("/about")}
                    className="hover:cursor-pointer hover:text-white w-full h-full pl-4 py-4  hover:bg-blue-600 transition-colors duration-500">
                    About us
                  </span>
                  <span
                    onClick={() => navigate("/instructors")}
                    className="hover:cursor-pointer hover:text-white w-full h-full pl-4 py-4  hover:bg-blue-600 transition-colors duration-500">
                    Our Intructors
                  </span>
                </div>
              )}
            </div>
            <Link to="/courses" className="text-gray-700  hover:text-blue-500">
              Courses
            </Link>
            <Link to="/contact" className="text-gray-700  hover:text-blue-500">
              Contact
            </Link>
            <div>
              <div
                onClick={() => setDropDown(!dropdown)}
                className=" flex gap-2 items-center justify-center  border-gray-300 border-[0.5px] px-4 py-2 rounded-full">
                <img className="w-[1rem]" src={category} alt="category" />
                <button className="text-gray-700 hover:text-blue-500">
                  Categories
                </button>
                <img className="w-[1rem] rotate-180" src={arrow} alt="arrow" />
              </div>
              {dropdown && (
                <div
                  className={` ${
                    dropdown ? "opacity-100 " : "opacity-50 pointer-events-none"
                  }   duration-700 ease-linear transition-opacity delay-1000 z-20 absolute mt-2 bg-white w-[11rem]  rounded border-[0.5px] border-gray-300 shadow-sm shadow-gray-50`}>
                  <ul className="flex flex-col text-gray-700 font-[350] text-sm relative">
                    {categories.map((item) => (
                      <Link
                        to={`/category/${item.name}`}
                        key={item.id}
                        onClick={() => {
                          dispatch(selectCategory(item));
                        }}
                        className="hover:text-white hover:bg-blue-500 w-full h-full p-3 ">
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className=" gap-8 items-center hidden md:flex">
            <div className="md:flex bg-gray-300 px-4 py-1 rounded-full gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  className="w-[1rem]"
                  src="/images/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  className="  w-[1.1rem]"
                  src="/images/facebook.svg"
                  alt="facebook"
                />
              </a>
            </div>
            <div className="flex gap-1 items-center">
              <img className="w-[1rem]" src={phone} />
              <span className="text-xs">+216-20-123-456</span>
            </div>

            {connected ? (
              <div className="flex items-center gap-8">
                <span className="bg-blue-950 text-white py-1 px-4 text-xs rounded-full">
                  {userEmail}
                </span>
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                  className="cursor-pointer p-3 text-xs tracking-wide uppercase bg-white/50 w-24 rounded-sm border border-gray-400 text-red-500 hover:bg-red-600 transition duration-300 ease-linear delay-100 hover:text-white">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="cursor-pointer uppercase p-3 text-xs tracking-wide bg-blue-950 w-24 rounded-sm text-white hover:bg-blue-700 transition duration-300 ease-linear delay-100 ">
                  Login
                </button>
              </Link>
            )}
          </div>
        </section>
        <div className="md:hidden">
          <button
            className="text-white  focus:outline-none"
            onClick={toggleMenu}>
            {isOpen ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#000000"
                  d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
                />
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className=" pb-2 md:hidden mt-2">
          <Link to="/" className="block text-gray-700  py-2 px-4">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700  py-2 px-4">
            About
          </Link>

          <Link to="/courses" className="block text-gray-700  py-2 px-4">
            Courses
          </Link>
          <Link to="/instructors" className="block text-gray-700  py-2 px-4">
            Instructors
          </Link>
          <Link to="/contact" className="block text-gray-700  py-2 px-4">
            Contact
          </Link>
          <div>
            <div
              onClick={toggleDropdown}
              className=" w-fit flex gap-2 items-center justify-center  px-4 py-2 rounded-full">
              {/* <img className="w-[1rem]" src={category} alt="category" /> */}
              <button className="text-gray-700  hover:text-blue-500">
                Categories
              </button>
              <img className="w-[1rem] rotate-180" src={arrow} alt="arrow" />
            </div>
            {dropdown && (
              <div
                onBlur={() => setDropDown(!dropdown)}
                className="z-20 absolute mt-2 bg-white p-6 rounded border-[0.5px] border-gray-300 shadow-sm shadow-gray-50 ">
                <ul className="flex flex-col gap-4 text-gray-700 font-[350] text-sm">
                  {categories.map((item) => (
                    <Link
                      to={`/category/${item.name}`}
                      key={item.id}
                      onClick={() => {
                        dispatch(selectCategory(item));
                      }}
                      className="hover:text-blue-800">
                      {item.name}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* <input
            className=" text-sm font-light py-2 pl-4 w-[15rem] outline-none rounded-sm border-none"
            type="text"
            placeholder="Search For Course.."
          /> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
