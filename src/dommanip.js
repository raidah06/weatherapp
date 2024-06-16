import {getWeather} from "./weatherrequest.js"

export const domManip=()=>{
    const form=document.querySelector(".form")
    const submitButton=document.querySelector(".submit-button")

    //intakes user input for the location
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault()
       
        const locationValue=document.querySelector(".search-box")
        console.log(locationValue)
        console.log(getWeather(locationValue))
    })
}