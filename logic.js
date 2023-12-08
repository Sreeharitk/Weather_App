var input = document.getElementById("wi")
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
        wname = wi.value.toLowerCase()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wname}&appid=5b4bee0ba241d092159faf007e166080`).then(out => out.json())
        .then(result => displayData(result))

        function displayData(weatherArray){
            pname = weatherArray.name
            pweather = weatherArray.weather[0].main
            ptemp = weatherArray.main.temp-273.15
            pfeels = weatherArray.main.feels_like-273.15
            pmin = weatherArray.main.temp_min-273.15
            pmax = weatherArray.main.temp_max-273.15
            phumidity = weatherArray.main.humidity
            pwind = weatherArray.wind.speed

            placeName.innerHTML = pname

            mainTemp.innerHTML = `
            <p class="temp-size"><i class="fa-solid fa-temperature-three-quarters me-2" style="color: #000000;"></i>: ${ptemp.toFixed(1)}°C</p>
            `
            tempFeels.innerHTML = `
                <p>Feels like: ${pfeels.toFixed(1)}°C</p>
                <p>Min: ${pmin.toFixed(1)}°C</p>
                <p>Max: ${pmax.toFixed(1)}°C</p>
            `

            tempHum.innerHTML = `
                <p>Humidity: ${phumidity}%</p>
            `

            tempWin.innerHTML = `
                <p>Wind: ${pwind} m/s</p>
            `

            if(pweather == "Clouds"){
                pimg.innerHTML = `
                <div class="cloudy">
                    <img class="weather-icon" src="https://cdn-icons-png.flaticon.com/512/7774/7774417.png" alt="...">
                </div>
                <h2>Cloudy</h2>
                `
            }else if(pweather == "Rain"){
                pimg.innerHTML = `
                    <div class="rainy">
                        <img class="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="...">
                    </div>
                    <h2>Rainy</h2>
                `
            }else if(pweather == "Mist"){
                pimg.innerHTML = `
                    <div class="mist">
                        <img class="weather-icon" src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png" alt="...">
                    </div>
                    <h2>Misty</h2>
                `
            }else if(pweather == "Clear"){
                pimg.innerHTML = `
                <div class="clear">
                    <img class="weather-icon" src="https://static-00.iconduck.com/assets.00/clear-day-icon-1024x1024-exbd0lm2.png" alt="...">
                </div>
                <h2>Clear</h2>
                `
            }else if(pweather == "Snow"){
                pimg.innerHTML = `
                <div class="snow">
                    <img class="weather-icon" src="https://static.vecteezy.com/system/resources/previews/022/287/856/original/3d-rendering-snowy-weather-icon-3d-render-snow-with-cloud-icon-snowfall-png.png" alt="...">
                </div>
                <h2>Snow</h2>
                `
            }else if(pweather == "Smoke"){
                pimg.innerHTML = `
                <div class="smoke">
                    <img class="weather-icon" src="https://cdn3d.iconscout.com/3d/premium/thumb/smoke-5175068-4328031.png" alt="...">
                </div>
                <h2>Smoke</h2>
                `
            }else if(pweather == "Drizzle"){
                pimg.innerHTML = `
                <div class="drizzle">
                    <img class="weather-icon" src="https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-weather-icon-25.png" alt="...">
                </div>
                <h2>Drizzling</h2>
                `
            }
            
        }
    }
});

function getCurrentLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b4bee0ba241d092159faf007e166080`).then(out=>out.json()).then(result => currentData(result))

          function currentData(weatherArray){
            pname = weatherArray.name
            pweather = weatherArray.weather[0].main
            ptemp = weatherArray.main.temp-273.15
            pfeels = weatherArray.main.feels_like-273.15
            pmin = weatherArray.main.temp_min-273.15
            pmax = weatherArray.main.temp_max-273.15
            phumidity = weatherArray.main.humidity
            pwind = weatherArray.wind.speed

            placeName.innerHTML = pname

            mainTemp.innerHTML = `
            <p class="temp-size"><i class="fa-solid fa-temperature-three-quarters me-2" style="color: #000000;"></i>: ${ptemp.toFixed(1)}°C</p>
            `
            tempFeels.innerHTML = `
                <p>Feels like: ${pfeels.toFixed(1)}°C</p>
                <p>Min: ${pmin.toFixed(1)}°C</p>
                <p>Max: ${pmax.toFixed(1)}°C</p>
            `

            tempHum.innerHTML = `
                <p>Humidity: ${phumidity}%</p>
            `

            tempWin.innerHTML = `
                <p>Wind: ${pwind} m/s</p>
            `

            if(pweather == "Clouds"){
                pimg.innerHTML = `
                <div class="cloudy">
                    <img class="weather-icon" src="https://cdn-icons-png.flaticon.com/512/7774/7774417.png" alt="...">
                </div>
                <h2>Cloudy</h2>
                `
            }else if(pweather == "Rain"){
                pimg.innerHTML = `
                    <div class="rainy">
                        <img class="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="...">
                    </div>
                    <h2>Rainy</h2>
                `
            }else if(pweather == "Mist"){
                pimg.innerHTML = `
                    <div class="mist">
                        <img class="weather-icon" src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png" alt="...">
                    </div>
                    <h2>Misty</h2>
                `
            }else if(pweather == "Clear"){
                pimg.innerHTML = `
                <div class="clear">
                    <img class="weather-icon" src="https://static-00.iconduck.com/assets.00/clear-day-icon-1024x1024-exbd0lm2.png" alt="...">
                </div>
                <h2>Clear</h2>
                `
            }else if(pweather == "Snow"){
                pimg.innerHTML = `
                <div class="snow">
                    <img class="weather-icon" src="https://static.vecteezy.com/system/resources/previews/022/287/856/original/3d-rendering-snowy-weather-icon-3d-render-snow-with-cloud-icon-snowfall-png.png" alt="...">
                </div>
                <h2>Snow</h2>
                `
            }else if(pweather == "Smoke"){
                pimg.innerHTML = `
                <div class="smoke">
                    <img class="weather-icon" src="https://cdn3d.iconscout.com/3d/premium/thumb/smoke-5175068-4328031.png" alt="...">
                </div>
                <h2>Smoke</h2>
                `
            }else if(pweather == "Drizzle"){
                pimg.innerHTML = `
                <div class="drizzle">
                    <img class="weather-icon" src="https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-weather-icon-25.png" alt="...">
                </div>
                <h2>Drizzling</h2>
                `
            }else if(pweather == "Haze"){
                pimg.innerHTML = `
                <div class="haze">
                    <img class="weather-icon" src="./images/haze.png" alt="...">
                </div>
                <h2>Haze</h2>
                `
            }
            
        }
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
}

