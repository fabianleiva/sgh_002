import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Loader from "./components/Loader";
import Landing from "./views/Landing";
import SelectedProjects from "./views/SelectedProjects";
import AllProjects from "./views/AllProjects";
import ProjectGallery from "./components/ProjectGallery";
import Office from "./views/Office";
import Media from "./views/Media";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";

function App() {
  const [appReady, setAppReady] = useState(() => {
    return sessionStorage.getItem("sgh-loaded") === "true";
  });

  const handleLoaderDone = () => {
    sessionStorage.setItem("sgh-loaded", "true");
    setAppReady(true);
  };

  return (
    <>
      {!appReady && <Loader onDone={handleLoaderDone} />}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/selected" element={<SelectedProjects />} />
        <Route path="/projects/all" element={<AllProjects />} />
        <Route
          path="/projects/selected/:projectSlug"
          element={<ProjectGallery />}
        />
        <Route path="/media/:mediaState" element={<Media />} />
        <Route path="/office" element={<Office />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
