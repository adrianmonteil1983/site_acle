$(function (){
	$("button").click(function(){
		$("#navbarNav").toggle("slow");
	});
	$("#navbarNav a").click(function(){
		$("#navbarNav").hide("slow");
	});
});