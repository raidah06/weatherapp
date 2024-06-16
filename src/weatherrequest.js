export async function getWeather(locationValue){
    //fetches the data according to user input
    try{
        const stuff=`https://api.weatherapi.com/v1/current.json?key=c94e2dbb5f7f498f82a84247240506&q=${locationValue}`
        const response=await fetch(stuff, {mode: 'cors'})
        const currentData=await response.json()
        console.log(currentData)
        return currentData
    }catch(err){
        console.log(err)
    }
}