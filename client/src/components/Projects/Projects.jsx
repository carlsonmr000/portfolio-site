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
      <h1 className="projects-title" id="projects">My Projects</h1>

      <div className="projects-container">
        <div>
          <a href="https://weatherize-app.netlify.app/">
            <img
              src="https://i.ibb.co/0fjyrTM/weather-app.png"
              alt="weather-app"
              border="0"
              className="thing1"
            />
          </a>

          <div className="project-button-container">
            <a href="https://weatherize-app.netlify.app/">
              <button type="button" className="project-site">
                See the site
              </button>
            </a>

            <a href="https://github.com/carlsonmr000/Weatherize">
              
              <button type="button" className="project-code">
                See the code
              </button>
            </a>
          </div>
        </div>

        <div>
          <a href="https://guitar-songbook.netlify.app/">
            <img
              src="https://i.ibb.co/7JVLqjH/guitar-songbook.png"
              alt="guitar-songbook"
              border="0"
              className="thing2"
            />
          </a>
          <div className="project-button-container">
            
            <a href="https://guitar-songbook.netlify.app/">
            <button type="button" className="project-site">
              See the site
            </button>
            </a>

            <a href="https://github.com/carlsonmr000/Guitar-Songbook-"><button type="button" className="project-code">
              See the code
            </button></a>
          </div>
        </div>

        <div>
          <a href="https://laugh-out-loud.netlify.app/">
            <img
              src="https://i.ibb.co/bKX8rNp/laugh-out-loud.png"
              alt="laugh-out-loud"
              border="0"
              className="thing3"
            />
          </a>
          <div className="project-button-container">
         
         <a href="https://laugh-out-loud.netlify.app/"><button type="button" className="project-site">
              See the site
            </button></a>

          <a href="https://github.com/carlsonmr000/Laugh-Out-Loud"><button type="button" className="project-code">
              See the code
            </button></a>

          </div>
        </div>
      </div>
      <hr className="line3" />
    </div>
  );
}
