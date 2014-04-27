
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
			var midiNote = {a:50,b:52,c:54,d:56,e:58,f:59,g:60,h:62}[note.substr(0,1)]||80; // If 80 I missed something
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
				// 1
				'a/1':0x6f,
				'b/1':0x70,
				'c/1':0x5b,
				'd/1':0x5d,
				'e/1':0x5c,
				'f/1':0x61,
				'g/1':0x73,
				// 2
				'a/2':0x63,
				'b/2':0x87,
				'c/2':0x62,
				'd/2':0x6e,
				'e/2':0x6d,
				'f/2':0x2c,
				'g/2':0x2e,
				// 4
				'a/4':0x29,
				'b/4':0x5f,
				'c/4':0x2b,
				'd/4':0x51,
				'e/4':0x57,
				'f/4':0x45,
				'g/4':0x52,
				// 8
				'a/8':0x44,
				'b/8':0x46,
				'c/8':0x47,
				'd/8':0x48,
				'e/8':0x4a,
				'f/8':0x4b,
				'g/8':0x4c,
			}[note] || 0x21);
			}).join('')
		+ String.fromCharCode(0x3d)
		);
	}

});
