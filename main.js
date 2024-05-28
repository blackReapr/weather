$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        let city = $("#city").val();
        let degree = $("#degree").val();
        $.get("https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=" + city,
            function (data, textStatus, jqXHR) {
                $("#result").html(
                    `
                    <p>City: ${data.location.name}</p>
                    <p>Country: ${data.location.country}</p>
                    <p>Weather Forecast: ${degree === "celcius" ? data.current.temp_c : data.current.temp_f}</p>
                    <p>Sky Condition: <img  src="${data.current.condition.icon}" /> ${data.current.condition.text}</p>
                    `
                )
            },
        );
    })
});