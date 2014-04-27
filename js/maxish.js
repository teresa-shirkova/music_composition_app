
function harnessCarousel(callback){

	// Create the carousels
	$('#write_play_carousel').carouFredSel({auto:true});
	$('#note_length_carousel').carouFredSel({auto:true}).trigger('pause', true);
	$('#note_name_carousel').carouFredSel({auto:true}).trigger('pause', true);

	// Get a handle on the state once rather than use callbacks.
	var write_play_carousel;  $('#write_play_carousel').trigger('query', function(crsl){write_play_carousel=crsl;});
	var note_length_carousel; $('#note_length_carousel').trigger('query', function(crsl){note_length_carousel=crsl;});
	var note_name_carousel;   $('#note_name_carousel').trigger('query', function(crsl){note_name_carousel=crsl;});

	$(document).keydown(function(e){
		if (e.keyCode == 32) {
			if (!write_play_carousel.isPaused) {
				$('#write_play_carousel').trigger('pause', true);
				if (write_play_carousel.getCurrentPosition() == 0) {
					$('#note_length_carousel').trigger('resume', true);
				} else {
					getData();
				}
			} else if (!note_length_carousel.isPaused) {
				$('#note_length_carousel').trigger('pause', true);
				$('#note_name_carousel').trigger('resume', true);
			} else {
				$('#note_name_carousel').trigger('pause', true);
				getData();
			}
		}
	});

	// Use callbacks for this:
	function getData(){
		ans = [];
		$('#write_play_carousel').trigger('currentPosition', function(i){
			ans.push(i);
			$('#note_length_carousel').trigger('currentPosition', function(i){
				ans.push(i);
				$('#note_name_carousel').trigger('currentPosition', function(i){
					ans.push(i);
					console.log('data:', ans);
					callback(ans);
					$('#write_play_carousel').trigger('resume', true);
				});
			});
		});
	}
};


