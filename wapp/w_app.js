const apikey = "3934af0e88e8839b88a22b289ae4b2ee"

function getweather(){
    const city = document.getElementById('cityinput').value

    if (city === ""){
        alert("Please enter a city name")
        return
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    fetch(url)
    .then(response =>{
        if (!response.ok){
            throw new Error("city not found")
        }
        return response.json()

    })
    .then(data => {
        const weatherinfo =`
        <h2>${data.name},${data.sys.country}</h2>
        <p>Temperature;${data.main.temp}C</p>
        <p>Weather:${data.weather[0].description}</p>
        <p>Wind speed:${data.wind.speed} m/s</p>`

    document.getElementById('weatherresult').innerHTML = weatherinfo
    })
    .catch(Error => {
        document.getElementById('weatherresult').innerHTML = `<p style="color:red;">${error.message}</p>`
    })

}

