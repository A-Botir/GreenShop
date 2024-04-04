import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";
import Info from "../components/Info";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div className="pb-[100px] pt-1 sm:pb-[50px]">
      <Hero />
      <div className="mb-[100px] mt-8 flex justify-between sm:mb-[50px] sm:mt-4 sm:block">
        <Sidebar />
        <CardList />
      </div>
      <Info />
      <Blog />
    </div>
  );
};

export default Home;
