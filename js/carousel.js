

$(document).ready(function() {
	var music = [];
	harnessCarousel(function(tuple){
		switch (tuple[0]) {
			case 0:
				music.push("abcdefgh".substr(tuple[2],1)+'/'+'4821'.substr(tuple[1],1));
				var notes = music.map(function(note){return new Vex.Flow.StaveNote({ keys: [note], duration: "q" });});
				// write_notes(notes);
				write_s_note("abcdefgh".substr(tuple[2],1));
				break;
			case 1:
				break;
			case 2:
				if (music.length>0) music.pop();
				break;
		}
		console.log(music);
	});
});


