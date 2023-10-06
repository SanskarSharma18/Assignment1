// Step 1: Add your entry to team.json
// You can do this manually outside of the code

// Step 2: Create two methods
function getTeamJSON() {
    $.getJSON('team.json', function(data) {
        // Step 2b: Loop through the array and insert data
        $.each(data, function(index, member) {
            var $teamDiv = $('#team');
            var $name = $('<h2>').text(member.name);
            var $position = $('<h5>').text(member.position);
            var $bio = $('<p>').text(member.bio);

            $teamDiv.append($name, $position, $bio);
        });
    });
}

// Step 3: Create an AJAX method
function getTeamDataWithAjax() {
    var $teamDiv = $('#team');

    // Step 3b: Display "Loading..."
    $teamDiv.text('Loading...');

    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        success: function(data) {
            // Step 3d: Display data
            $teamDiv.empty(); // Clear previous content
            $.each(data, function(index, member) {
                var $name = $('<h2>').text(member.name);
                var $position = $('<h5>').text(member.position);
                var $bio = $('<p>').text(member.bio);

                $teamDiv.append($name, $position, $bio);
            });
        },
        error: function() {
            // Step 3c: Display error message
            $teamDiv.text('Error: Content could not be retrieved.');
        }
    });
}

// Bonus: Delay content display by 3 seconds
$(document).ready(function() {
    // You can choose which method to call here (getTeamJSON or getTeamDataWithAjax)
    // I will call getTeamDataWithAjax to demonstrate the AJAX method
    setTimeout(getTeamDataWithAjax, 3000); // Delay for 3 seconds
});
