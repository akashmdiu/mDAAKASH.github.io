/*for operating area*/
$(document).ready(function(){			
	$(".signIn a,.fa-remove,.search").click(function(){
		$(".login-form").slideToggle("slow");
	});	
	$(".windows a").mouseover(function(){
		$(".fa-windows").css({
			"color":"#0078D7",
		}),2000;
	});

	$(".apple a").mouseover(function(){
		$(".fa-apple").css({
			"color":"#B90808",
		}),"slow";
	});	
	
	$(".linux a").mouseover(function(){
		$(".fa-linux").css({
			"color":"#000408",
		}),"slow";
	});	
	
	$(".android a").mouseover(function(){
		$(".fa-android").css({
			"color":"#EECF13",
		}),"slow";
		
	});
	$(".windows a,.apple a,.linux a,.android a").mouseout(function(){
		$(".system .fa").css({
			"color":"#0D0552",
		}),2000;
	});	

});

/*for scroll button*/
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.gotoup').fadeIn();
	} else {
		$('.gotoup').fadeOut();
	}
}); 
	
$('.gotoup').click(function(){
	$("html, body").animate({ scrollTop: 0 },500);
	return false;
});
