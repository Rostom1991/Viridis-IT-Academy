import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-[#F1F1F8] w-full p-8 mt-10   shadow border-t-2   bottom-0 ">
      <div className="grid grid-cols-4">
        <div className="col-span-1 rounded-full grid place-content-center">
          <img
            className="w-[8rem] rounded-full scale-150"
            src="/images/VSLogo.png"
            alt="logo"
          />
        </div>
        <div className="flex col-span-3 items-center justify-evenly">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              About
            </Link>
            <Link
              to="/instructors"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Instructors
            </Link>
            <Link
              to="/courses"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Courses
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/contact"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Contact
            </Link>
            <Link
              to="/login"
              className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Join
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-500 hover:text-gray-800">
              +216-54-645-625
            </span>
            <span className="text-gray-500 hover:text-gray-800">
              viridisit-school@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
