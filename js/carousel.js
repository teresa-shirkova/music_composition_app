

var write_play_off = function() {
    $('#write_play_carousel').carouFredSel({auto:true}).trigger('pause', true);
};


var note_type_off = function() {
    $('#note_length_carousel').carouFredSel({auto:true}).trigger('pause', true);

};

var note_name_off = function() {
    $('#note_name_carousel').carouFredSel({auto:false}).trigger('pause', true);


$(document).ready(function() {
<<<<<<< HEAD
note_name_off();
note_type_off();
write_play_off();
$('#write_play_carousel').keypress(
    $('#write_play_carousel').trigger('resume', true)
);
});


