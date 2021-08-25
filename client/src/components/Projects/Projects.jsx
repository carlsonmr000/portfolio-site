import { getAllProjects } from "../../services/projects";
import { useState, useEffect } from "react";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
import "./Projects.css";

export default function Projects({ user }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);
  return (
    <div id="projects-parent">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">
      <div>
      <a href="https://ibb.co/xMSq6Wj"><img src="https://i.ibb.co/0fjyrTM/weather-app.png" alt="weather-app" border="0" className="thing"/></a>  
    
      <div className="project-button-container">
      <button type="button" className="project-site">
            See the site
          </button>

          <button type="button" className="project-code">
            See the code
          </button>

      </div>
          
          </div>

      <div>

      <a href="https://ibb.co/GvkNqnX"><img src="https://i.ibb.co/7JVLqjH/guitar-songbook.png" alt="guitar-songbook" border="0" className="thing"/></a>
      <div className="project-button-container">
      <button type="button" className="project-site">
            See the site
          </button>

          <button type="button" className="project-code">
            See the code
          </button>

      </div>

      </div>

      <div>
      <a href="https://ibb.co/QKM16Ys"><img src="https://i.ibb.co/bKX8rNp/laugh-out-loud.png" alt="laugh-out-loud" border="0" className="thing"/></a>
      <div className="project-button-container">
      <button type="button" className="project-site">
            See the site
          </button>

          <button type="button" className="project-code">
            See the code
          </button>

      </div>
      </div>

      </div>
      <hr className="line3" />


    </div>
  );
}