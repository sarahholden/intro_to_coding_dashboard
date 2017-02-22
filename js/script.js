$('.hamburger').on('click', function (e) {
	e.preventDefault();
	$('aside').toggleClass('open');
});

$('.lesson-links a').on('click', function (e) {
	e.preventDefault();

	var panelToShow = $(this).data('lesson');

	$('.lesson-links li').removeClass('current');
	$(this).closest('li').addClass('current');

	$('.lessons .expandable-item').fadeOut(200);
	$('#' + panelToShow).delay(200).fadeIn(200);
});



$('.hw-title').on('click', function () {
	// Type code related to event here! :)
	$(this).siblings('.hw-content').toggleClass('active');
});