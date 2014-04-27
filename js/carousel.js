
$(document).ready(function() {
	var music = [];
	harnessCarousel(function(tuple){
		switch (tuple[0]) {
			case 0:
				add_note(tuple);
				draw_with_fonts();
				break;
			case 1:
				do_play();
				break;
			case 2:
				delete_last_note();
				draw_with_fonts();
				break;
		}
		console.log(music);
	});
	MIDI.loadPlugin({
                soundfontUrl: "./soundfont/",
                instrument: "acoustic_grand_piano",
                callback: function() {}
	});
	function add_note(tuple) {
		music.push("abcdefgh".substr(tuple[2],1)+'/'+'4821'.substr(tuple[1],1));
	}

	function delete_last_note() {
		if (music.length>0) music.pop();
	}

	function do_play() {
		console.log('trying to play');

		var delay = 0; // play one note every quarter second
		var note = 50; // the MIDI note
		var velocity = 127; // how hard the note hits
		var barTime = 2;
		// play the note
		MIDI.setVolume(0, 127);
		music.map(function(note){
			var midiNote = {a:50,b:51,c:52,d:53,e:54,f:55,g:56,h:57}[note.substr(0,1)]||80; // If 80 I missed something
			var duration = barTime/Number(note.substr(2));
			MIDI.noteOn(0, midiNote, velocity, delay);
			MIDI.noteOff(0, midiNote, delay + duration);
			delay += duration;
		});
	}
	function draw_with_fonts(){
		$('#stave').html('`'
		+ music.map(function(note){
			return String.fromCharCode({
				'a/4':0x29,
				'b/4':0x5f,
				'c/4':0x2b,
				'd/4':0x51,
				'e/4':0x57,
				'f/4':0x45,
				'g/4':0x52,
			}[note.substr(0,1) + '/4'] || 0x21);
			}).join('')
		+ String.fromCharCode(0x3d)
		);
	}

});
