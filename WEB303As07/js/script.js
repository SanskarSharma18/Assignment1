
$('#open-box').on('click', function(){

    $("#box-container").show()
});
// for img 1
$('#close').on('click', function(){

    $("#box-container").hide()
});

$$('#close').on('click', function(){

    $("#box-container").hide()
});



$(document).ready(function () {
    // Initial click on the first thumbnail
    $thumbs.eq(0).click();
});

$frame.on('click', 'a.photo-box', function (e) {
    e.preventDefault();

    var $img = $current.clone();

    // Set the modal image source
    $('#modal-image').attr('src', $img.attr('src'));

    // Show the modal
    $('#modal').css('display', 'block');
});

// Close the modal when the close button is clicked
$('#modal').on('click', 'span.close-modal', function () {
    $('#modal').css('display', 'none');
});