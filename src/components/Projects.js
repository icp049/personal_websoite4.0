// Projects.js

import React, { useState, useEffect } from "react";
import styles from "../stylesheets/Projects.module.css";
import lottie from "lottie-web";
import yourLottieAnimation from "../lottie/typing.json"; // Replace with the actual path

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch your GitHub repositories
    fetch(
      "https://api.github.com/users/icp049/repos?sort=created&direction=desc"
    )
      .then((response) => response.json())
      .then((data) => setProjects(data.slice(0, 9)))
      .catch((error) => console.log(error));

    // Load Lottie animation when component mounts
    const animationContainer = document.getElementById("lottie-container");
    if (animationContainer && !animationContainer.hasChildNodes()) {
      lottie.loadAnimation({
        container: animationContainer,
        animationData: yourLottieAnimation, // Replace with the actual animation data
        renderer: "svg", // or 'canvas' or 'html'
        loop: true,
        autoplay: true,
      });
    }
  }, []); // Empty dependency array ensures that the effect runs only once

  const getLanguageIcon = (language) => {
    switch (language) {
      case "JavaScript":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className={styles.icon}
            style={{ color: "yellow" }}
            alt="JavaScript"
          />
        );
      case "Python":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            className={styles.icon}
            style={{ color: "blue" }}
            alt="Python"
          />
        );
      case "Swift":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
            className={styles.icon}
            style={{ color: "orange" }}
            alt="Swift"
          />
        );
      case "HTML":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className={styles.icon}
            style={{ color: "red" }}
            alt="HTML"
          />
        );
      case "CSS":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            className={styles.icon}
            style={{ color: "blue" }}
            alt="CSS"
          />
        );
      case "C++":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            className={styles.icon}
            style={{ color: "pink" }}
            alt="C++"
          />
        );
      case "C#":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            className={styles.icon}
            style={{ color: "purple" }}
            alt="C++"
          />
        );

        case "PHP":
          return (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              className={styles.icon}
              style={{ color: "purple" }}
              alt="C++"
            />
          );

          case "Dart":
            return (
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                className={styles.icon}
                style={{ color: "purple" }}
                alt="C++"
              />
            );
      default:
        return null; // Return null if no matching icon is found
    }
  };

  return (
    <div className={styles.container} id="projects">
      <div className={styles.projects}>
        <div className={styles.animation}>
          <div id="lottie-container" className={styles.lottieContainer}></div>
        </div>

        <div className={styles.contributionContainer} id="projects">
          <img src="https://ghchart.rshah.org/icp049" />
        </div>

     

        <div className={styles.gridContainer}>
          {projects.map((project) => (
            <a
              key={project.id}
              className={styles.gridItem}
              href={project.html_url}
            >
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>
                  {getLanguageIcon(project.language)} {project.language}
                </span>
              </div>
            </a>
          ))}
        </div>


        <div className={styles.buttonContainer}>
          <button className={styles.projectbutton}>
            <a href="https://github.com/icp049">Explore Projects</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
