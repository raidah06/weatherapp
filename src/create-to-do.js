import {compareAsc,format,parseISO,startOfToday} from 'date-fns'
import {clearForm} from './dom-manip'
import {saveToDoToLocal} from './local-storage'

let toDoArray=[]

export const createToDo=()=>{
    let Title=document.getElementById("Title").value
    let Description=document.getElementById("Description").value
    let DueDate=document.getElementById("DueDate").value
    let Priority=document.getElementById("Priority").value

    if(Title==""||Description==""||DueDate==""){
        alert("please enter the required field")
        return
    }
    if(parseISO(DueDate)<startOfToday()){
        alert("please enter a valid date")
        return
    }

    const nodeListCheckList=document.querySelectorAll("li")
    let CheckListArray=[]
    for(let i=0;i<nodeListCheckList.length;i++){
        let strippedCheckList=nodeListCheckList[i].textContent.replace("\u00D7",'')
        CheckListArray.push(strippedCheckList)
    }

    let CheckList=CheckListArray.join(", ")

    console.log({Title,Description,DueDate,Priority,CheckList})

    saveToDoToLocal({Title,Description,DueDate,Priority,CheckList})
    clearForm()
}

export class Lists{

}


export default class Todo{
    constructor(title,date,priority){
        this.title=title
        this.priotity=priority
        this.date=date

    }
}

export class Project{
    constructor(name,id){
        this.name=name
        this.id=id
        this.toDos=[]
    }
}