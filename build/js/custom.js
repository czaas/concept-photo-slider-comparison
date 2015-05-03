(function(){

	var mx = $('#draggable').css('left');
	//console.log(mx);

	$('#draggable').on('mousedown', function(e){
		//console.log('Mouse is down');
		var	draggable = $(this),
			newBG = $('#slidingBG'),
			draggableParent = draggable.parent(),
			startWidth = draggableParent.width(),
			pX = e.pageX;

		$(document).on('mouseup', function(){
			mx = draggable.css('left');
			$(document).off('mouseup').off('mousemove');
		});

		$(document).on('mousemove', function(me){
			mx = (me.pageX - pX);

			if(mx <= 0){
				mx = 0;
				draggable.css({
					left: mx
				});
				newBG.css('width', (mx + 'px'));
			} else if( mx >= draggableParent.width() ) {
				mx = draggableParent.width() - 5;
				draggable.css({
					left: mx
				});
				newBG.css('width', (mx + 'px'));
			} else {
				draggable.css({
					left: mx
				});
				newBG.css('width', (mx + 'px'));
			}
		});
	});
}());