

$(document).ready(function() {
	var music = [];
	harnessCarousel(function(tuple){
		music.push("abcdefgh".substr(tuple[2],1));
		var notes = music.map(function(letter){return new Vex.Flow.StaveNote({ keys: [letter+"/4"], duration: "q" });});
		// write_notes(notes);
		write_s_note("abcdefgh".substr(tuple[2],1));
	});
});


