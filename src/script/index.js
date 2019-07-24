$(function(){
	$('#nav nav a').on('click', function(event) {
		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
	$(window).on('scroll', function() {
		$('.target').each(function() {
			if($(window).scrollTop() >= $(this).offset().top) {
				var id = $(this).attr('id');
				$('#nav nav a').removeClass('active');
				$('#nav nav a[href="#'+ id +'"]').addClass('active');
			}
		});
	});
});