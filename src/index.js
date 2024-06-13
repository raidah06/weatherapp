import "./style.css"
import { projectLoad } from "./project-load"
import {createToDo} from "./create-to-do.js"
import {displayProject,displayForm,addItem,clearForm} from './dom-manip.js'

//loads project initially
projectLoad()

//click events module
let clickEventsModule=(function(){

    //displays form
    const addNewToDo=document.querySelector(".add")
    addNewToDo.addEventListener("click",displayForm)

    //adding item to checklist
    const addToChecklist=document.querySelector(".add-to-checklist")
    addToChecklist.addEventListener("click",addItem)

    //clear form
    const clearButton=document.querySelector(".reset-button")
    clearButton.addEventListener("click",clearForm)

    //submit new to do
    const submitButton=document.querySelector(".submit-button")
    submitButton.addEventListener("click",createToDo)
})();
