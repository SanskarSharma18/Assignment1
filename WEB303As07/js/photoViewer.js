(function($) {
    $.fn.photoViewer = function() {
        // Apply the plugin to each element in the matched set
        return this.each(function() {
            var $imgContainer = $(this);
            var $mainImg = $imgContainer.find('#main-img');
            var $thumbnailImages = $imgContainer.find('img');

            $('#img-container img').on({
                mouseover: function() {
                    $(this).css({
                        'cursor': 'default',
                        'border-color': 'red'
                    });
                },
                mouseout: function() {
                    $(this).css({
                        'cursor': 'default',
                        'border-color': 'grey'
                    });
                },
                click: function() {
                    var imgURL = $(this).attr('src');
                    $mainImg.fadeOut(100, function() {
                        $mainImg.attr('src', imgURL);
                    }).fadeIn(100);
                }
            });
            
        });
    };
})(jQuery);

$(document).ready(function() {
    // Apply the photoViewer plugin to the #img-container
    $('#img-container').photoViewer();
});
