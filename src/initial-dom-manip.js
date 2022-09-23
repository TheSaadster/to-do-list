import { blankProject } from "./blank-project"
export const initialDomManip = () => {
    const contentDiv = document.querySelector(".content");
    const heading = document.createElement("h1");
    heading.textContent = "To-Do List"
    contentDiv.appendChild(heading);

    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProject().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}