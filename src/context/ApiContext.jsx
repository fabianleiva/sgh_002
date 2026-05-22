import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const projectsApiUrl =
    "https://api.sgharquitectos.cl/wp/wp-json/wp/v2/projects?acf_format=standard&_fields=id,title,slug,acf&per_page=100";

  const getAllProjects = async () => {
    try {
      const response = await axios.get(projectsApiUrl);
      setProjects(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        projects,
        setProjects,
        projectsApiUrl,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
