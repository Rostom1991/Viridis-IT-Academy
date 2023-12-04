import bigData from "/images/big-data.svg";
import cloud from "/images/cloud-computing.svg";
import testing from "/images/testing.svg";
import vr from "/images/vr-ar.svg";
import react from "/images/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCategory, setCategories } from "../redux/academySlice";
import { useEffect } from "react";
import db from "../db.json";
function Categories() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.academy.categories);
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(db.categories));
  }, []);

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-[url('https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] w-full  grid place-content-center  ">
      <div className="lg:back hidden"></div>
      <div className="flex lg:flex-row gap-20 lg:gap-0 flex-col items-start py-16 justify-around lg:gap-x-8  w-5/6  mx-auto ">
        <section className="flex flex-col lg:pt-12 items-start  justify-center lg:w-1/3 gap-8 z-20">
          <h1 className="lg:text-4xl text-2xl text-blue-950 font-semibold">
            Browse By <span className="text-blue-500">Category</span>
          </h1>
          <p className="text-gray-500 font-light">
            Discover a spectrum of tech education at our Viridis IT-School,
            effortlessly sorted into key categories: Cloud, Data Science,
            Testing, Virtual Reality, and Web Development. Delve into Cloud for
            scalable innovations, Data Science for insightful exploration,
            Testing for precision, Virtual Reality for immersive experiences,
            and Web Development for mastering digital landscapes. Each category
            opens doors to expertise in transformative tech realms.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 uppercase tracking-wider hover:bg-blue-700 p-4 w-1/2 rounded text-white">
            Join
          </button>
        </section>

        <section className="grid  place-content-center gap-10  p-3  justify-items-center px-2 h-full w-full  lg:w-2/3 lg:min-h-fit">
          <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:ml-32 lg:mb-16 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} to={`/category/${category.name}`}>
                <div
                  onClick={() => dispatch(selectCategory(category))}
                  className={`w-[13rem] h-[13rem] rounded-lg px-2 bg-blue-100 flex flex-col items-center justify-center gap-4 ${
                    index < 4 ? "col-span-1" : "col-span-3" // Adjust col-span based on row position
                  }`}>
                  <div className="bg-white rounded-full p-4 h-16 w-16">
                    <img className="w-fit" src={category.icon} alt="cloud" />
                  </div>
                  <h1 className="text-md text-blue-950 font-semibold">
                    {category.name}
                  </h1>
                  <span className="text-gray-500">5 Course</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Categories;
