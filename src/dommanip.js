import {getWeather} from "./weatherrequest.js"
import {weatherInfo} from "./index.js"
import {generateUIMain} from "./uigeneration.js"

export const domManip= ()=>{
    const form=document.querySelector(".form")
    const submitButton=document.querySelector(".submit-button")

    //intakes user input for the
    submitButton.addEventListener("click",async(event)=>{
        event.preventDefault()
        
        const locationValue=document.querySelector(".search-box").value
      
        console.log("hi")
        console.log(await getWeather(locationValue))
        //weather info object
        const weatherObj=await getWeather(locationValue)
        //weather
        const tempCelciusVal=weatherObj.current.temp_c
        const tempFarenheitVal=weatherObj.current.temp_f
        const countryVal=weatherObj.location.country
        const regionVal=weatherObj.location.region
        const timeVal=weatherObj.current.condition.text

        //generates the value
        generateUIMain(tempCelciusVal,tempFarenheitVal,countryVal,regionVal,timeVal)

        //weatherProcess(lol)
    })
    
}
