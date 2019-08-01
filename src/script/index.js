$(function(){
	$("input[type='button']").click(function(){
var len = $(".question").length;

var totalCorrect = 0;
var notAttended = 0;

for (var i = 0; i<len; i++) {
var isTrueAnswer = $(".answer"+i+":checked").val();

var isAnswer = $("input[name='"+i+"']:checked").val();

if(isTrueAnswer){
	totalCorrect = totalCorrect + 1;
}
else if(!isAnswer) {
	notAttended = notAttended + 1;
}
}

var incorrect = len - totalCorrect - notAttended;

alert("Total: " + len + ", Correct: " + totalCorrect + ", Incorrect: " + incorrect + ", Not Answered: " + notAttended);
});
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
		
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
			$('.menu nav a:nth-last-child(2)').removeClass('active');
			$(".menu nav a:last-child").addClass('active');
		}
	});
});
