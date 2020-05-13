//OrcaIsland 48.523160, -122.912320
$.ajax ({
    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat={48.523160}&lon={-122.912320}&appid={" + config.OpenWeatherAPIKey + "}",
    success: logResult,
    error: logError
});

//SookeHarbor 48.3564768, -123.7275092
$.ajax ({
    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat={48.3564768}&lon={-123.7275092}&appid={" + config.OpenWeatherAPIKey + "}",
    success: logResult,
    error: logError
});

//EdgeWater 47.6125416, -122.3528448
$.ajax ({
    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat={47.6125416}&lon={-122.3528448}&appid={" + config.OpenWeatherAPIKey + "}",
    success: logResult,
    error: logError
});

function logResult(result) {
    console.log('Success!', result)
};

function logError(error) {
    console.log('Error!', error)
};