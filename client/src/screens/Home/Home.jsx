import Landing from "../../components/Landing/Landing.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Resume from "../../components/Resume/Resume.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import "./Home.css";

export default function Home({ user }) {
  return (
    <div className="home">
      <Landing />
      <AboutMe />
      <Skills />
      <Projects user={user} />
      <Resume />
      <Contact />
    </div>
  );
}
