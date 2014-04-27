var stave = new Vex.Flow.Stave(10, 0, 1000);

var write_stave = function() {
var canvas = $("div.top div.stave canvas")[0];
var renderer = new Vex.Flow.Renderer(canvas,
Vex.Flow.Renderer.Backends.CANVAS);

var ctx = renderer.getContext();
  stave.addClef("treble");
  stave.addTimeSignature("4/4");
stave.setContext(ctx).draw();

};

var write_notes = function() {
var canvas = $("div.top div.stave canvas")[0];
var renderer = new Vex.Flow.Renderer(canvas,
Vex.Flow.Renderer.Backends.CANVAS);
var ctx = renderer.getContext();
var notes = [
    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),

    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),

    new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),

    new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
];

 var voice = new Vex.Flow.Voice({
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });
 voice.addTickables(notes);

var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 200);

 voice.draw(ctx, stave);
};


var write_s_note = function(entry) {
var canvas = $("div.top div.stave canvas")[0];
var renderer = new Vex.Flow.Renderer(canvas,
Vex.Flow.Renderer.Backends.CANVAS);
var ctx = renderer.getContext();
var note_key = entry + "/4";
console.log(note_key);
var note = [
    new Vex.Flow.StaveNote({ keys: [note_key], duration: "q" }),
   ];
 var voice = new Vex.Flow.Voice({
    num_beats: 1,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });
 voice.addTickables(note);

var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 200);

 voice.draw(ctx, stave);

};
/*

 var voice = new Vex.Flow.Voice({
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });
 voice.addTickables(notes);

var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 200);

 voice.draw(ctx, stave);
};
*/

$(document).ready(function() {
write_stave();
});

$(document).keydown(function(e){
        switch (e.keyCode) {
        case 65:
               write_s_note(entry);

}
});

/*
$(document).keydown(function(e){
        switch (e.keyCode) {
        case 65:
                $('#write_play_carousel').trigger('', true); break;
        case 66:
                $('#write_play_carousel').trigger('resume', true); break;
        case 67:
                $('#write_play_carousel').trigger('resume', true); break;
        case 68:
                $('#write_play_carousel').trigger('resume', true); break;
}
});*/

