import AllProjectsList from "../components/AllProjectsList.jsx";
import FadeIn from "../components/FadeIn.jsx";

const AllProjects = () => {
  return (
    <FadeIn>
      <main className="mt-[20vh]">
        <div className="fixed top-0 w-full bg-[#fafafa] h-[20vh] z-50"></div>
        <div className="fixed grid grid-cols-2 lg:grid-cols-3 px-[25px] text-[#242424] uppercase w-full bg-[#fafafa] text-base z-50">
          <p className="text-left">Proyecto</p>
          <p className="text-left hidden lg:block">Lugar</p>
          <div className="flex justify-end lg:grid lg:grid-cols-3">
            <p className="text-left hidden lg:block">Superficie</p>
            <p className="text-left hidden lg:block">Tipología</p>
            <p className="text-right">Año</p>
          </div>
          <hr className="col-span-3 h-[1px] bg-[#adadad] border-0 rounded dark:bg-[#242424] translate-y-[-1px]" />
        </div>
        <AllProjectsList />
      </main>
    </FadeIn>
  );
};

export default AllProjects;
