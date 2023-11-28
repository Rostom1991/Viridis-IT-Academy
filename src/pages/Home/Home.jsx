import Hero from "../../components/Hero";
import Featured from "../../components/Featured";
import Categories from "../../components/Categories";
import Students from "../../components/Students";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../redux/academySlice";
import db from "../../db.json";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(selectCategory(db.categories[0]));
  }, []);
  return (
    <div>
      <Hero />
      <Featured />
      <Categories />
      <Students />
    </div>
  );
}

export default Home;
