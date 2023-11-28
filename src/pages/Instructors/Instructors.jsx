import { useEffect } from "react";
import arrow from "/images/arroww.svg";
import { motion } from "framer-motion";

function Instructors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="  mt-20 w-full h-[60vh] bg-fixed bg-center bg-blend-multiply bg-yellow-950/75   bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
        <div className="container flex flex-col justify-center pl-36 gap-4 h-full">
          <motion.h1
            initial={{ y: "-3vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className=" text-white font-bold text-5xl">
            Our Instructors
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
            <span className="text-gray-400">Top Class Instructors</span>
          </div>
        </div>
      </section>
      <section className=" py-24 bg-no-repeat bg-cover bg-center bg-white/50  bg-blend-overlay bg-[url('https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
        <div className="grid md:grid-cols-2 gap-10 md:w-[70%] w-[90%] mx-auto mt-auto">
          {/* Card */}
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-gray-50/40 rounded ">
            <img
              className="w-full h-full rounded-xl object-cover  p-2 "
              src="https://img.freepik.com/free-photo/portrait-male-professor-teaching-school_23-2150911623.jpg?t=st=1700062535~exp=1700066135~hmac=1c277c9b1afc5e91e8f0d24066bcdb59bec56d7b432759eb641a5ae8c4e52b5c&w=1060"
              alt="
              Web Developer"
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">Web Developer</span>
              <span className="text-blue-950 text-lg font-medium">
                John Doe
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-[rgb(245,245,253)] rounded ">
            <img
              className="w-full h-full rounded-xl object-cover p-2 "
              src="https://img.freepik.com/free-photo/beautiful-every-day-make-up-look_181624-21819.jpg?w=996&t=st=1699980217~exp=1699980817~hmac=b43e0ed4570fafd9dacd5080330c24dac9ee0026d67b4363537eec6de3b4fd83"
              alt="Game Developer"
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">Game Developer</span>
              <span className="text-blue-950 text-lg font-medium">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-gray-50/40 rounded ">
            <img
              className="w-full h-full rounded-xl object-cover  p-2 "
              src="https://img.freepik.com/free-photo/portrait-male-professor-teaching-school_23-2150911623.jpg?t=st=1700062535~exp=1700066135~hmac=1c277c9b1afc5e91e8f0d24066bcdb59bec56d7b432759eb641a5ae8c4e52b5c&w=1060"
              alt="Azure Instructor"
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">Azure Instructor</span>
              <span className="text-blue-950 text-lg font-medium">
                John Doe
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-[rgb(245,245,253)] rounded ">
            <img
              className="w-full h-full rounded-xl object-cover p-2 "
              src="https://img.freepik.com/free-photo/beautiful-every-day-make-up-look_181624-21819.jpg?w=996&t=st=1699980217~exp=1699980817~hmac=b43e0ed4570fafd9dacd5080330c24dac9ee0026d67b4363537eec6de3b4fd83"
              alt="DevOps Engineer"
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">DevOps Engineer</span>
              <span className="text-blue-950 text-lg font-medium">
                Jane Doe
              </span>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-gray-50/40 rounded ">
            <img
              className="w-full h-full rounded-xl object-cover  p-2 "
              src="https://img.freepik.com/free-photo/portrait-male-professor-teaching-school_23-2150911623.jpg?t=st=1700062535~exp=1700066135~hmac=1c277c9b1afc5e91e8f0d24066bcdb59bec56d7b432759eb641a5ae8c4e52b5c&w=1060"
              alt="Testing Senior"
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">Testing Senior</span>
              <span className="text-blue-950 text-lg font-medium">
                John Doe
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-[rgb(245,245,253)] rounded ">
            <img
              className="w-full h-full rounded-xl object-cover p-2 "
              src="https://img.freepik.com/free-photo/beautiful-every-day-make-up-look_181624-21819.jpg?w=996&t=st=1699980217~exp=1699980817~hmac=b43e0ed4570fafd9dacd5080330c24dac9ee0026d67b4363537eec6de3b4fd83"
              alt="VR Specialist"
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">VR Specialist</span>
              <span className="text-blue-950 text-lg font-medium">
                Jane Doe
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-gray-50/40 rounded ">
            <img
              className="w-full h-full rounded-xl object-cover  p-2 "
              src="https://img.freepik.com/free-photo/portrait-male-professor-teaching-school_23-2150911623.jpg?t=st=1700062535~exp=1700066135~hmac=1c277c9b1afc5e91e8f0d24066bcdb59bec56d7b432759eb641a5ae8c4e52b5c&w=1060"
              alt=""
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">AWS Instructor</span>
              <span className="text-blue-950 text-lg font-medium">
                John Doe
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col  items-center justify-center p-2 border-gray-300 border-2 hover:shadow-2xl hover:shadow-gray-400 transition-all ease-in-out duration-1000  hover:scale-[1.01]  bg-[rgb(245,245,253)] rounded ">
            <img
              className="w-full h-full rounded-xl object-cover p-2 "
              src="https://img.freepik.com/free-photo/beautiful-every-day-make-up-look_181624-21819.jpg?w=996&t=st=1699980217~exp=1699980817~hmac=b43e0ed4570fafd9dacd5080330c24dac9ee0026d67b4363537eec6de3b4fd83"
              alt=""
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">Data Scientist</span>
              <span className="text-blue-950 text-lg font-medium">
                Jane Doe
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Instructors;
