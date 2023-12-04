import { useEffect } from "react";
import arrow from "/images/arroww.svg";
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="  mt-20 w-full md:h-[60vh] h-[50vh] bg-fixed bg-bottom bg-blend-multiply bg-blue-950/80   bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
        <div className="container flex flex-col justify-center md:pl-36 pl-32 gap-4 h-full">
          <motion.h1
            initial={{ y: "-3vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className=" text-white font-bold text-5xl">
            About Us
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
            <span className="text-gray-400">About Us</span>
          </div>
        </div>
      </section>
      <section className="container grid place-content-center md:h-[90vh] relative ">
        <div className=" hidden md:block md:absolute rotate-[-80deg] animate-pulse left-52 top-28   z-0 h-24 w-24 rounded-full  bg-[url('https://img.freepik.com/free-psd/gradient-arrows-design_23-2150390295.jpg?w=740&t=st=1693251226~exp=1693251826~hmac=dbdad375cd2cbbd7daf1428dc34d89a24c13a3d943a1dcd3b1c53f08896baceb')] bg-no-repeat bg-contain bg-center "></div>
        <div className=" hidden md:block md:absolute rotate-[-90deg] right-0 bottom-0 z-0 h-72 w-72  bg-[url('https://img.freepik.com/free-vector/modern-colorful-circle-background_1034-868.jpg?w=740&t=st=1693249223~exp=1693249823~hmac=84c2748aa387afff6130f6e820f7a629d735dcfa1bc8368593f97c375e2fc188')] bg-no-repeat bg-contain bg-center "></div>
        <div className="flex flex-col md:flex md:flex-row justify-center items-start w-full md:gap-36 z-10 ">
          <section className="flex flex-col gap-6 md:p-2 p-10 pt-6 justify-start max-w-lg ">
            <span className="bg-blue-100 text-blue-700 w-fit p-1 px-4 text-sm rounded-lg">
              Who We Are
            </span>
            <h1 className="text-blue-950 font-bold text-4xl max-w-sm">
              The Best <span className="text-blue-600">Academy</span> For
              Learning I.T
            </h1>
            <p className="text-blue-950 font-ntext-lg max-w-md">
              At Viridis IT School, we take pride in nurturing the next
              generation of tech visionaries, arming them with not just
              knowledge but also the adaptability and resilience required to
              thrive in an ever-changing digital era.
            </p>
            <p className="text-gray-500 max-w-md font-light">
              Moreover, our strategic location within Tunisia's vibrant tech
              ecosystem provides students with unique opportunities to engage
              with industry leaders, startups, and tech communities. This
              environment cultivates a spirit of innovation and collaboration,
              empowering our students to contribute meaningfully to the
              ever-evolving tech landscape.
            </p>
          </section>
          {/* <div className="w-72">
            <img
              className="h-full w-full"
              src="https://img.freepik.com/free-vector/modern-colorful-circle-background_1034-868.jpg?w=740&t=st=1693249223~exp=1693249823~hmac=84c2748aa387afff6130f6e820f7a629d735dcfa1bc8368593f97c375e2fc188"
              alt="lines"
            />
          </div> */}
          <section>
            <div className="md:w-72 rounded-lg shadow-2xl shadow-gray-500">
              <img
                className="w-full h-full rounded-lg"
                src="https://images.unsplash.com/photo-1605818205521-60f3ddb40b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
                alt="student"
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default About;
