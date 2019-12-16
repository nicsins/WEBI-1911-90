$(document).ready(function(){

    // Add a click function on to the html button
    $("#btn").click(function(e) {
        // Validate function
        var validate = Validate();

        var apiKey = "2bf44ed05ffb35fabcf74b75d771240c";

        function convertTime(unixTime){
            let dt = new Date(unixTime * 1000)
            let h = dt.getHours()
            let m = "0" + dt.getMinutes()
            let t = h + ":" + m.substr(-2)
            return t
        }

        // Show error message
        $("#message").html(validate);
        if (validate.length == 0) {
            // Send HTTP-Request to API
            $.ajax({
                type: "GET", // Type of request (POST, GET, PUT, DELETE)
                url:
                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                    $("#city").val() +
                    "&appid=" +
                    apiKey +
                    "&units=imperial",
                dataType: "json",
                success: function(result, status, xhr) {
//            explore the data returned from the api by enter the following url in the browser:
//            https://api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=your-api-key&units=imperial
//            remember to replace the your-api-key text with your own key.
                    var data ="Here are the current conditions for ...<br>"+ result.name + "<br> temperature " + result.main.temp+" degrees F<br>windspeed "+result.wind.speed+ "mph <br> currently  "+result.weather[0].description+"<br>The Humidity is "+ result.main.humidity +" %<br>sunrise " + convertTime(result.sys.sunrise)+ "A.M.<br>sunset " + convertTime(result.sys.sunset)+ " P.M.";

                    $("#message").html(data);


                },
                error: function(xhr, status, error) {
                    // Function which will be executed on a error responds
                    // Opens a alert message with error responds from the request
                    alert(
                        "Result: " +
                        status +
                        " " +
                        error +
                        " " +
                        xhr.status +
                        " " +
                        xhr.statusText
                    );
                }
            });
        }
    });

    // Validation function
    function Validate() {
        // Error message
        var errorMessage = "";
        // Check if a city was selected
        if ($("#city").val() == 0) {
            // Add error text to error message
            errorMessage += "Please select a city ";
        }

        return errorMessage;
    }


}); // end ready
