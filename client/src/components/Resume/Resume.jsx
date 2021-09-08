import "./Resume.css";
import React from 'react'

const Resume = () => {

  return (
    <div id="resume-parent">
      <h1 className="resume-title" id="resume">Resume</h1>

      <div className="resume-container">
        <div className="resume-wrapper">
          <a href="#">
            <img
              src="https://i.ibb.co/0YwWZL8/Maximiliana-Carlson-Resume-2021-doc-5.jpg"
              alt="resume"
              border="0"
              className="resume-photo"
            />
          </a>
      </div>
      </div>
    </div>
  );
}

export default Resume;
