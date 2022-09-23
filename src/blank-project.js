export const blankProject = () => {
    console.log("called blankProject")
    let projectsArr = [];
    let projectTitle = "Default Project"

    projectsArr.push({projectTitle});
    console.log(projectsArr);
    return { projectsArr, projectTitle };
}