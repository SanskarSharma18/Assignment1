$(document).ready(function() {

    loadJsonData();

    $('.sort').click(function(event) {
        event.preventDefault();
        var currentSortOrder = $(this).data('sortOrder');
        if (currentSortOrder === undefined) {
            currentSortOrder = 0;
        }

        if (currentSortOrder === 0) {
            currentSortOrder = 1;
        } else if (currentSortOrder === 1) {
            currentSortOrder = -1;
        } else {
            currentSortOrder = 0;
        }

        $(this).data('sortOrder', currentSortOrder);

        sortTheTable($(this).data('sort'), currentSortOrder);

        
    });
    $('#searchBox').on('input', function() {
        var searchText = $(this).val().toLowerCase();

        searchCharacters(searchText);
    });
    $('#filterAM').on('click', function () {
        filterTable('AM');
    });

    // Filter by N-Z button
    $('#filterNZ').on('click', function () {
        filterTable('NZ');
    });

    
});

function loadJsonData() {
    $.getJSON('characters.json', function(jsonData) {
        displayDataInTable(jsonData);
    });
}

// Function to display data in table
function displayDataInTable(data) {
    // Find the table body
    var tableBody = $('#characterTable tbody');

    // Clear the table body
    tableBody.empty();

    // Loop through each data item and add a row to the table
    $.each(data, function(index, character) {
        var row = '<tr>' +
            '<td>' + character.firstName + '</td>' +
            '<td>' + character.lastName + '</td>' +
            '<td>' + character.city + '</td>' +
            '<td>' + character.review + '</td>' +
            '<td>' + character.age + '</td>' +
            '<td>' + character.date + '</td>' +
            '</tr>';

        tableBody.append(row);
    });
}

// Function to sort the table
function sortTheTable(columnName, sortOrder) {
    $.getJSON('characters.json', function(jsonData) {
        if (sortOrder !== 0) {
            jsonData.sort(function(a, b) {
                if (a[columnName] < b[columnName]) {
                    return sortOrder === 1 ? -1 : 1;
                }
                if (a[columnName] > b[columnName]) {
                    return sortOrder === 1 ? 1 : -1;
                }
                return 0;
            });
        }

        // Display the sorted data in the table
        displayDataInTable(jsonData);
    });
}
function updateFilterCounts(data) {
    const countAM = data.filter(c => c.lastName[0] >= 'A' && c.lastName[0] <= 'M').length;
    const countNZ = data.filter(c => c.lastName[0] >= 'N' && c.lastName[0] <= 'Z').length;
    $('#filterAM').text(`A-M (${countAM})`);
    $('#filterNZ').text(`N-Z (${countNZ})`);
}
function filterTable(range) {
    $('#characterTable tbody tr').each(function () {
        const lastName = $(this).find('td:nth-child(2)').text();
        if ((range === 'AM' && lastName[0] >= 'A' && lastName[0] <= 'M') ||
            (range === 'NZ' && lastName[0] >= 'N' && lastName[0] <= 'Z')) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function searchCharacters(searchText) {
    // Reset any previous highlights
    $('#characterTable tbody tr').css('background-color', '');

    // If there is search text, highlight matching rows
    if (searchText) {
        $('#characterTable tbody tr').each(function() {
            var firstName = $(this).find('td:first').text().toLowerCase();
            if (firstName.includes(searchText)) {
                $(this).css('background-color', 'green');
            }
        });
    }
}


