DEFAULT_BACKGROUND = "image/background.png"

function set_background(src) {
    var old_bg = $('body').css('background-image');
    $('body').css('background-image', old_bg).removeClass('fullScreen');
    $('body')
        .css('background-image', 'url(' + src + ')')
        .addClass('fullScreen');
}

$(function() {
  $('div.content').live('showoff:show', function(evt) {
    var slide_bg_img = $('img[alt=background]', evt.target);
    if (slide_bg_img.size() > 0) {
      var src = slide_bg_img.attr('src');
      slide_bg_img.hide();
      set_background(src);
      $("#preso").css("display", "none")
    } else {
      set_background(DEFAULT_BACKGROUND);
      $("#preso").css("display", "block")
    }
  });
});

