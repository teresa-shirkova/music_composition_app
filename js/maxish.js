
$(document).keydown(function(e){
	switch (e.keyCode) {
	case 80:
		$('#write_play_carousel').trigger('pause', true); break;
	case 82:
		$('#write_play_carousel').trigger('resume', true); break;
	default:
$('#write_play_carousel').trigger('isPaused',function(isPaused){
	if (!isPaused) {
		$('#write_play_carousel').trigger('pause', true);
	} else {
		
	}
});

$('#write_play_carousel').trigger('currentPage', function(){console.log('currentPage', arguments);});
$('#write_play_carousel').trigger('isPaused', function(){console.log('isPaused',arguments);});

	} 
	// OK, wit caroufredsel, how do I know:
	// Whether a carousel is paused
	// What position it is in?
});



