/*
    Assignment #4
    Sanskar Sharma
*/

$(function () {
    // Check if geolocation is allowed by the user
    if ("geolocation" in navigator) {
        // Geolocation is available, so proceed

        // Function to calculate the distance in meters between two sets of coordinates
        function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
            // ... (the provided code for calculating distance)
        }

        // Function to convert meters to kilometers
        function metersToKilometers(meters) {
            return (meters / 1000).toFixed(2); // Convert to kilometers and round to 2 decimal places
        }

        // Check if a location value is stored in local storage
        if (localStorage.getItem("lastLocation")) {
            // Location value exists in local storage
            var lastLocation = JSON.parse(localStorage.getItem("lastLocation"));

            // Display the current location in div#locationhere
            navigator.geolocation.getCurrentPosition(function (position) {
                var currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                };
                $("#locationhere").html(
                    "Current Location: Latitude " + currentLocation.latitude.toFixed(6) +
                    ", Longitude " + currentLocation.longitude.toFixed(6) +
                    " (Accuracy: " + currentLocation.accuracy + " meters)"
                );

                // Display a welcome back message
                $("#welcomeMessage").html("<h2>Welcome back to the page!</h2>");

                // Compare the current location with the last location
                var distanceInMeters = calcDistanceBetweenPoints(
                    currentLocation.latitude, currentLocation.longitude,
                    lastLocation.latitude, lastLocation.longitude
                );
                var distanceInKilometers = metersToKilometers(distanceInMeters);
                $("#distanceMessage").html("You traveled " + distanceInKilometers + " km since your last visit.");
            });
        } else {
            // No location value in local storage
            $("#welcomeMessage").html("<h2>Welcome to the page for the first time!</h2>");

            // Get the current location and store it in local storage
            navigator.geolocation.getCurrentPosition(function (position) {
                var currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                };
                localStorage.setItem("lastLocation", JSON.stringify(currentLocation));

                $("#locationhere").html(
                    "Current Location: Latitude " + currentLocation.latitude.toFixed(6) +
                    ", Longitude " + currentLocation.longitude.toFixed(6) +
                    " (Accuracy: " + currentLocation.accuracy + " meters)"
                );
            });
        }
    } else {
        // Geolocation is not allowed, so display an error message
        $("#locationhere").html("<p>Geolocation is blocked. Please allow geolocation to use this application.</p>");
    }
});
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }