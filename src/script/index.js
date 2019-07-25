$(function(){
	$('.menu nav a').on('click', function(event) {
		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
	
	$(window).on('scroll', function() {
		$('.target').each(function() {
			if($(window).scrollTop() + 100 >= $(this).offset().top) {
				var id = $(this).attr('id');
				$('.menu nav a').removeClass('active');
				$('.menu nav a[href="#'+ id +'"]').addClass('active');
			}
		});
	});
});