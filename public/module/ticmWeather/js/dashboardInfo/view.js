/**
 * view
 * Copyright(c) 2019 Alejandro Villén
 * MIT Licensed
 */


function ticmWeather_print_get(data) {
    try {
        // $("#ticmWeahter_summary_icon").html(`${data.weather[0].main}`);
        $("#ticmWeahter_summary").html(`${data.weather[0].main}`);
        $("#ticmWeahter_temperature").html(`${data.main.temp - 274, 15} ºC`);
        $("#ticmWeahter_name").html(`${data.name}, ${data.sys.country}`);
        let hours = new Date(data.sys.sunrise*1000).getHours();
        let minutes = new Date(data.sys.sunrise*1000).getMinutes();
        $("#ticmWeahter_sunrise").html(`${hours}:${minutes}`);
        hours = new Date(data.sys.sunset*1000).getHours();
        minutes = new Date(data.sys.sunset*1000).getMinutes();
        $("#ticmWeahter_sunset").html(`${hours}:${minutes}`);
        $("#ticmWeahter_wind").html(`${parseInt(data.wind.speed / 0.6213)}Km/h`);

    } catch (error) {
        doNotify("error", false, `Module:ticmWeather Function:${ticmWeather_print_get} Data:${data}`);
    }
}