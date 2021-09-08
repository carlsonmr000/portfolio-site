import "./Nav.css";
import { Link } from "react-scroll";


const Nav = () => {
  return (
    <header className="navbar">
      <nav>
        <div>
          <a>
            <Link
              href="/"
              className="item"
              to="home"
              spy={true}
              smooth={true}
              duration={100}
            >
              Home
            </Link>
          </a>

          <a>
            <Link
              href="/#about"
              className="item"
              to="about"
              spy={true}
              smooth={true}
              duration={100}
            >
              About
            </Link>
          </a>

          <a>
            <Link
              href="/#skills"
              className="item"
              to="skills"
              spy={true}
              smooth={true}
              duration={100}
            >
              Skills
            </Link>
          </a>

          <a>
            <Link
              href="/#projects"
              className="item"
              to="projects"
              spy={true}
              smooth={true}
              duration={100}
            >
              Projects
            </Link>
          </a>

          <a>
            <Link
              href="/#resume"
              className="item"
              to="resume"
              spy={true}
              smooth={true}
              duration={100}
            >
              Resume
            </Link>
          </a>

          <a>
            <Link
              href="/#contact"
              className="item"
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
            >
              Contact
            </Link>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
