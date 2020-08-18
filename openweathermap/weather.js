(function() {
    getWeather = () => {
        let key = 'c05997bdf0fbf2a4343b48ae1ac4bc82';
        let country = 'Philippines';
        let api = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}`;

        fetch(api)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            let output = '';
            let icon = document.querySelector('icon');
            let weatherIconId = data.weather[0].icon;
            let temperature = Math.floor(data.main.temp - 273);
            let countryName = data.sys.country;
            let city = data.name;
              
            output += `
                <div class="icon">
                    <img src="icons/${weatherIconId}.svg"/>
                </div>
                <div class="temperature">
                    ${temperature}°<span>C</span>
                </div>
                <div class="description">
                    ${data.weather[0].description}
                </div>
                <div class="country">
                 ${country}
                </div>
              `;
              document.getElementById('weather').innerHTML = output;
        })
        .catch(err => console.log(err));
    }
    getWeather();
})();