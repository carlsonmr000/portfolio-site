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
    <div id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div id="my-skills">
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            <div className="name-and-image">
              <div className="name">
                {skill.name}
              </div>
            <img
              className="skill-img"
              src={skill.image}
              alt={skill.name}
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}