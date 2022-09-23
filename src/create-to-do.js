let toDoArr = [];
export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("called createToDo");

    toDoArr.push({Title, Description, DueDate, Priority, CheckList});
    return{ Title, Description, DueDate, Priority, CheckList };
}