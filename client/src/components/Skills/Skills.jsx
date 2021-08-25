import { getAllSkills } from "../../services/skills";
import { useState, useEffect } from "react";
import "./Skills.css";

export default function Skills({ user }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const allSkills = await getAllSkills();
      setSkills(allSkills);
    };
    fetchSkills();
  }, []);
  return (
    <div id="skills-parent">
      <h1 className="skills-title">My Skills</h1>
    <div className="skills-container">
    <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/8cXXLhj/HMTL.png" alt="HMTL" border="0" className="box"/></a>
      </div>

      <div>
      <a href="https://ibb.co/R01qtY2"><img src="https://i.ibb.co/2twTRWq/css.png" alt="css" border="0" className="box"/></a>
      </div>

      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/zXmJxxh/Javascript.png" alt="Javascript" border="0" className="box"/></a>
      </div>

      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/hKfGKgf/react.png" alt="react" border="0" className="box"/></a>
      </div>

      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/wCvCQ8h/postgresql.png" alt="postgresql" border="0" className="box"/></a>
      </div>

      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/SrZqhBD/nodejs.png" alt="nodejs" border="0" className="box"/></a>
      </div>

      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/BVqV2kX/ruby.png" alt="ruby" border="0" className="box"/></a>
      </div>

      <div></div>
      <a href="https://ibb.co/5X0q0mv"><img src="https://i.ibb.co/KcPCPd7/rails.png" alt="rails" border="0" className="box"/></a>
      
      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/rGtRYnR/express.png" alt="express" border="0" className="box"/></a>
      </div>

      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/2kG0SH1/mongoDB.png" alt="mongoDB" border="0" className="box"/></a>
      </div>
    </div>
   

    </div>
  );
}