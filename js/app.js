$(document).ready(function(){
	var aboutImg = $('.about-box img');

	aboutImg.waypoint(function(){
		aboutImg.addClass('animated fadeIn');
	},{offset:'70%'});

})