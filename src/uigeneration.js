

export const generateUIMain=(tempCelciusVal,tempFarenheitVal,countryVal,regionVal,timeVal)=>{
    //queryselectors
    const tempCelcius=document.querySelector(".temp-celcius")
    const tempFarenheit=document.querySelector(".temp-farenheit")
    const country=document.querySelector(".country")
    const region=document.querySelector(".region")
    const time=document.querySelector(".time")

    tempCelcius.textContent=tempCelciusVal+"C"
    tempFarenheit.textContent=tempFarenheitVal+"Farenheit"
    country.textContent=countryVal
    region.textContent=regionVal
    time.textContent=timeVal
}