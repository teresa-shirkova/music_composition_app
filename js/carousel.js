

var write_play_off = function() {
    $('#write_play_carousel').carouFredSel({auto:false});
};


var note_type_off = function() {
    $('#note_length_carousel').carouFredSel({auto:false});

};

var note_name_off = function() {
    $('#note_name_carousel').carouFredSel({auto:false});
};

var write_stave = function() {
  var canvas = $("div.top div.stave canvas")[0];
  var renderer = new Vex.Flow.Renderer(canvas,
    Vex.Flow.Renderer.Backends.CANVAS);

  var ctx = renderer.getContext();
  var stave = new Vex.Flow.Stave(10, 0, 1000);
  stave.addClef("treble").setContext(ctx).draw();
};


$(document).ready(function() {
note_name_off();
note_type_off();
write_play_off();
write_stave();
$('#write_play_carousel').keypress(
    $('#write_play_carousel').carouFredSel({auto:true})
);
});

