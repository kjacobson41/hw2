// Your code goes here:

jQuery('#thumbnails > img').on('click', function(e) {
  $img = $(this);
  jQuery('#main-image').attr('src', $img.attr('src'));
})
