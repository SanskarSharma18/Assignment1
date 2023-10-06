// WEB303 Assignment 2

    $(document).ready(function () {
        // Function to load content using AJAX
        function loadContent(url) {
            $.ajax({
                url: url,
                method: "GET",
                success: function (data) {
                    // Animate and display the content
                    $("#content").fadeOut(function () {
                        $(this).html(data).fadeIn();
                    });
                },
                error: function (xhr, status, error) {
                    console.log("Error loading content. Status: " + status + ", Error: " + error);
                }
            });
        }

        // Event handlers for the links
        $("#prospect").click(function (e) {
            e.preventDefault();
            loadContent("prospect.html");
        });

        $("#convert").click(function (e) {
            e.preventDefault();
            loadContent("convert.html");
        });

        $("#retain").click(function (e) {
            e.preventDefault();
            loadContent("retain.html");
        });
    });





