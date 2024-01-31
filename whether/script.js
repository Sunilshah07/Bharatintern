function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '0dacd4aec1193a0ffb0fec0f760a2799';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `
                <h2 style="color:white;">${data.name}</h2>
                <p style="color:white;">Temperature: ${data.main.temp}°C</p>
                <p style="color:white;">Weather: ${data.weather[0].main}</p>
            `;
        })
        .catch(error => {
          document.getElementById('weatherDisplay').innerHTML="<h1>Enter correct Location</h1>";
        });
  }
  