import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);
  const [publications, setPublications] = useState([]);
  const projectsApiUrl =
    "https://new.mnaa.cl/wp-json/wp/v2/projects?acf_format=standard&_fields=id,title,slug,acf&per_page=100";

  const newsApiUrl =
    "https://new.mnaa.cl/wp-json/wp/v2/news?acf_format=standard&_fields=id,acf&per_page=100";

  const publicationsApiUrl =
    "https://new.mnaa.cl/wp-json/wp/v2/publications?acf_format=standard&_fields=id,acf&per_page=100";

  const getAllProjects = async () => {
    try {
      const response = await axios.get(projectsApiUrl);
      const posts = response.data;
      setProjects(posts);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAllNews = async () => {
    try {
      const response = await axios.get(newsApiUrl);
      const news = response.data;
      setNews(news);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAllPublications = async () => {
    try {
      const response = await axios.get(publicationsApiUrl);
      const publications = response.data;
      setPublications(publications);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllProjects();
    getAllNews();
    getAllPublications();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        projects,
        setProjects,
        news,
        setNews,
        publications,
        setPublications,
        projectsApiUrl,
        newsApiUrl,
        publicationsApiUrl,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
