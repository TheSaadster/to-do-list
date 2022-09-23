import { blankProject } from "./blank-project";
import { initialDomManip } from "./initial-dom-manip";
import { createToDo } from "./create-to-do";
blankProject();

initialDomManip();

let myToDo = createToDo("Grocery Run", "Go get groceries", "9/26/2022", "Low", "Meat, Eggs, Milk");
let myToDo2 = createToDo("HW", "Do homework", "9/28/2022", "High", "Math, English, CMSC");
console.log("Properties of myToDo.......", myToDo);
console.log("Properties of myToDo2.......", myToDo2);