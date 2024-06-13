import { projectLoad } from "./project-load";

//dom manip display ui components
export function displayProject(){
    const projectsInfo=document.createElement("div")
    projectsInfo.textcontent=projectLoad().projectTitle;
    contentDiv.appendChild.appendChild(projectsInfo)
}

export function displayForm(){
    document.getElementById("todo-form").style.display=""
}

export function displayToDo(){
    const removeDivs=document.querySelectorAll(".card")
    for(let i=0;i<removeDivs.length;i++){
        removeDivs[i].remove()
    }
    const todo=document.querySelector(".todo")
    const card=document.createElement("div")
    card.classList.add("card")
    todo.appendChild(card)

    let Title=localStorage.getItem("Title")
    let Description=localStorage.getItem("Description")
    let DueDate=localStorage.getItem("DueDate")
    let Priority=localStorage.getItem("Priority")
    let CheckList=localStorage.getItem("CheckList")

    let _displayArray={Title,Description,DueDate,Priority,CheckList}
    console.log(_displayArray)

    for (let key in _displayArray){
        const para=document.createElement("p")
        para.textContent=(`${key}:${_displayArray[key]}`)
        card.appendChild(para)
    }
}
export function addItem(){
    const addItem=document.getElementById("add-to-checklist").value;

    if(addItem!==""){
        const ul=document.querySelector(".todo-ul")
        const li=document.createElement("li")
        li.textContent=addItem
        const span=document.createElement("span")
        span.className="remove-checklist-item"
        const removeIcon=document.createTextNode("\u00D7")
        li.appendChild(span)
        span.appendChild(removeIcon)
        ul.appendChild(li)
        document.getElementById("add-to-checklist").value=""

        //checks if list item already exist
        if(document.querySelectorAll("li").length>0){
            const nodeListCheckList=document.querySelectorAll("li")

            nodeListCheckList.forEach(checkListItem=>{
                checkListItem.addEventListener("click", removeItemFromChecklist=>{
                    checkListItem.remove()
                })
            })
        }
    }else return
}

export function clearForm(){
    const nodeListCheckList=document.querySelectorAll("li")
    for(let i=0;i<nodeListCheckList,length;i++){
        nodeListCheckList[i].remove()
    }
    document.getElementById("add-todo").reset()
}