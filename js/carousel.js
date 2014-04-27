
$(document).ready(function() {
	var music = [];
	harnessCarousel(function(tuple){
		switch (tuple[0]) {
			case 0:
				add_note(tuple);
				break;
			case 1:
				do_play();
				break;
			case 2:
				delete_last_note();
				break;
		}
		console.log(music);
	});
	MIDI.loadPlugin({
                soundfontUrl: "./soundfont/",
                instrument: "acoustic_grand_piano",
		callback: function(){console.log('MIDI ready');}
	});

	function add_note(tuple) {
		music.push("abcdefgh".substr(tuple[2],1)+'/'+'4821'.substr(tuple[1],1));
		var notes = music.map(function(note){return new Vex.Flow.StaveNote({ keys: [note], duration: "q" });});
		// write_notes(notes);
		write_s_note("abcdefgh".substr(tuple[2],1));
	}

	function delete_last_note() {
		if (music.length>0) music.pop();
	}

	function do_play(notes) {
		var delay = 0; // play one note every quarter second
		var note = 50; // the MIDI note
		var velocity = 127; // how hard the note hits
		// play the note
		MIDI.setVolume(0, 127);
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75);
	}


});
