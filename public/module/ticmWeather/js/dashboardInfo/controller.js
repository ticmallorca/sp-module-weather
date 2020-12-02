/**
 * controller
 * Copyright(c) 2019 Alejandro Villén
 * MIT Licensed
 */

console.log("TicmWeather Widget controller library");

var baseURL_ticmWeather = "/api/ticmWeather";

function ticmWeather_get() {

    navigator.geolocation.getCurrentPosition((location)=>{

        var apiURL = `${baseURL_ticmWeather}/get`;
        $.ajax({
            type: "GET",
            url: apiURL,
            data: {
                "geolocation": location
            }
        }).done(function (response) {

            if (response.status) {
                ticmWeather_print_get(response.data[0]);
            } else {
            	// Message sended
            	doNotify("error", response.status, response.message);
            }
        });



    });
}

ticmWeather_get();