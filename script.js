document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchtemp();
    }
  });
  
  async function searchtemp() {
    let cityname = search.value
  
    if (!cityname) {
      alert('Field Is Empty')
    }
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
    data.json().then(
      dataDetails => weatherinfo(dataDetails)
    )
  }
  
  function weatherinfo(output) 
  {
    let searchresult = output
    let name=searchresult.name
    let temp = Math.floor(searchresult.main.temp - 273.15) 
    let min = (searchresult.main.temp_min - 273.15).toFixed(2)
    let max = (searchresult.main.temp_max -273.15).toFixed(2)
    let pressure = Math.floor(searchresult.main.pressure)
    let visibility = searchresult.visibility/1000
    let sea_level = searchresult.main.sea_level
    let humidity = searchresult.main.humidity
    let deg = searchresult.wind.deg
    let windspeed = searchresult.wind.speed
    city.innerHTML = name
    tempdisplay.innerHTML = `${temp}°C`
    min_temp.innerHTML = `min : ${min}`
    max_temp.innerHTML = `max : ${max}`
    pressure_temp.innerHTML = `pressure : ${pressure}`
    humidity_temp.innerHTML = `humidity : ${humidity}`
    sea_level_temp.innerHTML = `sea level : ${sea_level}`
    visibility_temp.innerHTML = `visibility : ${visibility} Km/h`
    speed_temp.innerHTML = `Wind Speed : ${windspeed}`
    wind_Deg.innerHTML = `Wind Deg : ${deg}`
  }


