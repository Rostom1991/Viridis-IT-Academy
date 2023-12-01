import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const user = { name, email, phone, message };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://viridis-it-academy-api.vercel.app/contact", user)
      .then((response) => {
        setError(false);
        setTimeout(() => {
          setSuccess(response.data.message);
        }, 1000);
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };
  return (
    <div className="mt-20">
      <div className="lg:h-[50vh] h-[40vh] bg-no-repeat bg-center bg-fixed flex bg-blend-multiply bg-black/50 items-center justify-center bg-cover bg-[url('https://img.freepik.com/free-photo/freelance-young-asian-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3022.jpg?w=1380&t=st=1699988756~exp=1699989356~hmac=189a2ebfe352ec0d0fbc4be822b85b183ccc69b39c4e7b6dc07136c0808e518b')] ">
        <motion.h1
          initial={{ y: "-3vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className=" text-zinc-200 font-semibold uppercase text-5xl lg:text-6xl tracking-wider">
          Contact
        </motion.h1>
      </div>
      <section className="">
        <div className="grid  lg:grid-cols-2 lg:w-10/12 lg:mx-auto bg-gray-50 border-2 rounded-sm p-10 lg:my-10">
          <div className=" flex flex-col lg:px-8 py-4 justify-start w-full gap-6">
            <h1 className="text-blue-950 font-semibold tracking-wider text-2xl uppercase">
              Contact Information
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-gray-800">Email:</span>
              <span className="text-sm text-gray-800">
                viridisitschool@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-800">Phone:</span>
              <span className="text-sm text-gray-800">+216-20-123-456</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-800">Address:</span>
              <span className="text-sm text-gray-800">
                Street 123 Monplaisir, Tunis, Tunisia
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              className=" p-8 rounded shadow-lg max-w-md w-full">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium  text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full outline-gray-300 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full outline-gray-300 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 p-2 w-full outline-gray-300 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="mt-1 p-2 outline-gray-300 w-full border rounded-md"></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 uppercase text-white px-8 text-sm p-2 rounded-md hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
              <div className="pt-3 flex justify-start w-full">
                {(error && (
                  <span className="text-sm bg-white  px-4 py-1 text-red-600 font-medium">
                    {" "}
                    {error}{" "}
                  </span>
                )) ||
                  (success && (
                    <span className="text-sm bg-white  px-4 py-1 text-cyan-600 font-medium">
                      {success}{" "}
                    </span>
                  ))}
              </div>
            </form>
          </div>
          <div className="w-full border-4 h-[30rem] lg:h-[98%] shadow-xl rounded ">
            <iframe
              className="w-full border-4 h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12776.821589196199!2d10.176836204560345!3d36.81359773477388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd348a1d86d3bb%3A0x9d8b5f984edebc84!2sMontplaisir%2C%20Tunis!5e0!3m2!1sen!2stn!4v1700061144478!5m2!1sen!2stn"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
