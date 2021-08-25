import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
        <p className="footer">Maximiliana Carlson &copy; 2021</p>
        <div className="dev-logo-container">
          <a href="https://www.linkedin.com/in/maximiliana-c-66539149/" target="_blank" rel="noreferrer" className="linkedin-logo">
          <AiOutlineLinkedin size={50}/>
          </a>
          <a href="https://github.com/carlsonmr000" target="_blank" rel="noreferrer"className="github-logo">
          <VscGithub size={45}/>
          </a>
        </div>
    </footer>
  );
};

export default Footer;