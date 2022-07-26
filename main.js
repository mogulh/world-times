let cities = ["Africa/Nairobi","Europe/London","Europe/Dublin","Asia/Tokyo","Africa/Accra","America/New_York"]
let timeStamps = document.getElementsByClassName("timeStamp")

async function getTime(timezone){
    let baseUrl = "http://worldtimeapi.org/api/timezone/"
    let fullUrl = baseUrl+timezone

    // get the time fro the api
    let response = await fetch(fullUrl);

    // convert response to json
    let body = await response.json()
    

    

   

let time = body.datetime.split("T")[1].slice(0,5)
// console.log()
return time
    
}

async function getAllTimes(){
    for (let index = 0; index < cities.length; index++) {
        const city = cities[index];
console.log(city)
        
console.log(await getTime(city))
    timeStamps[index].innerHTML = await getTime(city)


        
    }
}

getAllTimes()


