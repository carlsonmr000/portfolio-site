import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {


  return (
    <header className="navbar">
      <nav>
        <div>
        <a className="item" href="/">
        Home
      </a>
          <a className="item" href="/#about">
        About
      </a>
      <a className="item" href="/#skills">
        Skills
      </a>
      <a className="item" href="/#projects">
        Projects
      </a>
      <a className="item" href="/#contact">
        Contact
      </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
