

var write_stave = function() {
  var canvas = $("div.top div.stave canvas")[0];
  var renderer = new Vex.Flow.Renderer(canvas,
    Vex.Flow.Renderer.Backends.CANVAS);

  var ctx = renderer.getContext();
  var stave = new Vex.Flow.Stave(10, 0, 1000);
  stave.addClef("treble");
  stave.addTimeSignature("4/4");
stave.setContext(ctx).draw();

};


$(document).ready(function() {
	write_stave();
	harnessCarousel(alert);
});

