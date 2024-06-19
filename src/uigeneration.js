

export const generateUIMain=(tempCelciusVal,countryVal,regionVal,timeVal)=>{
    //queryselectors
    const tempCelcius=document.querySelector(".temp-celcius")
    const country=document.querySelector(".country")
    const region=document.querySelector(".region")
    const time=document.querySelector(".time")

    tempCelcius.textContent=tempCelciusVal
    country.textContent=countryVal
    region.textContent=regionVal
    time.textContent=timeVal
}